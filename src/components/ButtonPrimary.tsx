import React from "react";

const ButtonPrimary = (props) => {
    return (
      <button className="font-content text-white text-2xl rounded-full bg-pink hover:bg-pinkDark p-5">
        <a href={props.slug}>{props.cta}</a>
      </button>
    );
}

export default ButtonPrimary