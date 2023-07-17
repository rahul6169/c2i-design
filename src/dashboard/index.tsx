import { Card, Col, Row } from "antd";
import "./style.css";
export const Dashboard = () => {
  return (
    <>
      <Row className="welcome-text">Welcome to Connect2Investors!</Row>
      <Row>
        <Col span={8}>
          <Card className="investor-card">
            <Row className="investor-text">No of Investors</Row>
            <Row className="number-text">20</Row>
            <Row className="year-text-row">
              <Col className="year-text">Year of 2023</Col>
              <Col>
                {/* <img src="./assets/savings.png" className="savings-img"></img> */}
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={8}>
          <Card className="investor-card">
            <Row className="investor-text">No of Mentors</Row>
            <Row className="number-text">20</Row>
            <Row className="year-text-row">
              <Col className="year-text">Year of 2023</Col>
              <Col>
                {/* <img src="./assets/savings.png" className="savings-img"></img> */}
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={8}>
          <Card className="investor-card">
            <Row className="investor-text">No of Startups</Row>
            <Row className="number-text">20</Row>
            <Row className="year-text-row">
              <Col className="year-text">Year of 2023</Col>
              <Col>
                {/* <img src="./assets/savings.png" className="savings-img"></img> */}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};
