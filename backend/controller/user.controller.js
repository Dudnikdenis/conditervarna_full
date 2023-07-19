const db = require('../db')


class UserController {
    async CreateUser(req,res){
        const {name} = req.body;
        const newUser = await db.query('INSERT INTO public.users(name) VALUES ($1) RETURNING *', [name]);
        console.log(newUser)
        res.json( newUser.rows[0]);
    }

    async GetUser(req,res){
        const User = await db.query('select * from public.users');
        console.log('ok');
        res.json(User.rows)
    }

    async UpdateUser(req,res){
        
    }

    async DeleteUser(req,res){
        
    }
}


module.exports = new UserController();