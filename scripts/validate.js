//Валидация форм
const form = document.querySelector('.popup__form');
const formInput = form.querySelector('.popup__form-input');
const formError = form.querySelector(`.${formInput.id}-error`);

// Добавляем класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add('popup__form-input_type_error');
  // Переданный параметр помещаем в span под полем ввода
  errorElement.textContent = errorMessage;
  // Делаем красным цветом нижнюю границу поля
  errorElement.classList.add('popup__form-input-error_active');
};

// Удаляем класс с ошибкой
const hideInputError = (formElement, inputElement) => {
   // Находим элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__form-input_type_error');
  // Очищаем span под полем ввода
  errorElement.textContent = '';
  // Убираем красный цвет у нижней границы поля
  errorElement.classList.remove('popup__form-input-error_active');
};

// Проверяем валидность поля
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, inputElement);
  }
};

// Функция проверит наличие невалидных полей
// Принимает массив полей
const hasInvalidInput = (inputList) => {
  //проходим по массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  });
};

// Функция переключения состояния кнопки
// Принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__form-button_inactive');
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove('popup__form-button_inactive');
  }
};


const setEventListeners = (formElement) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll('.popup__form-input'));
  //Находим в текущей форме кнопку submit
  const buttonElement = formElement.querySelector('.popup__form-button');

  // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
  toggleButtonState(inputList, buttonElement);

  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement)

      // Вызоваем toggleButtonState и передаем ей массив полей и кнопку
      toggleButtonState(inputList, buttonElement);
    })
  });
};

const enableValidation = () => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement);
  });
};

enableValidation();
