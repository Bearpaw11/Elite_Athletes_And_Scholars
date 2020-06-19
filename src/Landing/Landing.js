import React from "react"
import LandingBr from "../images/landingBR.jpeg"

const landing = () => {
    const style = {
        marginTop: "-20px",
        backgroundImage: `url(${LandingBr})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
        // backgroundSize: 'cover',
        width: '100vw',
        height: '100vh'
    }
     const style1 = {
         color: 'white',
         paddingTop: '30%',
         textAlign: "center",
         fontSize: '3em'
    }

     const buttonStyle = {
        margin: '0 auto',
        display: 'block',
        fontSize: '1.5em',
        borderRadius: '10px'
     }
    return (
        <div style ={style}>
            <h1 style ={style1}>Welcome to Elite Athletes and Scholors</h1>
            <button style={buttonStyle}>Click to Enter</button>
        </div>
    )
}

export default landing