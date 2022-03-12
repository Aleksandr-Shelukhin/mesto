// popup
//====================================

let popup = document.querySelector('.popup');
let editProfile = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let popupContainer = document.querySelector('.popup__container');

function popupOpened() {
  popup.classList.add('popup_opened');
}

function popupClose() {
  popup.classList.remove('popup_opened');
}


editProfile.addEventListener('click', popupOpened);
popupCloseButton.addEventListener('click', popupClose);

popup.addEventListener('click', popupClose);
popupContainer.addEventListener('click', function(evt) {
  evt.stopPropagation();
});


// form
//====================================
let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('#nameInput');
let jobInput = formElement.querySelector('#jobInput');


function formSubmitHandler (evt) {
    evt.preventDefault();
    nameInput.getAttribute('value');
    jobInput.getAttribute('value');

    console.log(nameInput.value);

    let profileName = document.querySelector('.profile__title');
    let profileJob = document.querySelector('.profile__subtitle');

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);









