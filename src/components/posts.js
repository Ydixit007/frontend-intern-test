import React from 'react';
import {NavLink} from "react-router-dom";
import "../styles/card.css";

const Posts = ({id,title,image,discription,date,author}) => {
    let publishDate = new Date(date*1000);
    return (
        <div className="card">
            <NavLink to={{pathname:`/${id}`}} className="image" style={{ backgroundImage: `url(${image.small})`}} />
            <div className="image1"  >
            </div>
            <div className="content" >
                <div className="circles">
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                <h2 className="title">{title}</h2>
                <p className="discription">{discription}</p>
                <div className="publish">
                <h5 className="author">{author[0].name} - {author[0].role}</h5>
                <h5 className="date">{publishDate.toLocaleString('default', { month: 'short' })} {publishDate.getDate()},{publishDate.getFullYear()}</h5>
                </div>
            </div>
        </div>
    )
}

export default Posts
