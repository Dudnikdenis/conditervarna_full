
const express = require('express');
var cors = require('cors');
const PORT = 3001;
const app = express();
const articles = {
    assortBlock: [ {Img: 'https://ikonditer.ru/files/Nachinki/Red_Velvet.jpg', //https://www.pvsm.ru/images/2019/03/27/polnoe-rukovodstvo-po-useEffect.png
        Title: "Красный бархат", 
        Description: "Яркие красные коржи и белоснежный крем.", 
        Count: "От 3000 рублей" },
        {//Img: tort1, 
        Title: "Молочная девочка",
        Description: "Шоколадная радость для всех домашних",
        Count: "От 2500 рублей"},
        {//Img: tort2, 
        Title: "Сникерс",
        Description: "Шоколадная радость для всех домашних",
        Count: "От 2600 рублей"},
        {//Img: tort3, 
        Title: "Киндер молочный ломтик",
        Description: "Шоколадная радость для всех домашних",
        Count: " От 2800 рублей"}  ]
};

const barber = {
    master: {
            "userName":"userName",
            "date":"date","userRecords":[
            {
                "lineId":1,
                "userId":1,
                "userCompany":"userCompany",
                "date":"date",
                "time":"time",
                "clientName":"clientName",
                "procedureName":"procedureName",
                "comment":"comment"},
            {
               "lineId":2,
                "userId":1,
                "userCompany":"userCompany",
                "date":"date",
                "time":"time",
                "clientName":"clientName",
                "procedureName":"procedureName",
                "comment":"comment"}
        ]
        }
};

app.use(cors());

app.get('/assortiment',(req,res,next)=>{
    res.send(articles);
});

app.get('/records/1',(req,res,next)=>{
    res.send(barber);
});

app.listen(PORT, ()=>{
    console.log('Server start 3001!');
})