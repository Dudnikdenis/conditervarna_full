import React from "react";
import cs from "./Assortiment_bloc.module.css";

function Assortiment_bloc(props) {
console.log(props);
    

    return (	
        <div className={cs.assortiment_grid}>
           { props.assortiment.map(a => 
            <div className={cs.assortiment_bloc}>
                <img className={cs.bloc_img} src={a.Img} alt=""/>
                <h1 className={cs.bloc_title}>{a.Title}</h1>
                <h3 className={cs.bloc_description}>{a.Description}</h3>
                <h2 className={cs.bloc_count}>{a.Count}</h2>
                <button className={cs.bloc_button}>Подробнее</button>
            </div>
           )}
        </div>
        
    )
};

export default Assortiment_bloc;
