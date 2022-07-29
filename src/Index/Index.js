import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Index.scss";
import photo from "../images/balloons.png";

export default function Index(props) {
  return (
    <Row className="index">
      <Col>
        <img
          src={photo}
          alt="Me in a red and blue striped shirt and white baseball cap, holding red and blue balloons."
        />
      </Col>
      <Col xs="auto" className="d-grid gap-5 text-center">
        <div>
          <h1>Steven G. Opferman</h1>
          <em>(the G stands for "gives great hugs")</em>
        </div>

        <Button
          variant="secondary"
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/TheFirstQuestion"
        >
          RESUME
        </Button>

        <Button
          variant="outline-dark"
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:steven.g.opferman@gmail.com?subject=%5BFrom%20Website%5D&body=This%20is%20me%2C%20hacking%20your%20email!%0D%0A%0D%0A(Not%20really.)"
        >
          steven.g.opferman@gmail.com
        </Button>

        <Button
          variant="primary"
          size="lg"
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
