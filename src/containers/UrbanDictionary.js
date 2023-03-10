import React, {useState, useEffect}from "react";
import Display from "../components/Display";
import Button from "../components/Button";


const UrbanDictionary = ()=>{
    const [articles, setArticles] = useState([]);
    const [selected, setSelected] = useState([]);
    const [next, setNext] = useState(2);
    const [previous, setPrevious] = useState(0);
    const [definedTerm, setDefinedTerm] = useState("JavaScript");

    async function fetchArticles(url = "https://api.urbandictionary.com/v0/define?term=Javascript"){
        const res = await fetch(url);
        const data = await res.json();
        setArticles(data.list);
        setSelected(data.list[0]);
    }

    useEffect(()=>{
        fetchArticles();
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
        fetchArticles(`https://api.urbandictionary.com/v0/define?term=${word}`);
    };

    return(
        <>
        <h1>Urban Dictionary</h1>
        <h2>Defined Term: {definedTerm} </h2>
        <p>No Articles Found</p> 
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