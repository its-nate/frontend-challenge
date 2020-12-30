import React from "react";

const ButtonPrimary = (props) => {
    return (
      <button className="font-content text-white hover:bg-pinkDark text-2xl rounded-full  bg-pink p-5">
        <a href={props.slug}>{props.cta}</a>
      </button>
    );
}

export default ButtonPrimary