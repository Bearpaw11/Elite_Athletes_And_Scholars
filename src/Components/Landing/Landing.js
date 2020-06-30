import React from "react"
import LandingBr from "../../images/landingBR.jpeg"

const landing = () => {
    const style = {
        marginTop: "-32px",
        backgroundImage: `url(${LandingBr})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
        // backgroundSize: 'cover',
        width: '100vw',
        height: '100vh'
    }
     const style1 = {
         fontFamily: 'Open Sans',
         color: 'white',
         paddingTop: '30%',
         textAlign: "center",
         fontSize: '3em'
    }

    const style2= {
        fontFamily: 'Open Sans',
        color: 'white',
        textAlign: "center",
        fontSize: '2em'
    }
    
    return (
        <div style ={style}>
            <h1 style ={style1}>Welcome to Elite Athletes and Scholars</h1>
            <h3 style ={style2}>Coming Soon</h3>
        </div>
    )
}

export default landing