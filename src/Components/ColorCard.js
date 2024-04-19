import React from 'react'

function ColorCard(props) {
    return (
        <>
      
            <div style={{ padding: "50px", backgroundColor: "gray" }}>
                <div style={{ border: "1px solid white", padding: "30px" }}>
                    <div style={{

                        backgroundColor: props.colorCode,
                        gap: "10px",
                        height: "200px",
                        width: '100px',
                        border: "1px solid yellow",
                        borderRadius: "10px",
                        padding: "50px",
                    }}>

                    </div>
                    <h3 style={{ color: props.colorCode }}>{props.name}</h3>
                    <h5 style={{ color: props.colorCode }}>{props.colorCode}</h5>
                </div>


            </div>
        </>


    )
}

export default ColorCard
