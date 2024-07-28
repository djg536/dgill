import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Card, Button, CardDeck } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCode,
    faExternalLinkAlt,
    faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import Particles from "react-particles-js";
import "../App.css";
import { scrollToViewElement } from "../utils/navigationUtils";

const ref = React.createRef();

class Projects extends Component {
    render() {
        return (
            <>
                <div>
                    <Jumbotron
                        fluid
                        style={{
                            backgroundImage:
                                "url(" + require("../assets/home/1.jpg") + ")"
                        }}
                    >
                        <Container
                            style={{
                                width: "fit-content",
                                textAlign: "center"
                            }}
                        >
                            <h4>Hi, I'm a Software Developer.</h4>
                            <h1>You can call me David.</h1>
                            <p></p>
                            <FontAwesomeIcon size="4x" icon={faCode} />
                            <h4 className="upper-margin">
                                Please enjoy exploring my website, unless you
                                have a very important meeting to attend to.
                            </h4>
                        </Container>
                    </Jumbotron>

                    <Particles
                        params={require("../assets/home/particlesjs-config.json")}
                    />
                </div>

                <div>
                    <Jumbotron
                        fluid
                        style={{
                            backgroundImage:
                                "url(" +
                                require("../assets/projects/1.jpg") +
                                ")"
                        }}
                    >
                        <Container style={{ width: "fit-content" }}>
                            <h1>Projects</h1>
                            <p>
                                Here you'll find some of the things that I have
                                been working on.
                            </p>
                            <FontAwesomeIcon
                                onClick={() => scrollToViewElement(ref.current)}
                                size="2x"
                                style={{
                                    textAlign: "center",
                                    margin: "auto",
                                    display: "block",
                                    cursor: "pointer"
                                }}
                                icon={faChevronDown}
                            />
                        </Container>
                    </Jumbotron>

                    <Jumbotron
                        ref={ref}
                        fluid
                        style={{
                            backgroundImage:
                                "url(" +
                                require("../assets/projects/yeezy/1.jpg") +
                                ")"
                        }}
                    >
                        <Container>
                            <h1>Software Engineering Project</h1>
                            <p>
                                An undergraduate group project I was a part of
                                to design and build a series of zombie games.
                            </p>
                            <a
                                href="https://sites.google.com/york.ac.uk/yeezygames/home"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="success btn-lg">
                                    See more{" "}
                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                </Button>
                            </a>
                        </Container>
                    </Jumbotron>

                    <CardDeck>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={require("../assets/projects/asciistudio/2.jpg")}
                            />
                            <Card.Body>
                                <Card.Title>ASCII Art Studio</Card.Title>
                                <Card.Text>
                                    Convert images to beautiful ASCII art with
                                    this nifty tool.
                                </Card.Text>
                                <Link to="/projects/asciistudio">
                                    <Button variant="info">Let's go!</Button>
                                </Link>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img
                                variant="top"
                                src={require("../assets/projects/imageencryptor/1.jpg")}
                            />
                            <Card.Body>
                                <Card.Title>Image Encryptor</Card.Title>
                                <Card.Text>
                                    Hide secret messages in regular image files
                                </Card.Text>
                                <Link to="/projects/imageencryptor">
                                    <Button variant="info">
                                        Take me there
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img
                                variant="top"
                                src={require("../assets/projects/animationstudio/1.jpg")}
                            />
                            <Card.Body>
                                <Card.Title>Animation Studio</Card.Title>
                                <Card.Text>
                                    Craft simple monochrome animations
                                </Card.Text>
                                <Link to="/projects/animationstudio">
                                    <Button variant="info">Explore</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </CardDeck>

                    <CardDeck>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={require("../assets/projects/railcrafter/1.jpg")}
                            />
                            <Card.Body>
                                <Card.Title>
                                    Railcrafter Train Simulator
                                </Card.Title>
                                <Card.Text>
                                    A basic 3D train simulator built in C++ on
                                    the Irrlicht Engine, with 3D models produced
                                    in Blender
                                </Card.Text>
                                <Link to="/projects/railcrafter">
                                    <Button variant="info">It's on!</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={require("../assets/projects/calculator/1.jpg")}
                            />
                            <Card.Body>
                                <Card.Title>Scientific Calculator</Card.Title>
                                <Card.Text>
                                    Windows (C#) and Android (Java) calculator
                                    apps, with support for somewhat complex
                                    calculations
                                </Card.Text>
                                <Link to="/projects/calculator">
                                    <Button variant="info">
                                        Let's do maths
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img
                                variant="top"
                                src={require("../assets/projects/texteditor/1.jpg")}
                            />
                            <Card.Body>
                                <Card.Title>Rich Text Editor</Card.Title>
                                <Card.Text>
                                    Simple .rtf and .txt file editor written in
                                    C# .NET with a variety of formatting options
                                </Card.Text>
                                <Link to="/projects/texteditor">
                                    <Button variant="info">Get informed</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </CardDeck>

                    <Jumbotron
                        fluid
                        style={{
                            backgroundImage:
                                "url(" +
                                require("../assets/minecraft/1.jpg") +
                                ")"
                        }}
                    >
                        <Container>
                            <h1>Minecraft Megaprojects</h1>
                            <p>
                                My biggest builds in everyone's favourite voxel.
                            </p>
                            <Link to="/minecraft">
                                <Button variant="danger btn-lg">
                                    Block by block
                                </Button>
                            </Link>
                        </Container>
                    </Jumbotron>
                </div>
            </>
        );
    }
}

export default Projects;