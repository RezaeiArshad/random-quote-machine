import './App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuote } from './store';


const App = () => {
  const quote = useSelector((state) => state.quote);
  const author = useSelector((state) => state.author);
  const color = useSelector((state) => state.color);
  const link = `https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22The%20two%20most%20important%20days%20in%20your%20life%20are%20the%20day%20you%20are%20born%20and%20the%20day%20you%20find%20out%20why.%22%20Mark%20Twain`
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.setProperty('--body-bg-color', color)
  }, [color]);

  return (
    <div id='quote-box' className="main-div">
     <div style={{display: "grid", justifyContent: "center", alignItems: "center", height: "200px", width: "90%", marginLeft: "5%"}}>
      <h1 id='text' className="h1" style={{color: color}}>,,{quote}</h1>
     </div>
     <div className="author-div">
      <p id='author' className="p" style={{color: color}}>-{author}</p>
     </div>
     <div className="refrences">
      <a id='tweet-quote' className="tweet" style={{backgroundColor: color}} href={link}>tweet</a>
      <button id='new-quote' className="button" style={{backgroundColor: color}} onClick={() => dispatch(fetchQuote())}>new quote</button>
     </div>
    </div>
  );
}


export default App;
