// popup
//====================================

let popup = document.querySelector('.popup');
let editProfile = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let popupContainer = document.querySelector('.popup__container');

function popupOpened() { // открытие попап
  popup.classList.add('popup_opened');
}

function popupClose() { // открытие попап 
  popup.classList.remove('popup_opened');
}


editProfile.addEventListener('click', popupOpened); // открытие попап при нажадтии на кнопку редактирования
popupCloseButton.addEventListener('click', popupClose); // закрытие попап при нажадтии на крестик в диалоговом акне

popup.addEventListener('click', popupClose); // закрытие попап при нажадтии на затемненный фон за пределами формы, на случай, если сложно попасть на крестик

popupContainer.addEventListener('click', function(evt) { // отмена события закрытия попап при нажатии на форму. сделано из-за предыдущего события выше
  evt.stopPropagation();
});


// form
//====================================
let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('#nameInput');
let jobInput = formElement.querySelector('#jobInput');


function formSubmitHandler (evt) {
    evt.preventDefault();

    // получаем значение полей value
    nameInput.getAttribute('value');
    jobInput.getAttribute('value');
    //=============================


    let profileName = document.querySelector('.profile__title');
    let profileJob = document.querySelector('.profile__subtitle');

    // передаем значение полей value в соответсвущие элементы
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    //=============================
}

formElement.addEventListener('submit', formSubmitHandler);

formElement.addEventListener('submit', popupClose);// Закрытите попап при нажатии на кнопку сохранить









