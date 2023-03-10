import React, {useState, useEffect}from "react";
import Display from "../components/Display";
import Button from "../components/Button";


const UrbanDictionary = ()=>{
    const [articles, setArticles] = useState([]);
    const [selected, setSelected] = useState([]);
    const [next, setNext] = useState(2);
    const [previous, setPrevious] = useState(0);
    const [definedTerm, setDefinedTerm] = useState("JavaScript");

    async function fetchArticles(word = definedTerm){
        const res = await fetch(`https://api.urbandictionary.com/v0/define?term=${word}`);
        const data = await res.json();
        setArticles(data.list);
        setSelected(data.list[0]);
    }

    useEffect(()=>{
        fetchArticles(definedTerm);
    }, [])

    console.log(articles)
    console.log(selected)

    const articleSelect = (value)=>{
        setSelected(articles[value-1]);
        setNext(value+1);
        setPrevious(value-1);
    };

    const termChange = (word)=>{
        setDefinedTerm(word);
        fetchArticles(word);
    };

    return(
        <>
        <h1>Urban Dictionary</h1>
        <h2>Search Term: {definedTerm} </h2>
        <form>
            <input type="text" placeholder="Enter a search term"/>
            <button type="submit">Submit</button>
        </form>
        <Display selected={selected}/>
        <Button 
        text="Previous"
        isDisabled={previous === 0}
        clickHandler = {()=>(articleSelect(previous))}

        />
        <Button
        text="Next"
        isDisabled={next === (articles.length + 1)}
        clickHandler = {()=>(articleSelect(next))}
        />
        </>
    )
};

export default UrbanDictionary;