import React from 'react'

const Nav = (props) => {

    return (
        <div className="buttons">
            <button onClick={props.decrease}> {`< Previous`}</button>
            <button onClick={props.increase}>Next ></button>
        </div>
    )
}
export default Nav