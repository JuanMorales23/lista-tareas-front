import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";

const PostponedList = () => {
  const url = "http://localhost:8080/postponed";
  const [postponed, setPostponed] = useState([]);
  const getCompleted = () => {
    axios.get(url).then(({ data }) => setPostponed(data));
  };

  useEffect(() => {
    getCompleted();
  }, [postponed]);

  if (postponed.length === 0) {
    return (
      <div className="col col-md-3">
        <h2>Lista de tareas aplazadas</h2>
        <Card bg="secondary"s>
          <Card.Body>No hay tareas aplazadas😄😄</Card.Body>
        </Card>
      </div>
    )
  } else {
    return (
      <div className="col col-md-3">
        <h2>Lista de tareas aplazadas</h2>
        <Card style={{ width: "18rem" }} bg="secondary">
          <ListGroup variant="flush">
            {postponed.map((t) => (
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

export default PostponedList;
