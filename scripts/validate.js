//создаем объект с элементами DOM
const validateSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_inactive',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__form-input-error_active'
};


// Добавляем класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, settingList) => {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(settingList.inputErrorClass);
  // Переданный параметр помещаем в span под полем ввода
  errorElement.textContent = errorMessage;
  // Делаем красным цветом нижнюю границу поля
  errorElement.classList.add(settingList.errorClass);
};

// Удаляем класс с ошибкой
const hideInputError = (formElement, inputElement, settingList) => {
   // Находим элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settingList.inputErrorClass);
  // Очищаем span под полем ввода
  errorElement.textContent = '';
  // Убираем красный цвет у нижней границы поля
  errorElement.classList.remove(settingList.errorClass);
};

// Проверяем валидность поля
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formElement, inputElement, inputElement.validationMessage, validateSettings);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, inputElement, validateSettings);
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
const toggleButtonState = (inputList, buttonElement, settingList) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, settingList.inactiveButtonClass);
  } else {
    // иначе сделай кнопку активной
    enableButton(buttonElement, settingList.inactiveButtonClass);
  }
};

function disableButton(buttonElement, inactiveButtonState) {
  buttonElement.disabled = true;
  buttonElement.classList.add(inactiveButtonState);
}

function enableButton(buttonElement, inactiveButtonState) {
  buttonElement.disabled = false;
  buttonElement.classList.remove(inactiveButtonState);
}


const setEventListeners = (formElement, settingList) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll(settingList.inputSelector));
  //Находим в текущей форме кнопку submit
  const buttonElement = formElement.querySelector(settingList.submitButtonSelector);

  // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
  toggleButtonState(inputList, buttonElement, validateSettings);

  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement)

      // Вызоваем toggleButtonState и передаем ей массив полей и кнопку
      toggleButtonState(inputList, buttonElement, validateSettings);
    })
  });
};

const enableValidation = (settingList) => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll(settingList.formSelector));

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement, validateSettings);
  });
};

enableValidation(validateSettings);
