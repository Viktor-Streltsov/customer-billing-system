import React from 'react'
import Banner from "../../components/banner/Banner"
import Tariff from "../../components/tariff/Tariff"
import About from "../../components/about/About"
import InputTariff from "../../components/inputTariff/InputTariff"
function MainPage() {

    return (
        <div>
            <Banner/>
            <Tariff/>
            <InputTariff/>
            <About/>
        </div>
    )
}

export default MainPage