import React from "react";
import Base from "../../Components/Base";
import { Card, Button } from "react-bootstrap";
import "./Courses.css";
import { Link } from "react-router-dom";
const Courses = () => {
  return (
    <div>
      <Base>
        <h2 className="text-center">Courses</h2>
        <div className="container">
          <div>
            <h3 className="my-5">Special Courses</h3>
            <div className="d-flex justify-content-between">
              <Card style={{ width: "18rem" }} className="box-shadow">
                <Card.Img
                  style={{ height: "300px", margin: "0 5px" }}
                  variant="top"
                  src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=250"
                />
                <Card.Body>
                  <Card.Title>Maths</Card.Title>
                  <Card.Text>
                    Start with our maths course for your JEE
                  </Card.Text>
                  <Button variant="primary">
                    <Link to="/ordersummary" className="text-light nav-link">
                      Buy Course
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }} className="box-shadow">
                <Card.Img
                  style={{ height: "300px", margin: "0 5px" }}
                  variant="top"
                  src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=250"
                />
                <Card.Body>
                  <Card.Title>Physics</Card.Title>
                  <Card.Text>
                    Start with our physics course for your JEE
                  </Card.Text>
                  <Button variant="primary">
                    <Link to="/ordersummary" className="text-light nav-link">
                      Buy Course
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }} className="box-shadow">
                <Card.Img
                  style={{ height: "300px", margin: "0 5px" }}
                  variant="top"
                  src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=250"
                />
                <Card.Body>
                  <Card.Title>Chemistry</Card.Title>
                  <Card.Text>
                    Start with our Chemistry course for your JEE
                  </Card.Text>
                  <Button variant="primary">
                    <Link to="/ordersummary" className="text-light nav-link">
                      Buy Course
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="mb-5">
            <h3 className="my-5">Weekly Courses</h3>
            <div className="d-flex justify-content-between">
              <Card style={{ width: "18rem" }} className="box-shadow">
                <Card.Img
                  style={{ height: "300px", margin: "0 5px" }}
                  variant="top"
                  src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=250"
                />
                <Card.Body>
                  <Card.Title>Organic Chemistry</Card.Title>
                  <Card.Text>
                    Start with Organic Chemistry for your JEE
                  </Card.Text>
                  <Button variant="primary">
                    <Link to="/ordersummary" className="text-light nav-link">
                      Buy Course
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }} className="box-shadow">
                <Card.Img
                  style={{ height: "300px", margin: "0 5px" }}
                  variant="top"
                  src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=250"
                />
                <Card.Body>
                  <Card.Title>Fluid Dynamics</Card.Title>
                  <Card.Text>
                    Start with Fluid Dynamics course for your JEE
                  </Card.Text>
                  <Button variant="primary">
                    <Link to="/ordersummary" className="text-light nav-link">
                      Buy Course
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }} className="box-shadow">
                <Card.Img
                  className="card-img-top img-fluid"
                  style={{ height: "300px", margin: "0 5px" }}
                  variant="top"
                  src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=250"
                />
                <Card.Body>
                  <Card.Title>Calculas</Card.Title>
                  <Card.Text>Start with Calculas course for your JEE</Card.Text>
                  <Button variant="primary">
                    <Link to="/ordersummary" className="text-light nav-link">
                      Buy Course
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
};
export default Courses;
