export const galleryPopup = document.querySelector('#galleryPopup');
export const popupImage = document.querySelector('.popup__image');
export const popupImageCaption = galleryPopup.querySelector('.popup__image-caption');

//закрывапем попап нажатием на Esc
const handleEscapeDown = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

// закрывапем попап нажатием на левую кнопку мышки
const handleOverlayClick = (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

//открываем попап
export const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');

  //вешаем слушатели на клик мыши и нажатие Esc
  document.addEventListener('keydown', handleEscapeDown);
  popupElement.addEventListener('click', handleOverlayClick);
}

//закрываем попап
export const closePopup = (popupElement) => {
  //Удаляем слушатели на клик мыши и нажатие Esc
  document.removeEventListener('keydown', handleEscapeDown)
  popupElement.removeEventListener('click', handleOverlayClick)

  popupElement.classList.remove('popup_opened');
}

