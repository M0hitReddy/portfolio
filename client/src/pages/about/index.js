import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  education,
  certifications,
} from "../../content_option";
import java from "./images/Java.png";
import { FaMapMarkerAlt } from "react-icons/fa";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        {/* <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row> */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            {education.map((data, i) => {
              return (
                <div className=" py-4" key={i}>
                  <h5 className="title">{data.title}</h5>
                  <div className="d-flex justify-content-between"><p>{data.degree}</p><p>{data.year}</p></div>
                  {/* <p className="service_desc">{data.description}</p> */}
                  <div className="location"><FaMapMarkerAlt /> {data.location}</div>

                </div>
              );
            })}
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Certifications</h3>
          </Col>
          <Col lg="7">
            <div className="certifications">
              {certifications.map((data, i) => {
                return (
                  <div className=" py-4" key={i}>
                    <h5 className="">{data.title}</h5>
                    <a href={data.credential}><img className="certificate" src={java} alt={data.alt} /></a>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
