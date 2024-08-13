import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Form from 'react-bootstrap/Form';
import { addProjectAPI } from '../services/allApi';
import { tokenAuthContext } from '../context/Tokenshare';

function Add() {

  // logout
  const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext)

  const navigate = useNavigate()
  const handlelogout = () => {
    sessionStorage.clear()
    setIsAuthorised(false)
    navigate('/')
  }
  const [username, setUsername] = useState("")
  useEffect(() => {
    if (sessionStorage.getItem("username")) {
      setUsername(sessionStorage.getItem("username"))
    } else {
      setUsername("")
    }
  }, [])
  //   ..........
  // state
  const [projectData, setProjectData] = useState({
    title: "", subject: "", statues: ""
  })
  console.log(projectData);


  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setProjectData({ title: "", subject: "", statues: "" })
  }


  const handleProjectUplode = async (e) => {
    e.preventDefault()
    const { title, subject, statues } = projectData
    if (!title || !subject || !statues) {
      toast.warning("complete the form")
    }
    else {
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Authorization": `Bearer ${token}`

        }
        console.log("proced to api call");
        try {
          const result = await addProjectAPI(projectData, reqHeader)
          console.log(result);
          console.log("kitty");
          if (result.status === 200) {
            toast.success(`New task ${result.data.title} has added successfully`)
            handleClose()

          }
          else {
            toast.warning(result.response.data)
          }


        } catch (err) {
          console.log(err);

        }
      }
    }
  }

  const handleShow = () => setShow(true);

  return (
    <div className='w-100'>
      <div style={{ backgroundColor: '#06D001', width: '100%', display: 'flex' }}>
        <Navbar >
          <Container>
            <Navbar.Brand  >
              <h3 className='fw-bolder text-light mt-2'>
                Welcome <span className='text-warning'> {username}</span>
              </h3>
            </Navbar.Brand>
          </Container>
        </Navbar>

        {/* add task */}

        <button onClick={handleShow} style={{ textDecoration: 'none' }} className='btn btn-link text-danger d-flex align-items-center fw-bolder'>
          <i style={{ height: '50px' }} className='fa-solig fa-plus fa-2x me-2'></i>Add Task
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Task Hear</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className=''>
              <div className='mb-3'>
                <input className='border rount p-2 w-100' type="text" placeholder='Task Name'
                  value={projectData.title} onChange={e => setProjectData({ ...projectData, title: e.target.value })} />
              </div>

              <div className='mb-3'>
                <textarea className='border rount p-2 w-100' type="text" rows={5} placeholder='Description'
                  value={projectData.subject} onChange={e => setProjectData({ ...projectData, subject: e.target.value })} />
              </div>

              <div class="form-floating mb-3">
                <select name="status" class="form-control" id="floatingInputstatus" value={projectData.statues} onChange={e => setProjectData({ ...projectData, statues: e.target.value })}   >
                  <option disabled selected hidden value=""></option>
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">complete</option>
                </select>
                <label for="floatingInputstatus">Status</label>
              </div>

            </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleProjectUplode}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>

        <ToastContainer autoClose={3000} theme='colored'></ToastContainer>
        <div style={{ display: "flex", marginLeft: "30px", justifyContent: "flex-end", width: "100%", padding: '10px', marginRight: "20px" }}>
          <button onClick={handlelogout} style={{ padding: "20px", backgroundColor: "#ECFFE6" }}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Add