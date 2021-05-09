import "./styles/style.css";
import React, { useEffect, useState } from 'react';
import Modal from "./components/modal"
import Posts from "./components/posts";
import loadingScreen from "./components/service/loading";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const App = () => {
  
  const [post , setpost] = useState([]);
  const [loading , setLoading] = useState(true);

  const getData = async() =>{
    await fetch("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts")
  .then((response)=>{
    return response.json()
  }).then((data) =>{
    setpost(data);
    setLoading(false);
  })
  };

  useEffect(
    () => {
      getData();
    },[]
  );
  return (
    <>
    <BrowserRouter>
    {
      loading ? 
      <div className="loadingScreen">
        {loadingScreen()}
      </div>:
      <div className="App">
      <div className="card-container">
      {
        post.map( post => (
          <Posts
          key={post.id}
          id={post.id}
          title={post.title}
          discription={post.content}
          date={post.date}
          author={[post.author]}
          image={post.thumbnail}
          />
        ))
      }
      </div>
      <Switch>
        <Route path="/:id" component={Modal}/>
      </Switch>
    </div>
    }
    </BrowserRouter>
    </>
  );
}

export default App;
