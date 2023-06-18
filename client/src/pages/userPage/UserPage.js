import React, {useEffect} from 'react'
import classes from "./userPage.module.css"
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import {getUserTariffApi} from "../../axios/tariffApi"
import {loginApi} from "../../axios/usersApi"

function UserPage() {

    const dispatch = useDispatch()

    const {id} = useParams()

    const {userTariffs} = useSelector(state => state.tariffReducer)

    loginApi("userTariffs", userTariffs)

    useEffect(() => {
        dispatch(getUserTariffApi(id))
    }, [dispatch, id])


    return (
        <div className={classes.container_content}>
            <section className={classes.container_tarif}>
                <div className={classes.head_tarif}>
                    <h2>ваши тарифы</h2>
                </div>
                <div className={classes.block_tarif}>
                    <div className={classes.cart_tarif}>
                        <table className={classes.table}>
                            <thead>
                            <tr>
                                <th>title</th>
                                <th>description</th>
                                <th>speed</th>
                                <th>price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {userTariffs.map(item => (
                                <tr key={item.id}>
                                    <td>{item.tariff.title}</td>
                                    <td>{item.tariff.description}</td>
                                    <td>{item.tariff.speed}</td>
                                    <td>{item.tariff.price}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserPage