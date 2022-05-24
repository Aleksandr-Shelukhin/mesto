export default class Card {
  //добавить в конструктор данные карточки
  constructor(data, templateSelector, handleCardClick) {
    this._cardName = data.name;
    this._cardLink = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._elementTemplate = this._getTemplate(); //записываем в _elementTemplate карточку клонированную из template
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _handleLike() {
    this._elementHeart.classList.toggle('element__button_active');
  }

  _deleteCard() {
    this._elementTemplate.remove();
    this._elementTemplate = null;
  }


  generateCard() {
    this.cardImage = this._elementTemplate.querySelector('.element__image');
    // Заполняем карточку данными
    this._setEventListeners();
    this.cardImage.src = this._cardLink;
    this.cardImage.alt = this._cardName;
    this._elementTemplate.querySelector('.element__title').textContent = this._cardName;
    // Возвращаем заполненную данными карточку
    return this._elementTemplate;
  }

  _setEventListeners() {
    this._elementHeart = this._elementTemplate.querySelector('.element__button_type_heart');
    this._elementHeart.addEventListener('click', () => {this._handleLike();});
    this._elementTemplate.querySelector('.element__button_type_trash').addEventListener('click', () => { this._deleteCard(); });
    this.cardImage.addEventListener('click', () => { this._handleCardClick({ name: this._cardName, link: this._cardLink });
    });
  }


}
