import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._cardImage = this._popupElement.querySelector('.popup__image');
    this._cardTitle = this._popupElement.querySelector('.popup__image-caption');
  }

  openPopup(imageInfo) {
    this._cardTitle.textContent = imageInfo.name;
    this._cardImage.alt = imageInfo.name;
    this._cardImage.src = imageInfo.link;

    super.openPopup();
  }
}
