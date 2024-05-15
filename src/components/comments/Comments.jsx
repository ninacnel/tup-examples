import React, { useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { comments } from "../data/Data";

const Comments = () => {
  const [allComments, setAllComments] = useState(comments);
  const commentRef = useRef(null);

  const handleLastComment = () => {
    if (commentRef.current)
      commentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <Button
        variant="outline-dark"
        className="mb-4"
        onClick={handleLastComment}
      >
        Go to last comment
      </Button>
      <Row>
        {allComments.map((c, index) => (
          <Col key={c.id} sm={12} md={6} lg={12} className="mb-4">
            <Card ref={index === allComments.length - 1 ? commentRef : null}>
              <Card.Body>
                <Card.Title>{c.author}</Card.Title>
                <Card.Text>{c.content}</Card.Text>
                <Card.Footer>
                  <small className="text-muted">{c.date}</small>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Comments;
