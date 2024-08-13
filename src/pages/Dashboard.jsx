import React from 'react'
import Add from '../components/Add'
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react'
import { deleteProjectAPI, getUserProjectAPI } from '../services/allApi';
import './Dashboard.css'
import Edit from '../components/Edit';
import Dropdown from 'react-bootstrap/Dropdown';

function Dashboard() {


  // user project

  const [allProject, setAllProject] = useState([])

  const getAllProject = async () => {
    try {
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          // "Content-Type":"application/json",
          "Authorization": `Bearer ${token}`
        }
        const result = await getUserProjectAPI(reqHeader)
        if (result.status === 200) {
          setAllProject(result.data)
        }

      }

    } catch (err) {
      console.log(err);
    }
  }

  console.log(allProject);
  useEffect(() => {
    getAllProject()
  }, [])

  // delete
  const handleDeleteProject = async (prijectId) => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await deleteProjectAPI(prijectId, reqHeader)
        if (result.status == 200) {
          getAllProject()
        } else {
          console.log(result);
        }
      } catch (err) {
        console.log(err);
      }

    }
  }



  return (
    <div className='dash w-100'>
      <div className='mb-5 w-100'>
        <Add ></Add>
      </div>
      <div className='search'>

      </div>
      <div className='ser  mb-5 text-center'>

        {allProject.length > 0 ? allProject?.map((project, index) => (

          <div className='asd'>
            <Card className='cardss' style={{ width: '18rem', marginBottom: '25px', alignItems: 'center' }}>
              {/* <Card.Img variant="top" src={desk} style={{ height: '100px', width: '100px' }} /> */}
              <Card.Body key={index}>
                <Card.Title className='text-danger text-bold mt-3'><h4>{project?.title}</h4></Card.Title>
                <Card.Text className='mt-4'>
                  {project?.subject}
                </Card.Text>
                <p>{project?.date.slice(0, 10)}</p>
                <p>{project?.statues}</p>

              </Card.Body>
              <div className='d-flex'>
                <Edit project={project}></Edit>

                <button onClick={() => handleDeleteProject(project._id)} className='btn btn-link text-danger ms-2'><i className='fa-solid fa-trash text-danger '></i> </button>

              </div>
            </Card>

          </div>

        )) :
          <div className='fw-bolder text-danger fs-4 mt-5 p-5 '>Noughting to display</div>

        }
      </div>
    </div>
  )
}

export default Dashboard