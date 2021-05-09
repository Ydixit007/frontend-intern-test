import React , { useEffect, useState } from 'react';
import "../styles/modal.css";
import {NavLink} from "react-router-dom";

const Modal = (props) => {
    const [postData , setpostData] = useState([]);
    const getData = async() =>{
        await fetch(`https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts${props.location.pathname}`)
          .then((response)=>{
            return response.json()
          }).then((post) =>{
              setpostData(post)
              console.log(post)
          })
    }

    useEffect(
        () => {
          getData();
        },[]
      );
    

    return (
        <div className="modal-container">
            <div className="modal">
                <div className="exit-btn-container">
                    <NavLink to="/" className="exit-btn">
                        <div className="line"></div>
                        <div className="line"></div>
                    </NavLink>
                </div>
                <div className="image"></div>
                <div className="content">
                    <h2 className="title">{postData.title}</h2>
                    <p className="discription">{postData.content}</p>
                </div>
                <div className="author">
                    <div className="avatar"></div>
                    <h5 className="name">author</h5>
                    <h5 className="role">role</h5>
                </div>
            </div>
        </div>
    )
}

export default Modal;