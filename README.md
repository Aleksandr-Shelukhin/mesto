# Проект: Mesto Россия

### Обзор
* О проекте
* Особенности
* Примеры
* Инструкция
* Технологии
* Макет
* GitHub Pages
___

❔ **О проекте**

Сервис Mesto: интерактивная страница, где можно загружать и удалять свои картинки, оценить картинки загруженные другими пользователя.
Каждый пользователь может менять свои данные (Имя, увлечения, Аватарку). \
Все данные о пользователях и загруженных ими картинках хранятся в базе данных на сервере. \
На всех активных элементах (кнопках, ссылках) есть эффект наведения, а всплывающие окна с формами имеют анимацию с плавным появлением и исчезновением

🔍 **Особенности**
* Страница полностью адаптивная и кроссбраузерная
* Верстка по методологии BEM/Nested
* Счетчик лайков
* Удаление только собственных картинок
* Попап с подтверждением удаления
* Попап с открытием картинки в полном размере с описанием 
* Код писался в разрезе парадигм ООП
* В проект установлен и настроен сборщик Webpack
* Валидация форм через JavaScript
* Собственный Api
* Разработка велась с использование Git, а так же с созданием отдельных веток для разделения работы над проектом на небольшие задачи.

✔️ **Примеры** 
* Обновить Аватар
<img src="https://landing-easy.ru/images/special/avatar-ban.gif" alt="Обновить Аватар" width="500"/>

* Редактировать профиль
<img src="https://landing-easy.ru/images/special/profile-ban.gif" alt="Редактировать профиль" width="500"/>

* Добавление Карточкии
<img src="https://landing-easy.ru/images/special/place-ban.gif" alt="Добавление Карточкии" width="500"/>

* Удаление Карточки
<img src="https://landing-easy.ru/images/special/delete-ban.gif" alt="Удаление Карточки" width="500"/>

___

⚙️ **Инструкция по развёртыванию и системные требования:** 
* Сборщик уже настроен. Достаточно клонировать репазиторий 
```sh
$ git clone <адрес репазитория>
```
* Установить зависимости
```sh
$ npm install
# если потребуются обновления для пакетов
$ npm update
```

* Собрать проект
```sh
$ npm run build
```
* Готовый проект будет в папке `dist`. Достаточно запустить файл `index.html`

![plugins](https://img.shields.io/badge/-plugins-black?style=flat&logo=StackShare&logoColor=yellow) \
В сборке используются следущие плагины&nbsp;

| Plugin        | Version | README  |
| ------------- |-------------| -----|
| Babel-core    | 7.18.0 | [npmjs.com](https://www.npmjs.com/package/babel-core) |
| Babel-loader  | 8.2.5  | [npmjs.com](https://www.npmjs.com/package/babel-loader) |
| Babel-preset  | 7.18.0 | [npmjs.com](https://www.npmjs.com/package/@babel/preset-env) |
| Autoprefixer  | 10.4.7 | [npmjs.com](https://www.npmjs.com/package/autoprefixer) |
| Clean plugin  | 4.0.0  | [npmjs.com](https://www.npmjs.com/package/clean-webpack-plugin) |
| Css-loader    | 6.7.1  | [npmjs.com](https://www.npmjs.com/package/css-loader) |
| Cssnano       | 5.1.9  | [npmjs.com](https://www.npmjs.com/package/cssnano) |
| Gh-pages      | 4.0.0  | [npmjs.com](https://www.npmjs.com/package/gh-pages) |
| HTML Webpack Plugin    | 5.5.0 | [npmjs.com](https://www.npmjs.com/package/html-webpack-plugin) |
| Mini-css-extract-plugin    | 2.6.0 | [npmjs.com](https://www.npmjs.com/package/mini-css-extract-plugin) |
| Postcss-loader    | 7.0.0 | [npmjs.com](https://www.npmjs.com/package/postcss-loader) |
| Webpack    | 5.72.1 | [npmjs.com](https://www.npmjs.com/package/webpack) |
| Webpack CLI   | 4.9.2 | [npmjs.com](https://www.npmjs.com/package/webpack-cli) |
| Webpack-dev-server    | 4.9.0 | [npmjs.com](https://www.npmjs.com/package/webpack-dev-server) |
| Core-js    | 3.22.6 | [npmjs.com](https://www.npmjs.com/package/core-js) |


 #### 🔧 Технологии
![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)&nbsp;
![HTML](https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5)&nbsp;
![CSS](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=CSS3&logoColor=1572B6)&nbsp;
![JSON](https://img.shields.io/badge/-JSON-05122A?style=flat&logo=JSON)&nbsp;
![BEM](https://img.shields.io/badge/-BEM-05122A?style=flat&logo=BEM)&nbsp;
![OOP](https://img.shields.io/badge/-ООП-05122A?style=flat&logo=StackShare&logoColor=green)\
![Webpack](https://img.shields.io/badge/-Webpack-05122A?style=flat&logo=Webpack)&nbsp;
![Figma](https://img.shields.io/badge/-Figma-05122A?style=flat&logo=Figma)&nbsp;



**Макет**
* [Ссылка на макет в Figma](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4)

**GitHub Pages**
* [Ссылка на готовую страницу](https://aleksandr-shelukhin.github.io/mesto/)

**Автор проекта:**  Александр Шелухин
