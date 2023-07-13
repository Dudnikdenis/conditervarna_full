import React from "react";
import cs from "./Grad.module.css"
import {TextTestActionCrieator} from '../../Redux/assortBlock-reducer'
import gradTort from './../../img/foto-telefona-na-belom-fone.png';

function Grad(props) {
  
  let newElem = React.createRef();
  // эта компанента недолжна знать ничего про dispatch, она просто вызывает функцю которая пришла в props и передает в параметры значение.
      return (
    <section>
      <div className={cs.grad}>
        <img className={cs.grad_img} src={gradTort} alt=""/>
        <div className={cs.download}>
          <h1 className={cs.download_h1}>Приготовим заказ по фото или эскизу</h1>
          <h3 className={cs.download_h3}>Загрузите фотографию или эскиз и мы расчитаем стоимость!</h3>
          <button  className={cs.download_button}>Загрузить фотографию</button>          
        </div>
      </div>
    </section>
    )
};

export default Grad;
