import React from "react";
import { Line, RightContainer, Heading } from "./StyledComponents";
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
            font-size: 30px;
            div a{
                color: white;
                display: flex;
                text-decoration: none;
                align-items: center;
            }
            
            @media only screen and (max-width: 1000px) {
                grid-template-columns: 1fr 1fr;
                font-size: 35px;
            }

            @media only screen and (max-width: 650px) {
                grid-template-columns: 1fr;
                font-size: 30px;
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
        <StyledContact id="contact">
            <Line />
            <StyledFindMe>
                <Heading>Contact</Heading>
                <div className="container">
                    <div className="heading">Find me on :</div>
                    <div className="contactGrid">
                        <div>
                            <a
                                href="https://www.linkedin.com/in/keshav-m-191a8b131/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon src="./images/icons/linkedin.svg" />
                                Linked in
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://github.com/keshavmahawar"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon src="./images/icons/github.svg" />
                                Github
                            </a>
                        </div>
                        <div>
                            <a
                                href="mailto:kes.mahawar@gmail.com"
                                rel="noopener noreferrer"
                            >
                                <Icon src="./images/icons/gmail.svg" />
                                kes.mahawar@gmail.com
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://twitter.com/kesmahawar"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon src="./images/icons/twitter.svg" />
                                Twitter
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://medium.com/@kesmahawar"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon src="./images/icons/medium.svg" />
                                Medium
                            </a>
                        </div>
                    </div>
                </div>
            </StyledFindMe>
        </StyledContact>
    );
}

export default Contact;
