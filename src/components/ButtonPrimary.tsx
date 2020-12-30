import React from "react";

const ButtonPrimary = (props) => {
    return (
        <button className="bg-pink p-5">
            <a href={props.slug}>{props.cta}</a>
        </button>
    )
}

export default ButtonPrimary