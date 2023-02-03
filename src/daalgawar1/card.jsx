import React from "react";
import "./card.css"

const Card = (props) =>{
    return(
        <div className="contain">
            <div className="cards">
                <div className="card">
                    <div className="image">
                        <img src={props.img} alt="images"/>
                        <h2>{props.title}</h2>
                    </div>
                    <div className="txt">
                        <button><a href="https://www.youtube.com/">Унших</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;