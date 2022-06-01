import { Card, Button } from "react-bootstrap";

export default function Boxes(props) {

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Button variant="primary">Play</Button>
        </Card.Body>
      </Card>
    );
  }