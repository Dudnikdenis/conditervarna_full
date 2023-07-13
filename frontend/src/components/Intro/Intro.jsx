import React from "react";
import cs from "./Intro.module.css"

function Intro() {
    return (<section className={cs.intro}>
                <div className={cs.intro_title}>
                    <h1 className={cs.intro_h1}>Торты в Варне на заказ</h1>
                    <button className={cs.button}>Заказать</button>
                </div>
            </section>	
    )
};

export default Intro;
