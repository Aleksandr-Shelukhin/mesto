import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitPlaceForm) {
    super(popupSelector);
    this._formSubmitter = handleSubmitPlaceForm;
    this._formElement = this._popupElement.querySelector('.popup__form');
    this._inputList = this._formElement.querySelectorAll('.popup__form-input')
  }

  _getInputValues() {
    const inputsData = {}
    this._inputList.forEach((input) => {
      inputsData[input.name] = input.value
    });
    return inputsData;

  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmitter(this._getInputValues());
    })

  }

  closePopup() { //метод закрытия попап
    this._formElement.reset();
    super.closePopup();
  }
}
