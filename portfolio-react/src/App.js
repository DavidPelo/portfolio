import Container from './components/UI/Container'
import Content from './components/UI/Content';
import NavBar from './components/UI/NavBar'
import Welcome from './components/UI/Welcome'

function App() {
  return (
    <div>
      <Container class="bodyDivContainer">
        <NavBar />
        <Welcome message="Welcome!" />
        {/* <Labs />
        <Projects /> */}
      </Container>
      <Container class="bodyDivContainer">
        <Content title="projects" />
      </Container>
      <Container class="bodyDivContainer">
        <Content title="contact" />
      </Container>
    </div>
  );
}

export default App;
