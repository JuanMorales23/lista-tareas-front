import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'

const DoneList = () => {
    const url = "http://localhost:8080/completed";
    const [completed, setCompleted] = useState([]);
    const getCompleted = () =>{
    axios.get(url).then(({data}) => setCompleted(data))
  }

  useEffect(() => {
    getCompleted();
  }, [completed])
  
  if(completed.length === 0){
    return (
      <div className="col col-md-3">
          <h2>Lista de tareas completadas</h2>
          <Card>
          <Card.Body>No hay tareas completadas😐😐</Card.Body>
        </Card>
      </div>
    )
  }else{
    return (
      <div className="col col-md-3">
          <h2>Lista de tareas completadas</h2>
      <Card style={{ width: "18rem" }}>
      <ListGroup variant="flush">
        {completed.map((t) => (
          <div key={t.id}>
             <ListGroup.Item>
              <Card.Title>{t.name}</Card.Title>
              <Card.Text>{t.description}</Card.Text>
            </ListGroup.Item>
          </div>
        ))}
        </ListGroup>
      </Card>
    </div>
    )
  }
}

export default DoneList