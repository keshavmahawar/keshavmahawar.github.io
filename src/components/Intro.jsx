import React from "react";
import Styled from "styled-components";
import {Line, RightContainer, Heading} from './StyledComponents';

const StyledIntro = Styled.div`
    background-color: #0f0d16;
    position: relative;    
    color: white;
    min-height: 100vh;
    display: grid;
    align-items: center;
`;

const IntroPara = Styled(RightContainer)`
    margin-left: calc(10% + 20px);
    margin-right: 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* bottom:0; */
    align-items:center;
    & > div {
        flex:1;
        min-width:300px;
    }
    .profileImg {
        margin:20px;
        border-radius: 50%;
        border: 20px solid #5918df;
        min-width: 200px;
        max-width: 400px;
        box-shadow: 0px 0px 30px 0px #5918df88,0px 0px 30px 0px #5918df88 inset;
        transition: transform .2s;
        animation-duration: 2s;
        animation-name: slideIn;
        overflow: hidden;
    }
    .profileImg img {
        width:100%;
        animation-duration: 2.5s;
        animation-name: slideUp;
        transform: translateY(5%);
    }
    .profileImg:hover{
        transform: translateY(-5%) scale(1.1);
    }
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0.5;
        }

        to {
            transform: translateX(0%);
            opacity: 1;
        }
    }    
    @keyframes slideUp {
        from {
            transform: translateY(100%);
            opacity: 0.5;
        }

        to {
            transform: translateY(5%);
            opacity: 1;
        }
    }  
`;
const IntroText = Styled.div`
    font-size: 34px;
    font-weight: 900;
    line-height: 1.5;
    .name{
        color: #5918df;
    }
    
`;

const SecondaryLine = Styled.div`
    color: #988e9f;
    font-weight: 500;
    margin:10px 0;
    font-size: 30px;
`;

function Intro() {
	return (
        <>
		<StyledIntro>
			<Line>
			</Line>
			<IntroPara>
                <div>

                    <Heading>Start</Heading>
                    <IntroText>
                        Hi, my name is <span className="name">Keshav Mahawar</span>
                        <br />i am a fullstack developer
                        <br />i love to bring ideas come true through code
                    </IntroText>
                    <SecondaryLine>Let me show you....</SecondaryLine>
                </div>
                <div className="profileImg">
			        <img  src="./keshav.png" alt="keshav mahawar" />
                </div>
			</IntroPara>
		</StyledIntro>
       
        </>
	);
}

export default Intro;