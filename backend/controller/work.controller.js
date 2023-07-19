const path = require('path')
const fs = require('fs') //для работы с файлами
const mv = require('mv')
const db = require('../db')


class workController {
    async AddImg(req,res){
        
        // const fileName = await db.query('SELECT COUNT(*) FROM public.users'); 
        // const urlFile = `http://localhost:3001/images/forWork/${Number(fileName.rows[0].count) + 1}.jpg`;
        // const newPath = `${(path.resolve(__dirname, '..'))}\\img\\imgForWork\\${Number(fileName.rows[0].count) + 1}.jpg`;
        // fs.copyFile(req.files.file.path, newPath, function(err, result){  //rename
        //     if(err){
        //        res.writeHead(500, { 'content-type': 'text/plain' });
        //        res.end('Server error.')
        //        console.log(err)
        //     }
        //     else{
        //         res.writeHead(200, { 'content-type': 'text/plain' });
        //         res.end('File saved.');
        //         console.log("Ok")
        //     }
        // } 
        // ) 
        // await db.query(`INSERT INTO public.users(name) values ('${urlFile}');`); 
    }

    async GetWork(req,res){
        const imgWorkDB = await db.query('SELECT * FROM public.imgwork')
        const result = {
            workImg: imgWorkDB.rows
        }
        res.send(result)
    };
}


module.exports = new workController();