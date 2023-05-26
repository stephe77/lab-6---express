const express = require('express');
const router = express.Router();
const jsonParser = express.json();

let user = { user_agent: 0 };
let com = '';

router.get("/", (req, res) => {
    res.status(200).set('Content-Type', 'text/plain', 'charset=utf-8').send("Hello!");
});

router.get("/stats", (req, res) => {
	user.user_agent++;
	res.status(200);
	res.set('Content-Type', 'text/plain', 'charset=utf-8');
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
	res.status(200).set('Content-Type', 'text/plain', 'charset=utf-8').send('Данные успешно отправлены!');
});

module.exports = router;