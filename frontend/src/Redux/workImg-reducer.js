import workTort1 from './../img/торт_1.jpg';
import workTort2 from './../img/торт_2.jpg';
import workTort3 from './../img/торт_3.jpg';
import workTort4 from './../img/торт_4.jpg';
import workTort5 from './../img/торт_5.jpg';
import workTort6 from './../img/торт_6.jpg';

let initialSatate = {    
    workImg: [{ Img: workTort1 },
    { Img: workTort2 },
    { Img: workTort3 },
    { Img: workTort4 },
    { Img: workTort5 },
    { Img: workTort6 }
    ]
};

const workImgReducer = (state = initialSatate, action) => {
    
    return state;    
}

export default workImgReducer;