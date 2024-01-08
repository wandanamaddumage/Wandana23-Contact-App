import React from "react";
import { Link } from "react-router-dom";
import user from "../Images/User.jpg";

const ContactCard = (props) => {
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="User" />
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default ContactCard;