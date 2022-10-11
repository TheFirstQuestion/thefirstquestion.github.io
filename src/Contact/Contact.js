import "./Contact.scss";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function Contact(props) {
  const [hasSubmitted, setSubmitted] = useState(false);

  // via https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server/blob/master/form-submission-handler.js
  function getFormData(form) {
    let elements = form.elements;

    let fields = Object.keys(elements)
      .filter(function (k) {
        if (elements[k].name === "name") {
          let honeypot = elements[k].value;
          return false;
        }
        return true;
      })
      .map(function (k) {
        if (elements[k].name !== undefined) {
          return elements[k].name;
          // special case for Edge's html collection
        } else if (elements[k].length > 0) {
          return elements[k].item(0).name;
        } else {
          return null;
        }
      })
      .filter(function (item, pos, self) {
        return self.indexOf(item) === pos && item;
      });

    let formData = {};
    fields.forEach(function (name) {
      var element = elements[name];

      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        let data = [];
        for (let i = 0; i < element.length; i++) {
          let item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(", ");
      }
    });
  }

  function sendForm(event) {
    console.log("form submitted");
    console.log(event);
    event.preventDefault();
    var form = event.target;
    var formData = getFormData(form);
    console.log(formData);
    setSubmitted(true);
  }

  return (
    <>
      <Card body>
        <blockquote>
          "The costs of contacting someone you want to learn from are about as
          close to zero as they’ll ever be. Honestly, what’s the worst that can
          happen? You come off as someone eager to learn. If they ignore you,
          you know it’s because they’re too busy <em>doing</em> to{" "}
          <em>talk about</em>. If they’re a dick, then you’ve already learned a
          valuable lesson. Regardless of the outcome, you’ll always learn
          something, even if it’s just how to lessen the fear of rejection by
          sending that damn email."
          <footer className="blockquote-footer">
            <em>Thomas Frank</em>
          </footer>
        </blockquote>
      </Card>

      <Row xs={12}>
        <Col xs={5}>
          <h2>Email</h2>
          <p>
            People keep giving me email addresses. I have so many. They all go
            to the same place though, so pick whichever piques your curiosity.
          </p>
          <ul>
            <li>steven.cryptocentrus@erine.email</li>
            <li>steven.g.opferman@gmail.com</li>
            <li>sopferman@stanford.edu</li>
            <li>sgo@cs.stanford.edu</li>
          </ul>
        </Col>

        <Col xs={7} className="text-center">
          <h2>Anonymous Message</h2>

          <form
            className="gform"
            method="POST"
            action="https://script.google.com/macros/s/AKfycbzjVE6wotVN-_FbXA5j5jqDixJNfZnSf55DuefA3iasV-5qa5d99mfeMW3f28FFbtW7/exec"
            onSubmit={sendForm}
          >
            <div className={hasSubmitted ? "d-none" : "form-elements"}>
              <fieldset>
                <label htmlFor="message" className="d-none">
                  Message:{" "}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="If you are a real person, include the word 'bread' in your message. If you are spam or a robot, I am begging you to stop sending me emails."
                ></textarea>
              </fieldset>

              <fieldset className="d-none" aria-hidden>
                <label htmlFor="name">Name: </label>
                <input id="name" type="text" name="name" defaultValue="" />
              </fieldset>

              <Button variant="primary" size="sm" type="submit">
                Send
              </Button>
            </div>

            <div className={hasSubmitted ? "thankyou_message" : "d-none"}>
              <p>Your message has been sent. Thanks!</p>
            </div>
          </form>
        </Col>
      </Row>
    </>
  );
}
