import React from 'react'
import Container from './Container'
import NavBar from './NavBar'
import Welcome from './Welcome'

const ComingSoon = () => {
  return (
    <Container class='heroContainer'>
      <NavBar underConstruction={true}/>
      <Welcome
        greeting='Hi there!'
        message='My portfolio is currently under construction, but should be ready soon!'
        secondaryMessage="If you'd like to reach me, feel free to reach out!"
      />
    </Container>
  )
}

export default ComingSoon
