import {validateSettings, FormValidator} from '../components/formValidator.js';
import {renderCards} from '../components/initial.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

// Переменные
//=============================================================
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

//Экземпляры класса валидациии для каждой формы
const placeFormValidator = new FormValidator(placeForm, validateSettings);
const profileFormValidator = new FormValidator(profileForm, validateSettings);

placeFormValidator.enableValidation();
profileFormValidator.enableValidation();


//открываем и закрываем попапы
profileEditButton.addEventListener('click', function () {
  // передаем значение данных профиля в инпуты формы

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  popupEditProfile.openPopup();
});

profileAddButton.addEventListener('click', function () {
  //Блокируем кнопку отправки
  placeFormValidator.disableButton();
  popupAddNewCard.openPopup();
});

const popupAddNewCard = new PopupWithForm('#placePopup', () => {
    const addCard = {}; // создаем пустой объект
    addCard.name = placeInput.value; // переносим данные из формы в объект
    addCard.link = linkInput.value; // переносим данные из формы в объект

    const card = new Card(addCard, '.element-template');
    const cardElement = card.generateCard();

    cardList.addItem(cardElement) // Добавляем в начало списка готовую карточку с данными из формы

    popupAddNewCard.closePopup()

})

const popupFullImage = new PopupWithImage('#galleryPopup');

const popupEditProfile = new PopupWithForm('#profilePopup', (userData) => {
    userInfo.setUserInfo(userData);
    popupEditProfile.closePopup(); // закрытие попап с профилем

})

const userInfo = new UserInfo ({
  selectorProfileName: '.profile__title',
  selectorProfileJob: '.profile__subtitle'
})

popupFullImage.setEventListeners();
popupAddNewCard.setEventListeners();
popupEditProfile.setEventListeners();


const cardList = new Section({
  data: renderCards,
  renderer: (item) => {
    const card = new Card(item, '.element-template'); // Создадим экземпляр карточки
    const cardElement = card.generateCard(); // Создаём карточку
    cardList.addItem(cardElement)
  }

}, '.elements__list')

cardList.renderItems();

