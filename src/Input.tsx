import React, {ChangeEvent} from 'react';

type InputType = {
    value: number
    stateInput: (stateInput: number) => void
}

const Input = (props: InputType) => {

    const setData = (e: ChangeEvent<HTMLInputElement>) => {
        let dataInfo = +e.currentTarget.value
        props.stateInput(dataInfo)
    }

    return (
        <form>
            <input value={props.value} onChange={setData} type="text"/>
        </form>
    );
};

export default Input;