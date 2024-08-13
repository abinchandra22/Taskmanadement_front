import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { updateProjectAPI } from '../services/allApi';

function Edit({ project }) {
  const [projectData, setProjectData] = useState({
    id: project._id, title: project.title, subject: project.subject, statues: project.statues
  })
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setProjectData({
      id: project._id, title: project.title, subject: project.subject, statues: project.statues
    })
  }

  const handleShow = () => setShow(true);

  const handleUpdateProject = async (e) => {
    e.preventDefault()
    const { id, title, subject, statues } = projectData
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
          const result = await updateProjectAPI(id, projectData, reqHeader)
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




  return (
    <div>
      <button onClick={handleShow} style={{ textDecoration: 'none' }} className='btn btn-link text-success d-flex align-items-center fw-bolder'>
        <i style={{ height: '34px' }} className='fa-solid fa-edit fa-1x '></i>
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
              <select name="status" class="form-control" id="floatingInputstatus" value={projectData.statues} onChange={e => setProjectData({ ...projectData, statues: e.target.value })} >
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
          <Button onClick={handleUpdateProject} variant="primary" >
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer autoClose={3000} theme='colored'></ToastContainer>



    </div>
  )
}

export default Edit