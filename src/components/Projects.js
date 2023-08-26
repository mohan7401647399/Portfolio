import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ecommerce.png";
import projImg2 from "../assets/img/youtube.png";
import projImg3 from "../assets/img/spotify.png";
import projImg4 from "../assets/img/instagram.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {title: "E-Commerce", description: "",imgUrl: projImg1},
    {title: "Youtube", description: "", imgUrl: projImg2 },
    { title: "Spotify", description: "", imgUrl: projImg3 },
    { title: "Instagram", description: "", imgUrl: projImg4 }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item> <Nav.Link eventKey="first">Projects</Nav.Link> </Nav.Item>
                    <Nav.Item> <Nav.Link eventKey="second">GITHUB</Nav.Link> </Nav.Item>
                    <Nav.Item> <Nav.Link eventKey="third">Clones</Nav.Link> </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row> { projects.map((project,index) => { return ( <ProjectCard key={index} {...project}/>) })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p> <a href="https://github.com/mohan7401647399">Click here</a> </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p><a href="https://ecommerce-47401.web.app/">E-commerce Clone</a></p>
                      <p><a href="https://clone-90a52.web.app/">Youtube Clone</a></p>
                      <p><a href="https://spotify-clone-7276b.web.app/">Spotify Clone</a></p>
                      <p><a href="https://instagram-clone-fc9fd.web.app/">Instagram Clone</a></p>
                      <p><a href="">next project will soon....</a></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
