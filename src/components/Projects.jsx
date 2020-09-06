import React from "react";
import Styled from "styled-components";
import { Line, RightContainer, Heading } from "./StyledComponents";
import projectData from "./projectsData.json";
import ProjectCard from "./ProjectCard";

const StyledProjects = Styled.div`
    background:linear-gradient(#191426,#0f0d16);
    position: relative;
    min-height: 1200px;
    border: 1px solid #00000000;
`;

function Projects() {
	let locations = [
		{ top: "100px", left: "2%" },
		{ top: "220px", left: "34%" },
		{ top: "180px", right: "4%" },
		{ top: "550px", left: "2%" },
		{ top: "500px", left: "34%" },
		{ top: "580px", right: "4%" },
		{ top: "850px", left: "10%" },
		{ top: "880px", right: "15%" },
	];
	return (
		<StyledProjects>
			<Line></Line>
			<RightContainer>
				<Heading>Projects</Heading>
			</RightContainer>
			<RightContainer>
				{projectData?.map((project, index) => (
					<ProjectCard data={project} location={locations[index]} key={project.name} />
				))}
			</RightContainer>
		</StyledProjects>
	);
}

export default Projects;
