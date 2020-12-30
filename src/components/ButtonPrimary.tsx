import React from "react";

const ButtonPrimary = (props) => {
    return (
        <button>
            <a href={props.slug}>{props.cta}</a>
        </button>
    )
}

export default ButtonPrimary