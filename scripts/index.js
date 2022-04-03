// Переменные
//=============================================================

//попапы
const profilePopup = document.querySelector('#profilePopup');
const placePopup = document.querySelector('#placePopup');
const galleryPopup = document.querySelector('#galleryPopup');
const profilePopupCloseButton = document.querySelector('#profilePopupCloseButton');
const placePopupCloseButton = document.querySelector('#placePopupCloseButton');
const galleryPopupCloseButton = document.querySelector('#galleryPopupCloseButton');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__image-caption');

//кнопки вызова попапов
const editProfileButton = document.querySelector('.profile__edit-button');
const addProfileButton = document.querySelector('.profile__add-button');
const openGallery = document.querySelector('.element__image');

//форма профиля
const profileForm = document.querySelector('#profilePopup');
const nameInput = profileForm.querySelector('#nameInput');
const jobInput = profileForm.querySelector('#jobInput');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

//форма карточки
const placeForm = document.querySelector('#placePopup');
const placeInput = placeForm.querySelector('#placeInput');
const linkInput = placeForm.querySelector('#linkInput');

//карточка
const placeCard = document.querySelector('.element');
const elementList = document.querySelector('.elements__list');
const elementTemplate = document.querySelector('.element-template').content;

// Массив со стартовыми данными
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

// Функции
//=============================================================

//открываем попап
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}
//закрываем попап
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}



//удаление карточки
function deleteCard (evt){
  evt.target.closest('.element').remove();
};

// Редактирование профиля
function formSubmitHandlerProfile (evt) {
  evt.preventDefault();

  // передаем значение полей value в соответсвущие элементы
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  //=============================

  closePopup(profilePopup); // закрытие попап с профилем
}



// Добавление карточки
function formSubmitHandlerPlace (evt) {
  evt.preventDefault();

  const elementItem = elementTemplate.cloneNode('true'); //создаем карточку из template
  const elementImage = elementItem.querySelector('.element__image');
  const elementTitle = elementItem.querySelector('.element__title');

  //передаем данные из формы в соответствующие атрибуты
  elementTitle.textContent = placeInput.value;
  elementImage.setAttribute('src', linkInput.value);
  elementImage.setAttribute('alt', placeInput.value);

  placeInput.value = 'Название';
  linkInput.value = 'Ссылка на картинку';

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

    openPopup(galleryPopup);
  });

  elementList.prepend(elementItem);

  closePopup(placePopup); // закрытие попап
}

// События
//=============================================================

//Отправка форм
profileForm.addEventListener('submit', formSubmitHandlerProfile);
placeForm.addEventListener('submit', formSubmitHandlerPlace);

//открываем и закрываем попапы
editProfileButton.addEventListener('click', function () {
  openPopup(profilePopup);
});

addProfileButton.addEventListener('click', function () {
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
  const elementItem = elementTemplate.cloneNode('true'); //создаем карточку из template
  const elementTitle = elementItem.querySelector('.element__title');
  const elementImage = elementItem.querySelector('.element__image');

  //передаем данные из объекта в соответствующие атрибуты
  elementTitle.textContent = item.name;
  elementImage.setAttribute('src', item.link);
  elementImage.setAttribute('alt', item.name);

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

    openPopup(galleryPopup);
  });

  elementList.prepend(elementItem);
});












