import Container from './components/UI/Container'
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
    </div>
  );
}

export default App;
