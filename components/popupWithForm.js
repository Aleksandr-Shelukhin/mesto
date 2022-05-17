import { Popup } from './popup';

export class PopupWithForm extends Popup {
  constructor({popupSelector, handleSubmitPlaceForm}) {
    super(popupSelector) = popupSelector;
    this._handleSubmitPlaceForm = handleSubmitPlaceForm;
    this._formElement = popupSelector.querySelector('.popup_type_form')

  }

  _getInputValues() {

  }

  setEventListeners() {

  }

  closePopup() { //метод закрытия попап
    this._formElement.reset();
    super.closePopup();
  }
}
