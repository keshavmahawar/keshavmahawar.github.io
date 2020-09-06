import React from "react";
import { Line, RightContainer, Heading, I } from "./StyledComponents";
import Styled from "styled-components";
const AboutMeText = Styled(RightContainer)`
    color: white;
    line-height: 1.5;
    font-size: 20px;
    letter-spacing: 1.5px;
    .blue{
        color:#5918df;
    }
    .yellow{
        color:#eeff31;
    }
    .dot{
        color: #3b3553;
    }
    .comment{
        color: #78707e
    }
    div{display: flex; align-items: center;}
`;
const StyledAboutMe = Styled.div`
    position: relative;
    border: 1px solid transparent;
    background-color: #14121c;
`;
const Blue = Styled.span`
     color:#5918df;
`;
const Red = Styled.span`
    color: #e3244c;
`;
const LightGreen = Styled.span`
    color: #24e394;
`;
const Green = Styled.span`
    color: #24e33a;
`;
const Orange = Styled.span`
    color: #e39d24;
`;
const Yellow = Styled.span`
    color: #eeff31;
`;

function AboutMe() {
	return (
		<StyledAboutMe>
			<Line></Line>
			<AboutMeText>
				<Heading>About</Heading>
				<div>
					<span className="blue">class </span>
					<span className="yellow"> KeshavMahawar </span>
					{"{"}
				</div>
				<div>
					<span className="dot">....</span>
					<span className="comment">
						// I'm ambitious and love new challenges :)
					</span>
				</div>
				<div>
					<span className="dot">....</span>
					<span className="comment">
						// My variety of skills is continuously expanding.
					</span>
				</div>
				<div>
					<span className="dot">....</span>
					constructor
					{"() {"}
				</div>
				<div>
					<span className="dot">........</span>
					<Red>this</Red>.<LightGreen>name</LightGreen>
					<Red>=</Red>
					<Green>'Keshav Mahawar'</Green>
				</div>
				<div>
					<span className="dot">........</span>
					<Red>this</Red>.<LightGreen>dateOfBirthTimestamp</LightGreen>
					<Red>=</Red>
					<Orange>926879400000</Orange>
				</div>
				<div>
					<span className="dot">........</span>
					<Red>this</Red>.<LightGreen>email</LightGreen>
					<Red>=</Red>
					<Green>'kes.mahawar@gamil.com'</Green>
				</div>
				<div>
					<span className="dot">........</span>
					<Red>this</Red>.<LightGreen>phoneNo</LightGreen>
					<Red>=</Red>
					<Orange>+91-7891442004</Orange>
				</div>
				<div>
					<span className="dot">....</span>
					{"}"}
				</div>
				<div>
					<span className="dot">....</span>
					<Yellow>education</Yellow>()
					{"{"}
				</div>
				<div>
					<span className="dot">........</span>
					<Blue>return</Blue>[
				</div>
				<div>
					<span className="dot">........</span>]
				</div>
				<div>
					<span className="dot">....</span>
					{"}"}
				</div>
				<div>
					<span className="dot">....</span>
					<Yellow>skills</Yellow>()
					{"{"}
				</div>
				<div>
					<span className="dot">........</span>
					<Blue>return</Blue>[
					<Green>
						'<I name="html" />HTML' ,
                        '<I name="css" />CSS',
                        '<I name="javascript" />JS',
                        '<I name="react" />	React',
                        '<I name="node"/>Node.js',
                        '<I name="bootstrap" />Bootstrap
					</Green>
					]
				</div>
				<div>
					<span className="dot">....</span>
					{"}"}
				</div>
				<div>{"}"}</div>
			</AboutMeText>
		</StyledAboutMe>
	);
}

export default AboutMe;
