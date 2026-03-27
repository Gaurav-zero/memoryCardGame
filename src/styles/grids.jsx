import background from "../assets/hero.png"

function Button({text,url,handleClick,manageScore,item}){
    const BtnStyle= {
        height: "250px",
        backgroundColor: "hotpink",
        display: "inline",
        width: "inherit",
        backgroundImage: `URL(${url})`,
    };

    return(
        <button style={BtnStyle} onClick={(e)=> {manageScore(e); handleClick()}}  value={item}>{text}</button>
    );
}



const BtnContainer= {
    display : "grid",
    gridTemplateRows:"repeat(2,1fr)",
    gridTemplateColumns:"repeat(6, 1fr)",
    marginTop: "50px",
};

export {Button, BtnContainer};