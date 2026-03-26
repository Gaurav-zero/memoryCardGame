import { BtnStyle, BtnContainer } from "../styles/grids";


function Grids(){
    return (
        <div style={BtnContainer}>
            <button style={BtnStyle}>1</button>
            <button style={BtnStyle}>2</button>
            <button style={BtnStyle}>3</button>
        </div>
    )
}

export {Grids};