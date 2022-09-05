import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from 'axios';

const FormList = () => {
  const url = "http://localhost:8080/"
  const [form, setForm] = useState({name:"", description: "", state: ""});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    if(!form.name || !form.description){
      alert("Datos incompletos");
      e.preventDefault();
    }else{
      e.preventDefault();
      axios.post(url, form)
      handleReset();
    }
  }

  const handleReset = () => {
    setForm({name:"", description: "", state: ""});
  }

  return (
    <div className="container form">
      <div className="row justify-content-center">
        <div className="col col-md-7">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre de la tarea:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tarea"
              name="name"
              value={form.name}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción de la tarea:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Descripción"
              name="description"
              value={form.description}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form>
        </div>
      </div>
    </div>
  );
};

export default FormList;
