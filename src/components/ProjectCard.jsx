import React from "react";
import Styled from "styled-components";

const StyledProjectCard = Styled.div`
    width: 400px;
    position: absolute;
    transition: transform 0.2s;
    margin-left:50px;
    .overlay{
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height: 100%;
        background: linear-gradient(45deg,#191426,transparent);
        transition: opacity 0.5s;
    }
    .overlay:hover{
        opacity: 0;
    }
    
    .textWrapper{
        position:absolute;
        bottom: 0;
        /* border: 1px solid white; */
        left: -50px;
        width: 150px;
        font-size: 32px;
        font-weight:700;
        /* padding-bottom:10px; */
        color: white;
        img{
            width:30px;
            margin-right:5px;
            margin-top:15px;
        }
    }
    .textWrapper::after{
        bottom:45px;
        left:0;
        content:"";
        position: absolute;
        width:100%;
        height: 4px;
        box-shadow: 0 0 15px 0px black;
        background: white;
    }
    .bgImage {
        width:100%;
        display: block;
    }
    &: hover{
        z-index:5;
        transform: scale(1.075);
        box-shadow: 0px 0px 100px 15px black;
        .textWrapper{
            text-shadow: 0 0 8px black;
        }
    }
    @media only screen and (max-width: 1300px) {
        width: 350px;

    }
    @media only screen and (max-width: 1200px) {
        width: 300px;

    }
    @media only screen and (max-width: 1100px) {
        width: 270px;

    }
    @media only screen and (max-width: 1000px) {
        width: 70%;
        position: static;
        margin:  30px 10px 30px 50px;
    }
`;
function ProjectCard(props) {
	const { name, image } = props.data;

	return (
		<StyledProjectCard style={props.location}>
			<div style={{position:"relative"}}>
				<div className="overlay"></div>
				<div className="textWrapper">
					{name}
					<br />
					<img src="./images/icons/github.svg" alt="github icon" />
					<img src="./images/icons/chain.svg" alt="github icon" />
				</div>
				<img className="bgImage" src={image} alt={name} />
			</div>
		</StyledProjectCard>
	);
}

export default ProjectCard;
