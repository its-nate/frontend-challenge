import React from "react";

const ButtonPrimary = (props) => {
    return (
      <a href={props.slug}>
        <button className="font-content text-white text-xl md:text-2xl rounded-full bg-pink hover:bg-pinkDark p-5">
          {props.cta}
        </button>
      </a>
    );
}

export default ButtonPrimary