import React , { useEffect, useState } from 'react';
import "../styles/modal.css";
import {NavLink} from "react-router-dom";

const Modal = ({match}) => {
    
    useEffect(
        () => {
          getData();
        },[]
      );

    const [postData , setpostData] = useState({
        "title": "",
        "content":"",
        "thumbnail": {
            "large": "",
          },
          "author": {
            "name": "",
            "avatar": "",
            "role": ""
          }
    });
    
    const getData = async() =>{
        const fetchData = await fetch(`https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts/${match.params.id}`)
        const post = await fetchData.json();
        setpostData(post);
    }

    return (
        <div className="modal-container">
            <div className="modal">
                <div className="exit-btn-container">
                    <NavLink to="/" className="exit-btn">
                        <div className="line"></div>
                        <div className="line"></div>
                    </NavLink>
                </div>
                <div className="image" style={{ backgroundImage: `url(${postData.thumbnail.large})`}}></div>
                <div className="content">
                    <h2 className="title">{postData.title}</h2>
                    <p className="discription">{postData.content}</p>
                </div>
                <div className="author">
                    <div className="avatar" style={{ backgroundImage: `url(${postData.author.avatar})`}}></div>
                    <h5 className="name">{postData.author.name}</h5>
                    <h5 className="role">{postData.author.role}</h5>
                </div>
            </div>
        </div>
    )
}

export default Modal;