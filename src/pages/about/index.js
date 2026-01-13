import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Container } from "react-bootstrap";
import { getContent, documents } from "../../content_option";
import { useTranslation } from "../../i18n/useTranslation";

export const About = () => {
  const { t, lang } = useTranslation();
  const { dataabout, meta, worktimeline, skillsGroups, education, languages } =
    getContent(lang);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {t("about.title")} | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{t("about.title")}</h1>
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
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{t("about.workTimeline")}</h3>
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
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{t("about.education")}</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {education.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.title}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{t("about.languages")}</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {languages.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.name}</th>
                      <td>{data.level}</td>
                      <td></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{t("about.skills")}</h3>
          </Col>
          <Col lg="7">
            <div className="skills_groups">
              {skillsGroups.map((group, i) => {
                return (
                  <div className="skills_group" key={i}>
                    <h4 className="skills_group__title">{group.title}</h4>
                    <div className="skills_group__list">
                      {group.items.map((item, j) => (
                        <span className="skill_pill" key={`${i}-${j}`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{t("about.documents")}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p className="mb-2">
                <a href={documents.cv} download>
                  {t("about.downloadCv")}
                </a>
              </p>
              <p className="mb-0">
                <a href={documents.coverLetter} download>
                  {t("about.downloadLetter")}
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
