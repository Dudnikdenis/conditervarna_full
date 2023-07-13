import React from "react";
import { NavLink } from "react-router-dom";
import cs from "./Header.module.css"
import { Link  } from 'react-router-dom'

function Header() {
    return (<header className={cs.header}>
    <div className={cs.wraper}>
        <nav className={cs.wraper_haader}>
        {/* https://reactdev.ru/libs/redux/basics/Reducers/#_3 */}
            <Link className={cs.header_logo} to="/"  >conditervarna.ru</Link>
            <ul className={cs.header_list}>
                <li className={cs.header_item}>
                    <Link to="/assortiment" className={cs.header_center} >Ассортимент</Link>
                </li>
                <li className={cs.header_item}>
                    <Link  to="/grad" className={cs.header_center}>Загрузить фото</Link>
                </li>	
                <li className={cs.header_item}>
                    <Link  to="/works" className={cs.header_center}>Наши работы</Link>
                </li>	
              </ul>
            <p className={cs.tel}>
                +7(952) 504-25-42
            </p>
      </nav>
  </div>
</header>
    )
};

export default Header;
