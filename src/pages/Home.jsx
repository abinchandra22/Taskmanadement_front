import React from 'react'
import Header from '../components/Header'
import landing from '../assets/landing.jpg'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <div style={{ height: '100vh', backgroundColor: '#1be032', color: 'white' }} className='w-100 d-flex justify-content-center align-items-center'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-6'>
                <h1 style={{ fontSize: '80px' }} className='fw-bolder text-align mb-3'>
                  <i style={{ height: '85px' }} className='fa-solid fa-hands-holding-circle'></i>
                  Task Management
                </h1>
                <p style={{ textAlign: 'justify', color: 'black' }}>One Stop destination for managing your task .where Users can add and manage their daily task and do your works at proper time.</p>
                {/* {loginStatus ? */}
                {/* <Link className='btn btn-warning mt-3' to={'/dashboard'}>Manage Your Projects <i className='fa-solid fa-arrow-right'></i></Link> */}
                <Link className='btn btn-warning mt-3' to={'/login'}>Start to Explore <i className='fa-solid fa-arrow-right'></i></Link>
                {/* } */}
              </div>
              <div className='col-lg-1'></div>
              <div className='col-lg-4'>
                <img className='img-fluid' src={landing} alt="landing" />
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home