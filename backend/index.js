const express = require('express');
const cors = require('cors');
const {v4: uuid} = require('uuid');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

const users = [];

app.get('/user', (req, res) => {
    const { email, password } = req.body;

    console.log('O backend funcionou junto com o front')

    const user = users.find((user) => user.password === password && user.email === email);

    if(user){
        return res.status(201).json(user);
    } else{
        return res.status(201).json('Esse usuário não existe.');
    }

});

app.get('/users', (req, res) => {
    return res.status(201).json(users);
});

app.post('/createaccount', (req, res) => {
    const { name, email, password} = req.body;

    const user = {
        id : uuid(),
        name : name,
        email : email,
        password : password
    };

    users.push(user);

    return res.status(201).json(user);
});

app.listen(PORT, () =>{
    console.log(`Server ON 🟢 ${PORT}`);
});