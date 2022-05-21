import {galleryPopup, popupImage, popupImageCaption, openPopup} from './utils.js';

export default class Card {
  //добавить в конструктор данные карточки
  constructor(data, cardSelector, handleCardClick) {
    this._text = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  //Медод выполнит все операции, чтобы вернуть разметку
  _getTemplate() {
    // забираем разметку из HTML и клонируем элемент
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);

    // вернём DOM-элемент карточки
    return cardElement;
  }

  //удаление карточки
  _deleteCard = () => {
    this._element.remove();//удаляем элемент из DOM
    this._element = null;//обнуляем данные в элементе
  }

  //переключатель иконки лайка
  _handleLike = () => {
    this._element.querySelector('.element__button_type_heart').classList.toggle('element__button_active');
  }

  //открываем попап с картинкой и передаем в него необходимые данные
  _openFullImage = () => {

    popupImageCaption.textContent = this._text;//заполняем подпись к картинке
    popupImage.src = this._image;//прописывем ссылку картинке
    popupImage.alt = this._text;//прописываем alt текст

    openPopup(galleryPopup);//открываем попап с картинкой

  }

  generateCard() {
    this._element = this._getTemplate();//записываем в _element карточку клонированную из template
    this._setEventListeners();

    this.cardImage = this._element.querySelector('.element__image')

    // Заполняем карточку данными
    this._element.querySelector('.element__image').src = this._image;//ссылка на картинку
    this._element.querySelector('.element__image').alt = this._text;//название места в alt
    this._element.querySelector('.element__title').textContent = this._text;//название места

    // Возвращаем заполненную данными карточку
    return this._element;
  }

  //метод со слушателями
  _setEventListeners() {
    this._element.querySelector('.element__button_type_heart').addEventListener('click', this._handleLike); //слушатель лайка
    this._element.querySelector('.element__button_type_trash').addEventListener('click', this._deleteCard); //слушатель нажатия на корзину
    this._element.querySelector('.element__image').addEventListener('click', this._openFullImage); // слушатель нажатия на картинку в карточке

  }
}

