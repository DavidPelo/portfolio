import React, { useRef } from 'react'
import ComingSoon from './components/UI/ComingSoon'
import Container from './components/UI/Container'
import Content from './components/UI/Content'
import NavBar from './components/UI/NavBar'
import Welcome from './components/UI/Welcome'

function App() {
  const projectsRef = useRef()
  const contactRef = useRef()

  function scrollToComponent(e) {
    if (e.target.id === '#projects') {
      projectsRef.current.scrollIntoView({
        behavior: 'smooth',
      })
      projectsRef.current.focus()
    } else {
      contactRef.current.scrollIntoView({
        behavior: 'smooth',
      })
      contactRef.current.focus()
    }
  }

  const underConstruction = true

  return (
    <>
      {underConstruction ? (
        <ComingSoon />
      ) : (
        <>
          <Container class='heroContainer'>
            <NavBar scrollHandler={scrollToComponent} />
            <Welcome
              greeting='Welcome!'
              message='Ambitious and creative Web Developer with a passion for finding effective customer solutions using JavaScript, HTML, CSS, and jQuery. Lifelong learner with a proven track record of strong analytical, communication, and leadership skills that strives to grow professionally
  through continuous study and participation within the industry.
  '
            />
          </Container>
          <div ref={projectsRef} id='projects'>
            <Container class='contentContainer'>
              <Content title='projects' />
            </Container>
          </div>
          <div ref={contactRef} id='contact'>
            <Container class='contentContainer'>
              <Content title='contact' />
            </Container>
          </div>
        </>
      )}
    </>
  )
}

export default App
