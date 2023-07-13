import logo from './../img/4ae46ab86c387180334042fc7015bb0e 1.jpg';
import tort1 from './../img/tort2.jpg';
import tort2 from './../img/tort2.jpg';
import tort3 from './../img/tort3.jpg';
import workTort1 from './../img/торт_1.jpg';
import workTort2 from './../img/торт_2.jpg';
import workTort3 from './../img/торт_3.jpg';
import workTort4 from './../img/торт_4.jpg';
import workTort5 from './../img/торт_5.jpg';
import workTort6 from './../img/торт_6.jpg';
import gradTort from './../img/foto-telefona-na-belom-fone.png';
import assortBlockReducer from './assortBlock-reducer'

const TEXT_TEST = "TEXT-TEST";

let store = {
    // свойства (хранилище данных) приватное
    _state: {
        assortBlock: [ {Img: logo,
        Title: "Красный бархат", 
        Description: "Яркие красные коржи и белоснежный крем.", 
        Count: "От 3000 рублей" },
        {Img: tort1, 
        Title: "Молочная девочка",
        Description: "Шоколадная радость для всех домашних",
        Count: "От 2500 рублей"},
        {Img: tort2, 
        Title: "Сникерс",
        Description: "Шоколадная радость для всех домашних",
        Count: "От 2600 рублей"},
        {Img: tort3, 
        Title: "Киндер молочный ломтик",
        Description: "Шоколадная радость для всех домашних",
        Count: " От 2800 рублей"}  ],
    
        workImg: [{ Img: workTort1 },
        { Img: workTort2 },
        { Img: workTort3 },
        { Img: workTort4 },
        { Img: workTort5 },
        { Img: workTort6 }
        ],
    
        gradTort: gradTort
    },
    _subscribe(observer) {
        this.renderingEntireTree = observer;
     }, //привязываем функцию для отрисовки страницы (подписываемся на событие)
    //геттер для state
    getState() {
        return this._state;
    },
    renderingEntireTree() {    

    },
    // Тестовая функция добавление элемента в assortBlock, в качестве параметра функции нужно прокинуть через props
    dispatch(action){

        this._state.assortBlock = assortBlockReducer(this._state.assortBlock, action);

        this.renderingEntireTree(this._state); //отрисовываем страницу после изменения store
        // if(action.type === TEXT_TEST){
        //     let newBlock = { Img: workTort2, Title: "Test", Description: action.tttt, Count: "35000"};
        //     this._state.assortBlock.push(newBlock);
        //     this.renderingEntireTree(this._state); //отрисовываем страницу после изменения store
        // }
    }
};



export default store;
window.store=store;