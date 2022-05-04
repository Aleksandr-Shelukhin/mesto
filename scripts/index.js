import {validateSettings, FormValidator} from './validate.js';
import {renderCards} from './initial.js';
import {openPopup, closePopup} from './utils.js';
import {Card} from './card.js';

// Переменные
//=============================================================
//попапы
const profilePopup = document.querySelector('#profilePopup');
const placePopup = document.querySelector('#placePopup');
const galleryPopup = document.querySelector('#galleryPopup');
const profilePopupCloseButton = document.querySelector('#profilePopupCloseButton');
const placePopupCloseButton = document.querySelector('#placePopupCloseButton');
const galleryPopupCloseButton = document.querySelector('#galleryPopupCloseButton');

//кнопки вызова попапов
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

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
const elementList = document.querySelector('.elements__list');

//Экземпляры класса валидациии для каждой формы
const placeFormValidator = new FormValidator(placeForm, validateSettings);
const profileFormValidator = new FormValidator(profileForm, validateSettings);

placeFormValidator.enableValidation();
profileFormValidator.enableValidation();

// Функции
//=============================================================

// Редактирование профиля
function handleSubmitProfileForm (evt) {
  evt.preventDefault();

  // передаем значение полей value в соответсвущие элементы
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  //=============================

  closePopup(profilePopup); // закрытие попап с профилем
}

// Добавление карточки
function handleSubmitPlaceForm (evt) {
  evt.preventDefault();

  const addCard = {}; // создаем пустой объект
  addCard.name = placeInput.value; // переносим данные из формы в объект
  addCard.link = linkInput.value; // переносим данные из формы в объект

  const card = new Card(addCard, '.element-template');
  const cardElement = card.generateCard();

  elementList.prepend(cardElement); // Добавляем в начало списка готовую карточку с данными из формы

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
  const formValidator = new FormValidator(placeForm, validateSettings)
  formValidator.disableButton();
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
renderCards.forEach((item) => {
  // Создадим экземпляр карточки
  const card = new Card(item, '.element-template');
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

  // Добавляем в DOM
  elementList.prepend(cardElement);
});
