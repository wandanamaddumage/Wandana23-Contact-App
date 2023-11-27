import React from "react";
import user from "../Images/user.png";

const ContactCard = (props) => {
    const{id, name, email} = props.contact;
    return (
        <div className="items">
            <hr style={{ margin: "20px 0", border: "none", borderBottom: "2px solid #ccc" }} />
            <img className="ui avatar image" src="user" alt="user"/>
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <div className="actions">
                <i className="trash alternate outline icon" 
                    style={{ color: "red", marginTop: "7px", cursor: "pointer" }}
                onClick={() => props.clickHandler(id)}
                ></i>
            </div>
        </div>
    );
};

export default ContactCard;