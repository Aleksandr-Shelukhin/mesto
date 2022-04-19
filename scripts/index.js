// Переменные
//=============================================================

//попапы
const profilePopup = document.querySelector('#profilePopup');
const placePopup = document.querySelector('#placePopup');
const popupSubmitButton = placePopup.querySelector('.popup__form-button');
const galleryPopup = document.querySelector('#galleryPopup');
const profilePopupCloseButton = document.querySelector('#profilePopupCloseButton');
const placePopupCloseButton = document.querySelector('#placePopupCloseButton');
const galleryPopupCloseButton = document.querySelector('#galleryPopupCloseButton');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__image-caption');
const popupContainer = document.querySelector('.popup__container');

//кнопки вызова попапов
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const galleryOpen = document.querySelector('.element__image');


//форма профиля
const profileForm = document.querySelector('#profilePopup');
const nameInput = profileForm.querySelector('#name-input');
const jobInput = profileForm.querySelector('#job-input');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

//форма карточки
const placeForm = document.querySelector('#placePopup');
const placeInput = placeForm.querySelector('#place-input');
const linkInput = placeForm.querySelector('#link-input');

//карточка
const placeCard = document.querySelector('.element');
const elementList = document.querySelector('.elements__list');
const elementTemplate = document.querySelector('.element-template').content;

// Функции
//=============================================================

//закрывапем попап нажатием на Esc
const handleEscapeDown = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

//закрывапем попап нажатием на левую кнопку мышки
const handleOverlayClick = (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

//открываем попап
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');

  //вешаем слушатели на клик мыши и нажатие Esc
  document.addEventListener('keydown', handleEscapeDown);
  popupElement.addEventListener('click', handleOverlayClick);

}

//закрываем попап
function closePopup(popupElement) {
  document.removeEventListener('keydown', handleEscapeDown)

  //elfkztv слушатели на клик мыши и нажатие Esc
  popupElement.removeEventListener('click', handleOverlayClick)
  popupElement.classList.remove('popup_opened');
}

//удаление карточки
function deleteCard (evt){
  evt.target.closest('.element').remove();
};

// Редактирование профиля
function handleSubmitProfileForm (evt) {
  evt.preventDefault();

  // передаем значение полей value в соответсвущие элементы
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  //=============================

  closePopup(profilePopup); // закрытие попап с профилем
}

//Собираем карточку
function createCard(newCard){
  const elementItem = elementTemplate.cloneNode('true'); //создаем карточку из template
  const elementImage = elementItem.querySelector('.element__image');

  elementItem.querySelector('.element__title').textContent = newCard.name;
  //функционал лайка
  elementItem.querySelector('.element__button_type_heart').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__button_active')
  });
   //удаляем карточку
  elementItem.querySelector('.element__button_type_trash').addEventListener('click', deleteCard);
  //передаем в попап ссылку на картинку и название картинки по клику на картинку в карточке
  elementImage.addEventListener('click', function(evt) {
    const nameImage = evt.target.alt;
    const linkImage = evt.target.src;

    popupImageCaption.textContent = nameImage;
    popupImage.src = linkImage;
    popupImage.alt = nameImage;

    openPopup(galleryPopup);
  });

  elementImage.alt = newCard.name;
  elementImage.src = newCard.link;

  return elementItem;
};

// Добавление карточки
function handleSubmitPlaceForm (evt) {
  evt.preventDefault();

  const addCard = {}; // создаем пустой объект
  addCard.name = placeInput.value; // переносим данные из формы в объект
  addCard.link = linkInput.value; // переносим данные из формы в объект

  const elementItem = createCard(addCard); // передаем данные из объекта в собранную карточку

  elementList.prepend(elementItem); // Добавляем в начало списка готовую карточку с данными из формы

  closePopup(placePopup); // закрытие попап

  //Обнулять инпуты после закрытия модального окна.
  evt.target.reset();

}

// События
//=============================================================

//Отправка форм
profileForm.addEventListener('submit', handleSubmitProfileForm);
placeForm.addEventListener('submit', handleSubmitPlaceForm);

//открываем и закрываем попапы
profileEditButton.addEventListener('click', function () {
  // передаем значение данных профиля в инпуты формы
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  openPopup(profilePopup);
});

profileAddButton.addEventListener('click', function () {
  //Блокируем кнопку отправки
  disableButton(popupSubmitButton, validateSettings.inactiveButtonClass);

  openPopup(placePopup);
});

profilePopupCloseButton.addEventListener('click', function () {
  closePopup(profilePopup);
});

placePopupCloseButton.addEventListener('click', function () {
  closePopup(placePopup);
});

galleryPopupCloseButton.addEventListener('click', function () {
  closePopup(galleryPopup);
});

// Добавляем на страницу карточки при загрузке
renderCards.forEach(function (item) {
  const elementItem = createCard(item)
  elementList.prepend(elementItem);
});
