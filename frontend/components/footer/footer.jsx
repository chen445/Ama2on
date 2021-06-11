import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai';



export const Footer = ()=>{
    return (
      <div className="footer">
        <div className="back-button">
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Back to Top
          </button>
        </div>
        <div className="footer-infor">
          <li>Get to Know the Creator</li>
          <li>
            Ying Chen  | <AiOutlineGithub size={26} />
          </li>
        </div>
        <li>
          <img src={window.logoURL2} />
        </li>
      </div>
    );
}
