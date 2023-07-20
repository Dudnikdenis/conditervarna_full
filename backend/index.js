const express = require('express');
const path = require('path')
const formData = require("express-form-data");
const userRouter = require('./routes/user.routes');
const gradRouter = require('./routes/grad.routes');
const workRouter = require('./routes/work.routes');
const cors = require('cors');
const PORT = 3001;
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({
    extended: false,
});
const articles = {
    assortBlock: [{
            Img: 'https://ikonditer.ru/files/Nachinki/Red_Velvet.jpg', //https://www.pvsm.ru/images/2019/03/27/polnoe-rukovodstvo-po-useEffect.png
            Title: "Красный бархат",
            Description: "Яркие красные коржи и белоснежный крем.",
            Count: "От 3000 рублей"
        },
        { Img: 'https://ikonditer.ru/files/Nachinki/Red_Velvet.jpg', 
            Title: "Молочная девочка",
            Description: "Шоколадная радость для всех домашних",
            Count: "От 2500 рублей"
        },
        { Img: 'https://ikonditer.ru/files/Nachinki/Red_Velvet.jpg', 
            Title: "Сникерс",
            Description: "Шоколадная радость для всех домашних",
            Count: "От 2600 рублей"
        },
        { Img: 'https://ikonditer.ru/files/Nachinki/Red_Velvet.jpg', 
            Title: "Киндер молочный ломтик",
            Description: "Шоколадная радость для всех домашних",
            Count: " От 2800 рублей"
        }
    ]
};

// parse data with connect-multiparty. 
app.use(formData.parse());
// delete from the request all empty files (size == 0)
app.use(formData.format());
// change the file objects to fs.ReadStream 
app.use(formData.stream());
// union the body and the files
app.use(formData.union());

//делаем статичные директории
app.use('/images/decor', express.static(__dirname + '/img/imgForDecoration'));  
app.use('/images/forWork', express.static( __dirname + '/img/imgForWork'));
app.use('/images/work', express.static(__dirname + '/img/imgWork'));


app.use(cors());
app.use(express.json());
app.use('/api', userRouter);
app.use('/grad', gradRouter);
app.use('/work', workRouter);

// app.post('/grad/Add', urlencodedParser, function (
//     request,
//     response
// ) {
//     if (!request.body) return response.sendStatus(400);
//     console.log(request.body);
//     response.send(
//         `${request.body.userName} - ${request.body.userAge}`
//     );
// });

app.get('/assortiment', (req, res, next) => {
    res.send(articles);
});
// app.get('/work', (req, res, next) => {
//     res.send(articles);
// });

app.listen(PORT, () => {
    console.log('Server start 3001!');
})