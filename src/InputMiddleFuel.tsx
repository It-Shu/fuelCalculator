import React, {ChangeEvent} from 'react';

type InputMiddleFuelType = {
    value: number
    setMiddleFuel: (middleFuel: number) => void
}

const InputMiddleFuel = (props: InputMiddleFuelType) => {

    const setMiddleFuel = (e: ChangeEvent<HTMLInputElement>) => {
        let middleFuel = +e.currentTarget.value
        props.setMiddleFuel(middleFuel)
    }

    return (
        <div>
            <div>
                <input value={props.value} onChange={setMiddleFuel} type="text"/>
            </div>
        </div>
    );
};

export default InputMiddleFuel;