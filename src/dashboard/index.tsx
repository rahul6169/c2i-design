import { Avatar, Card, Col, Row, Tag } from "antd";
import "./style.css";
import Icon from "@ant-design/icons/lib/components/Icon";
import { CalendarOutlined, MoreOutlined } from "@ant-design/icons";
export const Dashboard = () => {
  return (
    <>
      <Row className="welcome-text">Welcome to Connect2Investors!</Row>
      <Row>
        <Col lg={8} md={12} sm={24} xl={8} span={8}>
          <Card className="investor-card">
            <Row className="investor-text">No of Investors</Row>
            <Row className="number-text">20</Row>
            <Row className="year-text-row">
              <Col className="year-text">Year of 2023</Col>
            </Row>
            <Col>
              <img src="./assets/savings.png" className="savings-img"></img>
            </Col>
          </Card>
        </Col>

        <Col span={8}>
          <Card className="investor-card">
            <Row className="investor-text">No of Mentors</Row>
            <Row className="number-text">20</Row>
            <Row className="year-text-row">
              <Col className="year-text">Year of 2023</Col>
            </Row>
            <Col>
              <img
                src="./assets/partner_exchange.png"
                className="savings-img"
              ></img>
            </Col>
          </Card>
        </Col>

        <Col span={8}>
          <Card className="investor-card">
            <Row className="investor-text">No of Startups</Row>
            <Row className="number-text">20</Row>
            <Row className="year-text-row">
              <Col className="year-text">Year of 2023</Col>
            </Row>
            <Col>
              <img src="./assets/rocket.png" className="savings-img"></img>
            </Col>
          </Card>
        </Col>
      </Row>
      {/* <Card style={{ marginTop: "20px" }}>
        <Row className="calender-schedule-card-row">
          <Col className="calendar-text">Calendar Schedule</Col>
          <Col className="more-outlined-icon">
            <MoreOutlined className="more-outlined-icon" />
          </Col>
        </Row>
      </Card> */}
      <Card
        style={{ marginTop: "20px" }}
        title="Calender Schedule"
        hoverable={true}
        className="calender-table-card"
      >
        <table>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Meeting Importance</th>
          </tr>
          <tr>
            <td>
              <Row>
                <Col span={5} className="table-col-align">
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                </Col>
                <Col span={19} className="table-header-text">
                  <h5>Call with hilda</h5>
                  <p>
                    <CalendarOutlined /> 21 Jul | 08:20-10:30
                  </p>
                </Col>
              </Row>
            </td>
            <td className="table-para">
              <p>
                a list of topics, action items, and activities you want to
                discuss during the meeting
              </p>
            </td>
            <td style={{ textAlign: "center" }}>
              <Tag color="green">High</Tag>
            </td>
          </tr>
          <tr>
            <td>
              <Row>
                <Col span={5} className="table-col-align">
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                </Col>
                <Col span={19} className="table-header-text">
                  <h5>Conference call</h5>
                  <p>
                    <CalendarOutlined /> 21 Jul | 08:20-10:30
                  </p>
                </Col>
              </Row>
            </td>
            <td className="table-para">
              <p>
                a list of topics, action items, and activities you want to
                discuss during the meeting
              </p>
            </td>
            <td style={{ textAlign: "center" }}>
              <Tag color="warning">Avg</Tag>
            </td>
          </tr>
        </table>
      </Card>
    </>
  );
};
