// popup
//====================================

let popup = document.querySelector('.popup');
let editProfile = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('#nameInput');
let jobInput = formElement.querySelector('#jobInput');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');


function popupOpened() { // открытие попап
  popup.classList.add('popup_opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function popupClose() { // закрытие попап
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();

    // передаем значение полей value в соответсвущие элементы
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    //=============================

    popupClose() // закрытие попап
}

formElement.addEventListener('submit', formSubmitHandler);

editProfile.addEventListener('click', popupOpened); // открытие попап при нажадтии на кнопку редактирования
popupCloseButton.addEventListener('click', popupClose); // закрытие попап при нажадтии на крестик в диалоговом акне









