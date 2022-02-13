import Container from './components/UI/Container'
import NavBar from './components/UI/NavBar'
import Labs from './components/UI/Labs'
import Projects from './components/UI/Projects'
import Welcome from './components/UI/Welcome'

function App() {
  return (
    <div>
      <Container class="bodyDivContainer">
        <NavBar />
        <Welcome message="Welcome to my student site." />
        <Labs />
        <Projects />
      </Container>
    </div>
  );
}

export default App;
