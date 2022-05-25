import { renderCards, validateSettings } from '../components/initial.js';
import Card from '../components/Сard.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

// Переменные
//=============================================================
//кнопки вызова попапов
const profilePopup = document.querySelector('#profilePopup');  // Попап редактирования профиля
const profileEditForm = document.querySelector('.popup__form_type_profile');  // форма редактирования профиля
const addPlaceForm = document.querySelector('.popup__form_type_place'); // форма добавления новой карты, для отслеживания Submit
const profileEditButton = document.querySelector('.profile__edit-button');  // кнопка правки профиля
const profileAddButton = document.querySelector('.profile__add-button');  // кнопка добавления новой карточки

// поля формы профиля
const nameInput = profilePopup.querySelector('#name-input');
const jobInput = profilePopup.querySelector('#job-input');

//Экземпляры класса валидациии для каждой формы
const placeFormValidator = new FormValidator(addPlaceForm, validateSettings);
const profileFormValidator = new FormValidator(profileEditForm, validateSettings);

placeFormValidator.enableValidation(); // включаем валидацию
profileFormValidator.enableValidation(); // включаем валидацию

profileEditButton.addEventListener('click', function () {
  placeFormValidator.clearAllInputErrors(); // очищаем все поля с ошибками
  createProfileInfo(); // передаем данные профиля
  profileFormValidator.disableButton();
  popupEditProfile.openPopup();
  console.log(placeFormValidator);
});

profileAddButton.addEventListener('click', function () {
  profileFormValidator.clearAllInputErrors(); // очищаем все поля с ошибками
  placeFormValidator.disableButton();
  popupAddNewCard.openPopup();
  console.log(placeFormValidator);
});


const popupEditProfile = new PopupWithForm('#profilePopup', {
  formSubmitter: (userInfo) => {
    user.setUserInfo(userInfo);
    popupEditProfile.closePopup();
  }
});

const popupAddNewCard = new PopupWithForm('#placePopup', {
  formSubmitter: (cardInfo) => {
    const cardElement = renderNewCard({
      name: cardInfo['place'],
      link: cardInfo['link']
    }, '.element-template', popupFullImage.openPopup.bind(popupFullImage));

    cardsList.addItem(cardElement);
    popupAddNewCard.closePopup();
  }
});

const popupFullImage = new PopupWithImage('#galleryPopup');

const user = new UserInfo({
  selectorProfileName: '.profile__title',
  selectorProfileJob: '.profile__subtitle'
});

function createProfileInfo() {
  const userInfo = user.getUserInfo();
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.prof;
}


function renderNewCard(card, templateSelector, imagePopupFunction) {
  const newCard = new Card(card, templateSelector, imagePopupFunction);
  const cardElement = newCard.generateCard(); // вызываем функцию создания узла;
  return cardElement;
}

const cardsList = new Section({
  items: renderCards,
  renderer: (cardItem) => {
    const cardElement = renderNewCard(cardItem, '.element-template', popupFullImage.openPopup.bind(popupFullImage));
    cardsList.addItem(cardElement);
  },
},
  '.elements__list'
);

cardsList.renderItems();

popupEditProfile.setEventListeners();
popupAddNewCard.setEventListeners();
popupFullImage.setEventListeners();








