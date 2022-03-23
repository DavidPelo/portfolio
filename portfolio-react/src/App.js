import Container from "./components/UI/Container";
import Content from "./components/UI/Content";
import NavBar from "./components/UI/NavBar";
import Welcome from "./components/UI/Welcome";

function App() {
  return (
    <div>
      <Container class="heroContainer">
        <NavBar />
        <Welcome
          greeting="Welcome!"
          message="Ambitious and creative Web Developer with a passion for finding effective customer solutions using JavaScript, HTML, CSS, and jQuery. Lifelong learner with a proven track record of strong analytical, communication, and leadership skills that strives to grow professionally
through continuous study and participation within the industry.
"
        />
        {/* <Labs />
        <Projects /> */}
      </Container>
      <Container class="contentContainer">
        <Content id="projects" title="projects" />
      </Container>
      <Container class="contentContainer">
        <Content id="contact" title="contact" />
      </Container>
    </div>
  );
}

export default App;
