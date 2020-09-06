import React from "react";
import { Line, RightContainer, Heading} from "./StyledComponents";
import Styled from "styled-components";

const StyledContact = Styled.div`
    position: relative;
    border: 1px solid transparent;
    background-color: #0e0d10;
`;

const StyledFindMe = Styled(RightContainer)`
    height: 500px;
    .container{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        .heading{
            color: white;
            font-size: 45px;
        }
        .contactGrid{
            width: 800px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            color: #5918df;
            font-size: 30px;
            div{
                display: flex;
                align-items: center;
            }
        }
    }
`;

const Icon = Styled.img`
    height: 40px;
    margin: 10px;
`;

function Contact() {
	return (
		<StyledContact>
			<Line />
			<StyledFindMe>
				<Heading>Contact</Heading>
				<div className="container">
					<div className="heading">Find me on :</div>
					<div className="contactGrid">
						<div>
							<Icon src="./images/icons/linkedin.svg" />
							Linked in
						</div>
						<div>
							<Icon src="./images/icons/github.svg" />
							Github
						</div>
						<div>
							<Icon src="./images/icons/twitter.svg" />
							Twitter
						</div>
						<div>
							<Icon src="./images/icons/medium.svg" />
							Medium
						</div>
						<div>
							<Icon src="./images/icons/gmail.svg" />
							kes.mahawar@gmail.com
						</div>
					</div>
				</div>
			</StyledFindMe>
		</StyledContact>
	);
}

export default Contact;
