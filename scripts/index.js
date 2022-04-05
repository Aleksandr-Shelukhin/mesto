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
const profileEditButton = document.querySelector('.profile__edit-button');
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


// Функции
//=============================================================

//открываем попап
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}
//закрываем попап
function closePopup(popupElement) {
  popupElement.classList.add('popup_closed');
  setTimeout(function(){
    popupElement.classList.remove('popup_closed');
    popupElement.classList.remove('popup_opened');
  }, 280);
}

//Клонирование карточки из template
//?   Анастасия, здравствуйте!
//?   Я не понимаю какие еще данные можно вытащить в эту функцию из функций 86 и 155
//?   Все слушатели привязаны к переменным, к которым я теряю доступ
//?   вынося их в отдельную функцию.
//?   Как я понял, сюда можно вынести только клонирование template
//?   Буду признателен, если Вы поможете с этим разобраться
function createCard(){
  const elementItem = elementTemplate.cloneNode('true'); //создаем карточку из template

  return elementItem;
};

//удаление карточки
function deleteCard (evt){
  evt.target.closest('.element').remove();
};

// Редактирование профиля
function handlerSubmitProfileForm (evt) {
  evt.preventDefault();

  // передаем значение полей value в соответсвущие элементы
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  //=============================

  closePopup(profilePopup); // закрытие попап с профилем
}


// Добавление карточки
function handlerSubmitPlaceForm (evt) {
  evt.preventDefault();

  const elementItem = createCard()
  const elementImage = elementItem.querySelector('.element__image');
  const elementTitle = elementItem.querySelector('.element__title');

  //передаем данные из формы в соответствующие атрибуты
  elementTitle.textContent = placeInput.value;
  elementImage.setAttribute('src', linkInput.value);
  elementImage.setAttribute('alt', placeInput.value);

  placeInput.value = '';
  linkInput.value = '';

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
profileForm.addEventListener('submit', handlerSubmitProfileForm);
placeForm.addEventListener('submit', handlerSubmitPlaceForm);

//открываем и закрываем попапы
profileEditButton.addEventListener('click', function () {
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
  const elementItem = createCard()
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
