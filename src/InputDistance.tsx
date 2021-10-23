import React, {ChangeEvent} from 'react';

type InputValuesType = {
    value: number
    setDistance: (distance: number) => void
}

const InputDistance = (props: InputValuesType) => {

    const setDistance = (e: ChangeEvent<HTMLInputElement>) => {
        let distance = +e.currentTarget.value
        props.setDistance(distance)
    }

    return (
        <div>
            <div>
                <input value={props.value} onChange={setDistance} type="text"/>
            </div>
        </div>
    );
};

export default InputDistance;