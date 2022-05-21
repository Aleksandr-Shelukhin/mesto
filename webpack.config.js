const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключаем плагин по обработке HTML файлов
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // подключаем плагин, который удаляет содержимое папки dist при каждой сборке
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // подключаем к проекту mini-css-extract-plugin. Он объединяет много css-файлов в один.


module.exports = {
  entry: { // точка входа
    main: './src/pages/index.js'
  },

  output: { // точка вывода
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: ''
  },

  mode: 'development', // добавили режим разработчика
  devServer: { // настройки локального сервера
    static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
    open: true, // сайт будет открываться сам при запуске npm run dev
    hot: true // автоматическое обновление страницы
  },

  module: {
    rules: // rules — это массив правил.
      [
        {   // добавим объект правил для бабеля
          test: /\.js$/, // регулярное выражение, которое ищет все js файлы
          use: 'babel-loader',// при обработке этих файлов нужно использовать babel-loader
          exclude: '/node_modules/'// исключает папку node_modules, файлы в ней обрабатывать не нужно
        },

        {   // добавили правило для обработки файлов
          test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,// регулярное выражение, которое ищет все файлы с такими расширениями
          type: 'asset/resource'
        },

        {   // правило для обработки css-файлов

          test: /\.css$/, // применять это правило только к CSS-файлам
          use: // при обработке этих файлов нужно использовать MiniCssExtractPlugin.loader и css-loader
            [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: { importLoaders: 1 }//добавим опцию для корректной обработки дериктивы @import в css-файлах
              },
              'postcss-loader'
            ]
        }

      ]
  },

  plugins: [
    new HtmlWebpackPlugin({ //обработчик HTML файлов
      template: './src/index.html' // путь к файлу index.html
    }),
    new CleanWebpackPlugin(), // удаляем содержимое папки dist при каждой сборке
    new MiniCssExtractPlugin() // подключаем плагин для объединения CSS файлов
  ]
}
