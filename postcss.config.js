// подключаем плагины в файл
const autoprefixer = require('autoprefixer');// добавляем вендорные префиксы
const cssnano = require('cssnano'); // минифицируем CSS код

module.exports = {
    plugins: [// подключаем плагины к PostCSS    
        autoprefixer,// подключаем autoprefixer
        // cssnano при подключении нужно передать объект опций
        // { preset: default } говорит о том, что нужно использовать
        // стандартные настройки минификации
        cssnano({ preset: 'default' })
    ]
};