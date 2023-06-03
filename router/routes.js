const express = require('express');
const router = express.Router();
const jsonParser = express.json();

let user = { user_agent: 0 };
let com = '';

function validation(req, res, next){
	if(JSON.stringify(req.body) == '{}'){
		next(error);
	}else next();
}

function checkAuthorization(req, res, next){
	const apiKey = req.query.key;
	if (apiKey !== '123'){
		next(err);
		console.log('проверка на кей');
	}
	else next();
}

router.get("/", (req, res) => {
    res.status(200);
	res.set('Content-Type', 'text/plain');
	res.send("Hello!");
});

router.post('/login', jsonParser, validation, checkAuthorization, (req, res) => {
	res.send('Успешно!');
});

router.get("/stats", (req, res) => {
	user.user_agent++;
	res.status(200);
	res.set('Content-Type', 'text/plain');
    res.send(`<table>
        <tr><td>User-agent:</td>
		<td>Request:</td></tr>
		<tr><td>${req.headers["user-agent"]}</td>
		<td>${user.user_agent}</td></tr>
		</table>`);
});

router.post("/comments", jsonParser, (req, res) => {
    console.log(req.body);
	com += JSON.stringify(req.body);
	res.status(200);
	res.set('Content-Type', 'text/plain');
	res.send('Данные успешно отправлены!');
});

module.exports = router;