import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup} from "react-bootstrap";
import ModifyTask from "./ModifyTask";

const TaskList = ({ task }) => {
  const url = "http://localhost:8080";
  let newBody = { 
    name: "",
    description: "",
    state: ""
  };
  const [datesFiltered, setDatesFiltered] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [body, setBody] = useState({});
  const handleCloseModal = () => setShowModal(false);


    const handleEdit = (body) => {
        setBody(body);
        setShowModal(true);
    }

    const handleDone = (body) => {
      newBody.name = body.name;
      newBody.description = body.description;
      newBody.state = "completed"
      axios.put(`${url}/${body.id}`, newBody)
    }

    const handlePostponed = (body) => {
      newBody.name = body.name;
      newBody.description = body.description;
      newBody.state = "postponed"
      axios.put(`${url}/${body.id}`, newBody)
    }

    const handleRefuse = (body) => {
      newBody.name = body.name;
      newBody.description = body.description;
      newBody.state = "rejected"
      axios.put(`${url}/${body.id}`, newBody)
    }

    const getTasks = () => {
      let filtered = [];
      filtered = task.filter(date => date.state === "");
      setDatesFiltered(filtered)
    }

    useEffect(() => {
      getTasks()
    }, [task])
    
    if(datesFiltered.length === 0){
      return (
        <div className="col col-md-3">
          <h2>Lista de tareas</h2>
          <Card>
          <Card.Body>No hay tareas aún😅😅</Card.Body>
          </Card>
        </div>
      )
    }else{
      return (
        <div className="col col-md-3 mt-4">
          <h2>Lista de tareas</h2>
          <Card style={{ width: "18rem" }}>
          <ListGroup variant="flush">
            {
              datesFiltered.map((t) => (
              <div key={t.id}>
                 <ListGroup.Item>
                  <Card.Title>{t.name}</Card.Title>
                  <Card.Text>{t.description}</Card.Text>
                  <div className="container">
                    <div className="row">
                      <div className="col col-md-5">
                        <Button variant="primary" onClick={() => handleEdit(t)}>Modificar</Button>{" "}
                        <Button variant="success" onClick={() => handleDone(t)}>Completada</Button>{" "}
                      </div>
                      <div className="col col-md-7">
                        <Button variant="secondary" onClick={() => handlePostponed(t)}>Aplazada</Button>{" "}
                        <Button variant="danger" onClick={() => handleRefuse(t)}>Rechazada</Button>{" "}
                        </div>
                    </div>
                  </div>
                </ListGroup.Item>
              </div>
            ))}
            </ListGroup>
          </Card>
          <ModifyTask showModal={showModal} handleCloseModal={handleCloseModal} body={body} />
        </div>
      );
    }
};

export default TaskList;
