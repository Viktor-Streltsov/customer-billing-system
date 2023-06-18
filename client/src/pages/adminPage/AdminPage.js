import React, {useEffect} from 'react'
import classes from "./adminPage.module.css"
import {useDispatch, useSelector} from "react-redux"
import {getUsers} from "../../axios/usersApi"
import AddTariff from "../../components/addTariff/AddTariff"
import {getApplicationApi, getApplicationHelpApi} from "../../axios/applicationApi"

function AdminPage() {
    const dispatch = useDispatch()

    const {application, applicationHelp} = useSelector(state => state.applicationReducer)

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getApplicationApi())
        dispatch(getApplicationHelpApi())
    }, [dispatch])

    const {users} = useSelector(state => state.userReducer)

    return (
        <div className={classes.container_content}>
            <AddTariff/>
            <div className={classes.block_table}>
                <h1>Пользователи</h1>
                <table className={classes.table}>
                    <thead>
                    <tr>
                        <th>login</th>
                        <th>email</th>
                        <th>role</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(item => (
                        <tr key={item.id}>
                            <td>{item.login}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className={classes.block_table}>
                <h1>Заявка на подключение</h1>
                <table className={classes.table}>
                    <thead>
                    <tr>
                        <th>phone</th>
                        <th>name</th>
                        <th>address</th>
                        <th>time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {application.map(item => (
                        <tr key={item.id}>
                            <td>{item.phone}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.time}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className={classes.block_table}>
                <h1>Помощь в выборе тарифа</h1>
                <table className={classes.table}>
                    <thead>
                    <tr>
                        <th>phone</th>
                        <th>name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {applicationHelp.map(item => (
                        <tr key={item.id}>
                            <td>{item.phone}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminPage