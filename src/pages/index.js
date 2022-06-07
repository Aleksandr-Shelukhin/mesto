import { validateSettings } from '../components/initial.js';
import Card from '../components/Сard.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import './index.css';

// Переменные
//=============================================================
//кнопки вызова попапов
const profilePopup = document.querySelector('#profilePopup');  // Попап редактирования профиля
const avatarForm = document.querySelector('#profileAvatarEditPopup'); // форма добавления новой карты, для отслеживания Submit
const profileEditForm = document.querySelector('.popup__form_type_profile');  // форма редактирования профиля
const addPlaceForm = document.querySelector('.popup__form_type_place'); // форма добавления новой карты, для отслеживания Submit
const profileEditButton = document.querySelector('.profile__edit-button');  // кнопка правки профиля
const placeAddButton = document.querySelector('.profile__add-button');  // кнопка добавления новой карточки
const profileAvatar = document.querySelector('.profile__avatar-wrapper');  // кнопка добавления новой карточки

// поля формы профиля
const nameInput = profilePopup.querySelector('#name-input');
const jobInput = profilePopup.querySelector('#job-input');

//Экземпляры класса валидациии для каждой формы
const placeFormValidator = new FormValidator(addPlaceForm, validateSettings);
const profileFormValidator = new FormValidator(profileEditForm, validateSettings);
const avatarFormValidator = new FormValidator(avatarForm, validateSettings);

let myId = ''; //пользовательский идентификатор


const api = new Api({
  dataBaseLink: 'https://mesto.nomoreparties.co/v1/cohort-42',
  headers: {
    authorization: '3ca7663a-2cbd-48e6-b1af-d0e72d7c6308',
        'Content-Type': 'application/json'
  }
})

api.getUserInfo()
.then((res) => {
  user.setUserInfo(res);
  user.newAvatar(res);
  myId = res._id;
})
.catch((err) => {
  console.log(err);
});

api.renderCards()
.then((renderCardsList) => {
  cardsList.renderedItems = renderCardsList;
})
.then(() => {
  cardsList.renderItems();
})
.catch((err) => {
  console.log(err);
});



function likeCardHandler(cardId, element, card) {
  if (!element.querySelector('.element__button_type_heart').classList.contains('element__button_active')) {
    api.addLike(cardId)
    .then((data) => {
      card.addLike(data.likes);
    })
  } else {
    api.deleteLike(cardId)
    .then((data) => {
      card.removeLike(data.likes);
    })
  }
}

function deleteCardHandler(cardId, element, card) {
  popupDeleteSubmit.openPopup(cardId, element, card);
}

placeFormValidator.enableValidation(); // включаем валидацию новойкарточки
profileFormValidator.enableValidation(); // включаем валидацию новых данных профиля
avatarFormValidator.enableValidation(); // включаем валидацию добавления аватара

profileEditButton.addEventListener('click', function () { //слушатель редактирования профился
  profileFormValidator.clearAllInputErrors(); // очищаем все поля с ошибками
  createProfileInfo(); // передаем данные профиля
  profileFormValidator.disableButton();
  popupEditProfile.openPopup();
});

placeAddButton.addEventListener('click', function () { //слушатель добавления карточки
  placeFormValidator.clearAllInputErrors(); // очищаем все поля с ошибками
  placeFormValidator.disableButton();
  popupAddNewCard.openPopup();
});


profileAvatar.addEventListener('click', () => { // слушатель обновления аватара
  avatarFormValidator.clearAllInputErrors();
  avatarFormValidator.disableButton();
  popupReplaceAvatar.openPopup();
});


const popupEditProfile = new PopupWithForm('#profilePopup', {
  formSubmitter: (userInfo) => {
    popupEditProfile.showLoadingProcess(true);
    api.addUserInfo(userInfo)
    .then((data) => {
      user.setUserInfo(data);
      popupEditProfile.closePopup();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditProfile.showLoadingProcess(false);
    })
  }
});

const popupReplaceAvatar = new PopupWithForm('#profileAvatarEditPopup', {
  formSubmitter: (data) => {
    popupReplaceAvatar.showLoadingProcess(true);
    api.replaceAvatar({avatar: data['avatar-link']})
    .then((data) => {
      user.newAvatar(data);
      popupReplaceAvatar.closePopup();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupReplaceAvatar.showLoadingProcess(false);
    })
  }
});

const popupAddNewCard = new PopupWithForm('#placePopup', {
  formSubmitter: (cardInfo) => {
    popupAddNewCard.showLoadingProcess(true);
    api.addNewCard({
      name: cardInfo['place'],
      link: cardInfo['link']
    })
    .then((data) => {
      const cardElement = renderNewCard({
        name: cardInfo['place'],
        link: cardInfo['link'],
        _id: data._id,
        likes: [],
        owner: {_id: myId}
      },
      myId,
      '.element-template',
      popupFullImage.openPopup.bind(popupFullImage),
      likeCardHandler,
      deleteCardHandler
      );

      cardsList.addItem(cardElement);
      popupAddNewCard.closePopup();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddNewCard.showLoadingProcess(false);
    })
  }
});


const popupDeleteSubmit = new PopupWithSubmit ('#confirmPopup', {
  formSubmitter: (cardId, elementId, card) => {

    popupDeleteSubmit.showLoadingProcess(true);
    api.deleteCard(cardId, card)
    .then(() => {
      card.deleteCard();
      popupDeleteSubmit.closePopup();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupDeleteSubmit.showLoadingProcess(false);
    })
  }
})

popupDeleteSubmit.setEventListeners();

const popupFullImage = new PopupWithImage('#galleryPopup');

const user = new UserInfo({
  selectorProfileName: '.profile__title',
  selectorProfileJob: '.profile__subtitle',
  selectorProfileAvatar: '.profile__avatar'
});

function createProfileInfo() {
  const userInfo = user.getUserInfo();
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.job;
}

function renderNewCard(card, userId, templateSelector, popupFullImage, likeCardHandler, deleteCardHandler) {
  const newCard = new Card(card, userId, templateSelector, popupFullImage, likeCardHandler, deleteCardHandler);
  const cardElement = newCard.generateCard(); // вызываем функцию создания карточки;
  return cardElement;
}

const cardsList = new Section({
  items: [],
  renderer: (cardItem) => {
    const cardElement = renderNewCard(
      cardItem,
      myId,
      '.element-template',
      popupFullImage.openPopup.bind(popupFullImage),
      likeCardHandler,
      deleteCardHandler
      );
    cardsList.addItem(cardElement);
  },
},
  '.elements__list'
);

cardsList.renderItems();

popupEditProfile.setEventListeners();
popupAddNewCard.setEventListeners();
popupFullImage.setEventListeners();
popupReplaceAvatar.setEventListeners();
