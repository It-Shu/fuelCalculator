import React from 'react';

type ButtonType = {
    title: string
    function?: () => void
}

const Button = (props: ButtonType) => {

    const onClickFunction = () => {
        props.function && props.function()
    }

    return (
        <div>
            <div>
                <button onClick={onClickFunction}>{props.title}</button>
            </div>

        </div>
    );
};

export default Button;