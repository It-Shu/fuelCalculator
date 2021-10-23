import React, {ChangeEvent, useState} from 'react';
import './App.css';


function App() {

    const [fuelSum, setFuelSum] = useState<number>()
    const [price, setPrice] = useState<number>()
    const [distance, setDistance] = useState<number>(0)
    const [averageFuel, setAverageFuel] = useState<number>(0)
    const [totalPrice, setTotalPrice] = useState<number>(0)

    const takeValueDis = (e: ChangeEvent<HTMLInputElement>) => {
        let data = +e.currentTarget.value
        setDistance(data)
    }

    const takeValueMiddleFuel = (e: ChangeEvent<HTMLInputElement>) => {
        let middleFuel = +e.currentTarget.value
        setAverageFuel(middleFuel)
    }

    const takeValuePrice = (e: ChangeEvent<HTMLInputElement>) => {
        let price = +e.currentTarget.value
        setTotalPrice(price)
    }


    const onCalculate = () => {
        const dist = distance
        const middleFuel = averageFuel
        const price = totalPrice
        let fuelNeeded = middleFuel % 100 * dist
        let result = Math.round(fuelNeeded / 100)
        let fullPrice = result * price
        setFuelSum(result)
        setPrice(fullPrice)
    }

    return (
        <form className="App">

            <div>Расстояние</div>
            <div>
                {/*<Input value={} stateInput={takeValueDis} />*/}
                <input value={distance} onInput={takeValueDis}/>км
                {/*<InputDistance value={100} setDistance={()=>{}}/> км.*/}
            </div>
            <div>Средний расход топлива</div>
            <div>
                <input value={averageFuel} onInput={takeValueMiddleFuel}/>л/100км
                {/*<InputMiddleFuel value={12} setMiddleFuel={()=>{}}/> л/100км.*/}
            </div>
            <div>Стоимость 1л топлива</div>
            <div>
                <input value={totalPrice} onInput={takeValuePrice}/>руб/л
                {/*<InputPrice value={50} setPriceForOneL={()=>{}}/> руб/л*/}
            </div>
            <div>
                <button onClick={onCalculate}>Calculate</button>
                {/*<Button title='Calculate'/>*/}
            </div>

            <div>
                <div>Необходимое количество топлива</div>
                <div>
                    <input value={fuelSum}/> л.
                </div>
                <div>Стоимость поездки</div>
                <div>
                    <input value={price}/> руб.
                </div>
            </div>
        </form>
    );
}

export default App;
