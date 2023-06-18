import React, {useEffect} from 'react'
import classes from "./header.module.css"
import {links} from "./../../links/links"
import {Link, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {getTariffsApi} from "../../axios/tariffApi"
import {setIsAuth} from "../../store/slices/userSlice"
import {getUsers} from "../../axios/usersApi"

function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isAuth, user} = useSelector(state => state.userReducer)

    const logOut = () => {
        dispatch(setIsAuth(false))
    }
    const admin = () => {
        navigate(links.admin)
    }
    const userCabinet = () => {
        navigate(`/user/${user.id}/`)
    }

    useEffect(() => {
        dispatch(getTariffsApi())
        dispatch(getUsers())
    }, [dispatch])

    return (
        <header className={classes.head}>
            <nav className={classes.nav}>
                <ul className={classes.nav_content}>
                    <li>
                        <Link
                            className={classes.btn_nav}
                            to={links.base}
                        >Главная</Link>
                    </li>
                    <li>
                        <Link
                            className={classes.btn_nav}
                            to={links.contact}
                        >Контакты</Link>
                    </li>
                    {isAuth
                        ?
                        <>
                            <li>
                                <button
                                    className={classes.btn_nav}
                                    onClick={userCabinet}>Кабинет</button>
                            </li>
                            {user.role === "ADMIN"
                                ?
                                <button
                                    className={classes.btn_nav}
                                    onClick={admin}>Admin</button>
                                :
                                ''
                            }
                            <li>
                                <button
                                    className={classes.btn_nav}
                                    onClick={logOut}>Выход</button>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <Link className={classes.btn_nav} to={links.signup}>Регистрация</Link>
                            </li>
                            <li>
                                <Link className={classes.btn_nav} to={links.login}>Вход</Link>
                            </li>
                        </>
                    }

                </ul>
            </nav>
        </header>
    )
}

export default Header