import React from "react";

const History = ({history, deleteHistory})=>{
    const historyItem = history.map((item) => {
        return (<li>{item}<button>Delete</button></li>)})

    return(
        <>
            
            <ul>
                {historyItem}
            </ul>
        </>

    )
};

export default History;