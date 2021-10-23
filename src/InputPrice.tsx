import React, {ChangeEvent} from 'react';

type InputPriceType = {
    value: number
    setPriceForOneL: (priceForOneL: number) => void
}

const InputPrice = (props: InputPriceType) => {

    const setPriceForOneL = (e: ChangeEvent<HTMLInputElement>) => {
        let priceForOneL = +e.currentTarget.value
        props.setPriceForOneL(priceForOneL)
    }

    return (
        <div>
            <div>
                <input value={props.value} onChange={setPriceForOneL} type="text"/>
            </div>
        </div>
    );
};

export default InputPrice;