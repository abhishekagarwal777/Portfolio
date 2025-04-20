import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import prachand from "../../Assets/Projects/prachand.png";
import iskcon from "../../Assets/Projects/iskcon.png";
import qalki from "../../Assets/Projects/qalki.png";
import dmilp from "../../Assets/Projects/dmilp.png";
import PostDischarge from "../../Assets/Projects/pd.png";
import gym from "../../Assets/Projects/gym.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="VIRTUAL GYM"
              description="This is an AI-ML based project which is mainly designed to track the calories, may it be during the intake of the specific food item or uponn the tracking of the pose while carrying out the wokout, the model has been trained in such a way that it can track down the calories as per the user's intake of food where he/she can choose from the specific food item and then the user can carry out the workout as per the instrunment that is available in the gym."
              ghLink="https://github.com/abhishekagarwal777/Calorie_Estimation"
              demoLink="https://prachand.co.in/"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prachand}
              isBlog={false}
              title="PRACHAND"
              description="At Prachand, we are revolutionizing healthcare with our software application that integrates a predictive ML model for patient readmission into hospital EHR systems. Our user-friendly platform allows healthcare professionals to view predictions, access risk factors, and receive tailored recommendations for high-risk patients. We ensure seamless data collection and preparation, model development, and software integration using technologies like Python, Django, and React. After thorough testing and deployment, we continuously monitor performance and provide support to maximize the benefits of predictive analytics. Experience a seamless healthcare journey with Prachand—your trusted partner for medications and wellness products delivered right to your doorstep."
              ghLink="https://github.com/abhishekagarwal777/prachand"
              // demoLink="https://prachand.co.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qalki}
              isBlog={false}
              title="QALKI"
              description="One-stop platform to grow within ourselves, with loved ones and create impact.
                  Embrace a future-ready vision with unique designs, limitless possibilities, and real-time tracking.

"
              ghLink="https://github.com/abhishekagarwal777/Qalki"
              demoLink="https://qalki-dev.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PostDischarge}
              isBlog={false}
              title="Post Discharge Services"
              description="During my internship at vEngage.ai, a Bangalore-based company, I led the development of post-discharge care frameworks and the integration of advanced medical devices within the healthcare sector. My role involved utilizing various services, including- formBuilder-vitalsJSON
medverve_insurance_claim
myenv
pd-all-services-yaml
pd-backend-sandbox
pd-chatty
pd-database-sandbox
pd-dbwrapper-sandbox
pd-nlp-service-sandbox
pd-patientmobile-app
pd-question-utils
pd-rics
pd-rics-sns-entity
pd-sns-checker
pd-summary-parser
pd-telephony-service
pd-test-webapp
pd-thirdparty-service
pd-web-app-sandbox
pd-whatsapp-sandbox
queue_exchange"
              ghLink="https://github.com/abhishekagarwal777/appoinment-regression-test-framework"
              demoLink="https://staging.vengage.ai/#/workdesk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iskcon}
              isBlog={false}
              title="ISKCON Koramangala"
              description="At ISKCON Koramangala in Bengaluru, I was responsible for spearheading the development of the website, managing the social media pages, and overseeing all marketing efforts."
              demoLink="https://www.iskconkoramangala.org/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dmilp}
              isBlog={false}
              title="ILP Overseas"
              description="Search Engine Optimization (SEO) · Email Marketing · Digital Marketing · Search Engine Marketing (SEM) · Direct Marketing · Online Marketing"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
