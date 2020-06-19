import React from "react"
import Tennis from "../images/tennis.jpeg"

const landing = () => {
    const style = {
        marginTop: "-20px",
        backgroundImage: `url(${Tennis})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh'
    }
    return (
        <div Tennis style ={style}>
            <h1>Welcome to Elite Athletes and Scholors</h1>
            <button className = "enter">Click to Enter</button>
        </div>
    )
}

export default landing