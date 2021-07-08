import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai';
import { FaLinkedin } from "react-icons/fa";



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
          <li style={{ marginTop: "2px" }}>
            Ying Chen |
            <a
              href="https://github.com/chen445"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub size={26} color={"white"} />
            </a>
            |
            <a
              href="https://www.linkedin.com/in/ychen12"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={26} color={"white"} />
            </a>
          </li>
        </div>
        <li className="buttom-logo">
          <img src={window.logoURL2} />
        </li>
      </div>
    );
}
