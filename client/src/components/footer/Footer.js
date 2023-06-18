import React from 'react'
import classes from "./footer.module.css"
import telegram from "../../img/telegram.png"
import viber from "../../img/viber.png"

function Footer() {
    return (
        <footer className={classes.footer}>
            <ul className={classes.container_footer}>
                <li className={classes.btns_footer}>
                    <a href="#"><span>О компании</span></a>
                    <a href="#"><span>Документы</span></a>
                </li>
                <li className={classes.btns_footer}>
                    <a href="#"><span>Тарифы для дома</span></a>
                    <a href="#"><span>Контакты</span></a>
                </li>
                <li className={classes.btn_img_footer}>
                    <img src={viber} alt="icon"/>
                    <img src={telegram} alt="icon"/>
                </li>
            </ul>
        </footer>
    )
}

export default Footer