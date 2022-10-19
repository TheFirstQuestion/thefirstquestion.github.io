import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Index.scss";
import photo from "../images/balloons.png";

export default function Index(props) {
  return (
    <Row className="index d-flex align-items-center" xs={12}>
      <Col md={5} xs={7}>
        <img
          src={photo}
          alt="Me in a red and blue striped shirt and white baseball cap, holding red and blue balloons and grinning broadly."
        />
      </Col>
      <Col md={7} xs={5} className="d-grid gap-5">
        <div>
          <h1>Steven G. Opferman</h1>
          <em>(the G stands for "gives great hugs")</em>
        </div>

        <Button
          variant="secondary"
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/document/d/1zUJHodgRzxkTdgYNceWAIuj7CKc5W_8NS2i5JBEot8o/edit?usp=sharing"
        >
          RESUME
        </Button>

        <Button
          variant="outline-dark"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:steven.g.opferman@gmail.com?subject=%5BFrom%20Website%5D&body=This%20is%20me%2C%20hacking%20your%20email!%0D%0A%0D%0A(Not%20really.)"
        >
          steven.g.opferman@gmail.com
        </Button>

        <Button
          variant="primary"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/TheFirstQuestion"
        >
          GITHUB
        </Button>
      </Col>
    </Row>
  );
}
