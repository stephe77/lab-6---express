const express = require('express');
const restAPI = require('./router/routes');

const app = express();
const PORT = 5000;
const HOST = "127.0.0.1";

app.use(express.static('public'));
app.use("/v1", restAPI);

app.use((req, res) => {
	res.status(404).send('Данная страница не найдена!');
});

app.use((err, req, res) => {
	res.status(500).send('Ошибка сервера')
});

app.listen(PORT, HOST, () => {
    console.log(`Сервер запущен http://${HOST}:${PORT}`);
});