import React from 'react'

export const CounterDiv = ({ fromValue, toValue, label, speed }) => {

    return (
        <div className="col-md-3 text-center animate-box fadeInUp animated">
            <span className="colorlib-counter js-counter" data-from={fromValue} data-to={toValue} data-speed={speed} data-refresh-interval="50">{toValue}</span>
            <span className="colorlib-counter-label">{label}</span>
        </div>
    )

}

export default CounterDiv;