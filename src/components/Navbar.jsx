import React from 'react';
import Styled from 'styled-components'

const StyledNavbar = Styled.div`
   position: fixed;
    top:0;
    width: 100%;
    height:20px;
    display: flex;
    /* padding:10px 20px; */
    z-index:3;
    /* background-color: red; */
    background:linear-gradient(#0f0d16,transparent);
    .left{
        flex:1;
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

`


function Navbar() {
  return (
    <StyledNavbar>
        <div className="left">

        </div>
        <div className="right">
            <div>Start</div>
            <div>Projects</div>
            <div>About</div>
            <div>Contact</div>
        </div>
    </StyledNavbar>
  );
}

export default Navbar;