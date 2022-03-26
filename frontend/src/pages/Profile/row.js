import React from 'react';
import "./Profile.css";
import {Row,Col, Form} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function row(props) {
  return (
    <div>
      <Row>
                  <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="fname">
                    props.put
                  </Col>
                  <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                  <input type="text" className="field" name="country" id="country" required />
                  </Col>
                </Row>
    </div>
  )
}
