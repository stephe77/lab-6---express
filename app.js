const express = require('express');
const restAPI = require('./router/routes');
const morgan = require("morgan");
const helmet = require("helmet");


const app = express();
const PORT = 5000;
const HOST = "127.0.0.1";

app.use(express.static('public'));
app.use("/v1", restAPI);

app.use(morgan('dev'));
app.use(helmet());

app.use((req, res) => {
	res.status(404).send('Страница не существует');
});

app.use((err, req, res) => {
	res.status(500).send('Сервер не отвечает')
});

app.listen(PORT, HOST, () => {
    console.log(`Сервер запущен http://${HOST}:${PORT}`);
});