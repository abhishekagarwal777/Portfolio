import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhishek Agarwal </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            I am currently a final year undergrad at VIT.
            <br />
            {/* I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra. */}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Books are the basis; purity is the force; preaching is the essence; utility is the principle."{" "}
          </p>
          <footer className="blockquote-footer">A. C. Bhaktivedanta Swami Srila Prabhupada</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
