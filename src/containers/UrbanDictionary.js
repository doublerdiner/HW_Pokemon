import React, {useState, useEffect}from "react";
import Display from "../components/Display";
import Button from "../components/Button";
import History from "../components/History";


const UrbanDictionary = ()=>{
    const [articles, setArticles] = useState([]);
    const [selected, setSelected] = useState([]);
    const [next, setNext] = useState(2);
    const [previous, setPrevious] = useState(0);
    const [definedTerm, setDefinedTerm] = useState("JavaScript");
    const [newSearchText, setNewSearchText] = useState("");
    const [history, setHistory] = useState([]);

    async function fetchArticles(word = definedTerm){
        const res = await fetch(`https://api.urbandictionary.com/v0/define?term=${word}`);
        const data = await res.json();
        if (data.list.length > 0){
        setArticles(data.list);
        setSelected(data.list[0]);
        document.getElementById("display").style.display = "block";
        document.getElementById("noresult").style.display = "none";
    } else{
        document.getElementById("display").style.display = "none";
        document.getElementById("noresult").style.display = "block";
        }
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

    const newSearch= (e)=>{
        e.preventDefault();
        setDefinedTerm(newSearchText);
        fetchArticles(newSearchText);
        addHistory(newSearchText);
        setNewSearchText("");
        document.getElementById("form").reset()
    }

    const handleInputChange = (e)=>{
        setNewSearchText(e.target.value);
    };

    const addHistory = (word)=>{
        const newHistory = [...history, word];
        setHistory(newHistory);
    };

    const clearHistory = ()=>{
        const newHistory = [];
        setHistory (newHistory);
    };

    const clearHistoryItem = (word)=>{
        const newHistory = history.filter((item)=>{
            return item !== word;
        })
        setHistory(newHistory);
    };

    return(
        <>
        <h1>Urban Dictionary</h1>
        <div className="bottom">
            <section className="left">
                <h2>Search History</h2>
                <Button 
                text="Clear All History"
                clickHandler={()=>(clearHistory())}
                />
                <History history={history} deleteHistory={clearHistoryItem}/>

            </section>
            <section className="right">
                <h2>Search Term: {definedTerm} </h2>
                <form id="form" onSubmit={newSearch}>
                    <input type="text" placeholder="Enter a search term" onChange={handleInputChange}/>
                    <button type="submit">Submit</button>
                </form>
                <div id="display">
                    <Display selected={selected}/>
                </div>
                <div id="noresult">
                    <h3>No Results! Please search again...</h3>
                </div>
                <div className="buttons">
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
                </div>
            </section>
        </div>
        </>
    )
};

export default UrbanDictionary;