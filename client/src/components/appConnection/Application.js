import React, {useState} from 'react'
import classes from "./application.module.css"
import {links} from "../../links/links"
import close from "../../img/close.png"
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import {addApplicationApi} from "../../axios/applicationApi"

function Application() {
    const dispatch = useDispatch()

    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [time, setTime] = useState('')

    const isFormValid = () => phone && name && address && time


    const submitHandler = (e) => {
        e.preventDefault()
        if (!isFormValid()) {
            return alert("Введите все данные")
        }

        const formData = new FormData()
        formData.append('phone', phone)
        formData.append('name', name)
        formData.append('address', address)
        formData.append('time', time)
        dispatch(addApplicationApi(formData))
    }

    return (
        <div className={classes.container_modal}>
            <div className={classes.block_head}>
                <h2 className={classes.head_modal}>Заявка на подключение</h2>
                <Link to={links.base}><img src={close} alt="close"/></Link>
            </div>
            <input
                type="text"
                name="phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+996 (___) ___-__-__ *"/>
            <input
                type="text"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Как Вас зовут?"/>
            <input
                type="text"
                name="address"
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder="Адрес дома"/>
            <input
                type="text"
                name="name"
                value={time}
                onChange={e => setTime(e.target.value)}
                placeholder="Удобное время для звонка"/>
            <p
                className={classes.call}
                onClick={submitHandler}>Жду звонка</p>
        </div>
    )
}

export default Application