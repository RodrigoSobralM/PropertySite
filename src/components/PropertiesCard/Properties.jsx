import React from "react";
export const PropertiesCard = ({title , cover, body}) =>{
    <div className="properties_card">
        <img src={cover} alt="img"/>
        <div className="properties_content">
            <h3> {title} </h3>
            <p>{body} </p>
        </div>
    </div>
}