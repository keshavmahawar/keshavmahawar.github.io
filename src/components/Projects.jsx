import React from "react";
import Styled from "styled-components";
import { Line, RightContainer, Heading } from "./StyledComponents";
import projectData from "./projectsData.json";
import ProjectCard from "./ProjectCard";

const StyledProjects = Styled.div`
    background:linear-gradient(#191426,#0f0d16);
    position: relative;
    height: 2000px;
    border: 1px solid #00000000;
`;

function Projects() {
	let locations = [
		{ top: "100px", left: "2%" },
		{ top: "220px", left: "34%" },
		{ top: "180px", right: "2%" },
		{ top: "550px", left: "2%" },
		{ top: "500px", left: "34%" },
		{ top: "580px", right: "2%" },
		{ top: "830px", left: "10%" },
		{ top: "860px", right: "15%" },
	];
	return (
		<StyledProjects>
			<Line></Line>
			<RightContainer>
				<Heading>Projects</Heading>
			</RightContainer>
			<RightContainer>
				{projectData?.map((project, index) => (
					<ProjectCard data={project} location={locations[index]} />
				))}
			</RightContainer>
			{/* <ProjectCard style={}>
				<div className="overlay"></div>

				<div className="textWrapper">Trivia game</div>
				<img src="p1.png" />
			</ProjectCard>
			<ProjectCard style={}>
				<div className="overlay"></div>
				<div className="textWrapper">2 Players chess</div>
				<img src="p2.png" />
			</ProjectCard>
			<ProjectCard style={}>
				<div className="overlay"></div>
				<div className="textWrapper">Medium clone</div>
				<img src="p3.png" />
			</ProjectCard>
			<ProjectCard style={}>
				<div className="overlay"></div>
				<div className="textWrapper">Medium clone</div>
				<img src="p3.png" />
			</ProjectCard>
			<ProjectCard style={}>
				<div className="overlay"></div>
				<div className="textWrapper">Medium clone</div>
				<img src="p3.png" />
			</ProjectCard>
			<ProjectCard style={}>
				<div className="overlay"></div>
				<div className="textWrapper">Medium clone</div>
				<img src="p3.png" />
			</ProjectCard> */}
		</StyledProjects>
	);
}

export default Projects;
