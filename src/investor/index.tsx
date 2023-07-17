import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Card, Col, Input, Row } from "antd";
import "./style.css";
export const Investor = () => {
  const a = [1, 2, 3, 4, 5];
  return (
    <>
      <Row gutter={24} className="investor-header-alignment">
        <Col className="investor-list-text">Investor List</Col>
        <Row gutter={24}>
          <Col>
            <Input
              className="search-box-investor"
              autoComplete="off"
              placeholder="Search by Title"
              prefix={<SearchOutlined />}
            />
          </Col>
          <Col>
            <Button
              className="create-button-investor"
              icon={<PlusCircleOutlined />}
              size="middle"
            >
              Create
            </Button>
          </Col>
        </Row>
      </Row>
      <Row className="card-row">
        {a?.map((a) => (
          <>
            <Col
              xl={12}
              lg={16}
              md={18}
              sm={24}
              xs={24}
              style={{ marginBottom: "10px" }}
            >
              <Card className="investor-card-outline">
                <Row gutter={24} className="card-row-align">
                  <Col span={8} className="card-profile-logo">
                    <img src="./assets/card-img.png"></img>
                  </Col>
                  <Col className="col-align">
                    <Row className="collab-text">1stCollab</Row>
                    <Row className="first-collab-text">1stCollab@gmail.com</Row>
                    <Row>
                      <Col className="first-collab-text">+91979818368</Col>
                      <Col className="details-text">Details</Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
          </>
        ))}
      </Row>
    </>
  );
};
