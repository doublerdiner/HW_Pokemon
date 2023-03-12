import React from "react";

const History = ({history, deleteHistory, clickHistory})=>{
    const historyItem = history.map((item, index) => {
        return (<li key={index} onClick={()=>(clickHistory(item))}>{item}<button onClick={()=>{deleteHistory(item)}}>Delete</button></li>)})

    return(
        <>
            
            <ul>
                {historyItem}
            </ul>
        </>

    )
};

export default History;