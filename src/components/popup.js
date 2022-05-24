export default class Popup {

  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeButton = this._popupElement.querySelector('.popup__close-button');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  openPopup() { // метод открытия попап
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  closePopup() { // метод закрытия попап
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) { // метод закрытия попап по нажатию на ESC
    if (evt.key === 'Escape') {
      this.closePopup();
    };
  }

  _handleOverlayClick = (evt) => { // метод закрытия попап нажатием на левую кнопку мышки
    if (evt.target.classList.contains('popup_opened')) {
      this.closePopup(evt.target);
    }
  }
  setEventListeners() { // метод закрытия попап по нажатию на кнопку закрытия и на темную область
    this._popupElement.addEventListener('click', this._handleOverlayClick);
    this._closeButton.addEventListener('click', () => { this.closePopup(); });
  }
}
