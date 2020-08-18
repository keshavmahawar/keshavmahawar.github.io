import React from "react";
import { Line, RightContainer, Heading } from "./StyledComponents";
import Styled from "styled-components";
const AboutMeText = Styled(RightContainer)`
    color: white;
    line-height: 1.5;
    font-size: 20px;
    letter-spacing: 0.7px;
    .blue{
        color:#5918df;
    }
    .yellow{
        color:#eeff31;
    }
    .white{
        color: white;
    }
    .dot{
        color: #3b3553;
    }
    .comment{
        color: #78707e
    }
`;
const StyledAboutMe = Styled.div`
    position: relative;
    border: 1px solid transparent;
    background-color: #14121c;
`;
function AboutMe() {
	return (
		<StyledAboutMe>
			<Line></Line>
			<AboutMeText>
				<Heading>About</Heading>
				<div>
					<span className="blue">class </span>
					<span className="yellow">KeshavMahawar </span>
					<span className="white"> {"{"}</span>
				</div>
				<div>
					<span className="dot">....</span>
					<span className="comment">// I'm ambitious and love new challenges :)</span>
				</div>
				<div>
                    <span className="dot">....</span>
                    <span className="comment">// My variety of skills is continuously expanding.</span>
                </div>
				<div>
                    <span className="dot">....</span>
                        constructor
                        {"() {"}
                </div>
				<div><span className="dot">........</span>
                    this.name 
                    = 
                    'Keshav Mahawar'
                </div>
				<div>
                    <span className="dot">........</span>
                    this.dayOfBirthTimestamp = 602745592</div>
				<div>
                    <span className="dot">........</span>
                    this.email = 'kes.mahawar@gmail.com'</div>
				<div>
                    <span className="dot">........</span>
                    this.phoneNo = +91-7891442004</div>
				<div>
                    <span className="dot">....</span>
                    {"}"}</div>
				<div>
                    <span className="dot">....</span>
                    education() {"{"}</div>
				<div>
                    <span className="dot">........</span>
                    return [</div>
				<div>
                    <span className="dot">........</span>
                    ]</div>
				<div>
                    <span className="dot">....</span>
                    {"}"}</div>
				<div>
                    <span className="dot">....</span>
                    skills() {"{"}</div>
				<div>
					<span className="dot">........</span>
                    return [ 'HTML/CSS/JS', 'React', 'Node.js', 'Bootstrap', 'Webpack',
					'SASS', 'npm', 'GIT' ]
				</div>
				<div>
                    <span className="dot">....</span>
                    {"}"}</div>
				<div>{"}"}</div>
			</AboutMeText>
		</StyledAboutMe>
	);
}

export default AboutMe;
