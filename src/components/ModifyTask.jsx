import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const ModifyTask = ({showModal, handleCloseModal, body}) => {
    const url = "http://localhost:8080";
    const [form, setForm] = useState({name: "", description: "", state: ""});

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
      if(!form.name || !form.description){
        alert("Datos incompletos");
        e.preventDefault();
      }else{
        e.preventDefault();
        axios.put(`${url}/${body.id}`, form)
        handleCloseModal();
      }
    }

    useEffect(() => {
      setForm({name: body.name, description: body.description, state: body.state})
    }, [body])
    
      
  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre de la tarea:</Form.Label>
            <Form.Control
              type="text"
              placeholder={"Tarea"}
              name="name"
              value={form.name}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Descripción de la tarea:</Form.Label>
            <Form.Control
              type="text"
              placeholder="descripcion"
              name="description"
              value={form.description}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Aceptar
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Cancelar
          </Button>
        </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ModifyTask