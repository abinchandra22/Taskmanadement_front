import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  return (
    <div style={{ backgroundColor: '#1be032', width: '100%', position: 'fixed', top: '0px', zIndex: '5' }}>
      <Navbar >
        <Container>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Navbar.Brand  >
              <h1 className='fw-bolder text-light mt-2'>
                <i style={{ height: '40px' }} className='fa-solid fa-hands-holding-circle'></i>
                Task Management
              </h1>
            </Navbar.Brand>
          </Link>

        </Container>
      </Navbar>
    </div>
  )
}

export default Header