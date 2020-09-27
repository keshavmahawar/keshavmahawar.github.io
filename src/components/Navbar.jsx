import React from "react";
import Styled from "styled-components";

const StyledNavbar = Styled.div`
   position: fixed;
    top:0;
    width: 90%;
    /* height:20px; */
    display: flex;
    padding:0 5%;
    align-items: baseline;
    z-index:7;
    background:linear-gradient(#0f0d16,transparent);
    /* border: 1px solid white; */
    .left{
        flex:1;
        .heading{
            color:white;
            font-weight:bold;
            font-size:45px;
            margin: 5px 0;
        }
    }
    a{
        text-decoration:none;
        color: white;
    }
    .right{
        display: flex;
        & > div{
            color: white;
            font-size:23px;
            font-weight:bold;
            margin: 15px 10px;
            opacity: 0.7;
            transition: opacity 0.5s;
        }   
        & > div:hover{
            opacity: 1;
        }
        & > div::after{
            content: " />";
            color: #494949;

        }
    } 

`;

function Navbar() {
    return (
        <StyledNavbar>
            <div className="left">
                <div className="heading">&lt; Keshav /&gt;</div>
            </div>
            <div className="right">
                <div>
                    <a href="#start">Start</a>
                </div>
                <div>
                    <a href="#projects">Projects</a>
                </div>
                <div>
                    <a href="#about">About</a>
                </div>
                <div>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </StyledNavbar>
    );
}

export default Navbar;
