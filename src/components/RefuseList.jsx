import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

const RefuseList = () => {
  const url = "http://localhost:8080/rejected";
  const [refuse, setRefuse] = useState([]);
  const getRefuse = () => {
    axios.get(url).then(({ data }) => setRefuse(data));
  };

  useEffect(() => {
    getRefuse();
  }, [refuse]);

  if (refuse.length === 0) {
    return (
      <div className="col col-md-3">
        <h2>Lista de tareas rechazadas</h2>
        <Card>
          <Card.Body>No hay tareas rechazadas🥳🥳</Card.Body>
        </Card>
      </div>
    );
  } else {
    return (
      <div className="col col-md-3">
        <h2>Lista de tareas rechazadas</h2>
        <Card style={{ width: "18rem" }}>
          <ListGroup variant="flush">
            {refuse.map((t) => (
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
    );
  }
};

export default RefuseList;
