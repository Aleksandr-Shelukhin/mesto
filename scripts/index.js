// popup
//====================================

const popup = document.querySelector('#profilePopup');
const editProfile = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('#nameInput');
const jobInput = formElement.querySelector('#jobInput');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const elementList = document.querySelector('.elements__list');
const elementTemplate = document.querySelector('.element-template').content;



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


/* Render cards */
const renderCards = [
  {
    name: 'Эльбрус',
    link: 'https://cdn.pixabay.com/photo/2021/01/29/12/27/mountain-5960840_960_720.jpg'
  },
  {
    name: 'Екатеринбург',
    link: 'https://cdn.pixabay.com/photo/2022/01/07/02/48/ekaterinburg-6920943_960_720.jpg'
  },
  {
    name: 'Коломна',
    link: 'https://cdn.pixabay.com/photo/2018/09/18/17/12/kolomna-3686685_960_720.jpg'
  },
  {
    name: 'Москва',
    link: 'https://cdn.pixabay.com/photo/2018/12/26/05/13/moscow-3895333_960_720.jpg'
  },
  {
    name: 'Санкт-Петербург',
    link: 'https://cdn.pixabay.com/photo/2021/12/29/19/02/peter-6902548_960_720.jpg'
  },
  {
    name: 'Владивосток',
    link: 'https://cdn.pixabay.com/photo/2014/08/29/03/34/bridge-430446_960_720.jpg'
  }
];

renderCards.forEach(function (element) {
  const elementItem = elementTemplate.cloneNode('true');

  elementItem.querySelector('.element__title').textContent = element.name;
  elementItem.querySelector('.element__image').setAttribute('src', element.link);

  elementList.append(elementItem);
});





