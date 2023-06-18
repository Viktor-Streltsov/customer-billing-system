import React from 'react'
import classes from "./about.module.css"
import list from "../../img/list.png"

function About() {
    return (
        <section className={classes.container_docum}>
            <div className={classes.block_docum}>
                <div className={classes.head_doc}>
                    <h2>документы</h2>
                </div>
                <ul className={classes.block_docums_list}>
                    <li>
                        <img src={list} alt="list"/>
                            <p className={classes.doc1}>Договор оферты на оказание услуг связи (Интернет)</p>
                    </li>
                    <li>
                        <img src={list} alt="list"/>
                            <p className={classes.doc2}>Договор оферты на оказание услуг связи (Цифровое Телевидение)</p>
                    </li>
                    <li>
                        <img src={list} alt="list"/>
                            <p className={classes.doc3}>Лицензия 1</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About