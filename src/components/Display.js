import React from "react";

const Display = ({selected})=>{


    return(
        <table>
            <tbody>
                <tr>
                    <th>Definition:</th>
                    <td>{selected.definition}</td>
                </tr>
                <tr>
                    <th>Example:</th>
                    <td><i>{selected.example}</i></td>
                </tr>
                <tr>
                    <th>Author:</th>
                    <td>{selected.author}</td>
                </tr>
                <tr>
                    <th>Likes:</th>
                    <td>{selected.thumbs_up}</td>
                </tr>
                <tr>
                    <th>Dislikes:</th>
                    <td>{selected.thumbs_down}</td>                
                </tr>

            </tbody>
        </table>
    )
};

export default Display;