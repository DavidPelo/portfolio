import React from 'react'
import Container from './Container'

function NavBar({ scrollHandler, underConstruction }) {
  const autoScrollHandler = e => {
    e.preventDefault()
    scrollHandler(e)
  }
  return (
    <Container class='nameContainer'>
      <div className='name'>
        <h1>David Pelo</h1>
      </div>
      <Container class='navLinkContainer'>
        {!underConstruction && (
          <>
            <div className='navLink'>
              <a onClick={autoScrollHandler} id='#projects' href='projects'>
                projects
              </a>
            </div>
            <div className='navLink'>
              <a onClick={autoScrollHandler} id='#contact' href='contact'>
                contact
              </a>
            </div>
          </>
        )}
        <div className='navLink'>
          <a
            href='https://github.com/davidpelo'
            target='_blank'
            rel='noreferrer'
          >
            github
          </a>
        </div>
        <div className='navLink'>
          <a
            href='https://www.linkedin.com/in/davidpelo'
            target='_blank'
            rel='noreferrer'
          >
            linkedIn
          </a>
        </div>
      </Container>
    </Container>
  )
}

export default NavBar
