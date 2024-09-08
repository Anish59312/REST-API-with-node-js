import express from 'express';
import {v4 as uuidv4} from 'uuid';

let users = [
    {
        firstname:"John",
        lastname:"Doe",
        age:30
    },
    {
        firstname:"Jane",
        lastname:"Wade",
        age:30
    },
];

const router = express.Router();

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    console.log(req.body);
    const user = req.body;
    users.push({ id: uuidv4(), ...user});
    res.send(user);
});

router.get('/:id', (req, res) => {
    console.log('get user by id');

   const id = req.params.id;

   const foundUser = users.find((user) => user.id == id);

   if(foundUser){
    res.send(foundUser);
   }
   else{
    res.send('user not found');
   }

});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    users = users.filter((user) => user.id != id);

    res.send(`user with id ${id} is deleted`);
});

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const {firstname, lastname, age} = req.body;

    const user = users.find((user) => user.id == id);

    if(firstname) {
        user.firstname = firstname;
    }
    if(lastname) {
        user.lastname = lastname;
    }
    if(age) {
        user.age = age;
    }

    res.send(`user updated ${user}`);
});

router.get('/save', (req, res) =>{
    
});

export default router;