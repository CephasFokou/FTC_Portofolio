import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { getContent } from "../../content_option";
import { useTranslation } from "../../i18n/useTranslation";

const toEmbedUrl = (url) => {
  if (!url) return "";
  const yt =
    url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/) ||
    url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (yt && yt[1]) return `https://www.youtube-nocookie.com/embed/${yt[1]}`;
  return url;
};

export const Experience = () => {
  const { t, lang } = useTranslation();
  const { experiences, dataportfolio, realisations, meta } = getContent(lang);
  const items = experiences || [];
  const works = (dataportfolio || []).filter((p) => String(p.link || "").includes("youtu"));
  const playlistUrl = realisations?.playlistUrl;

  return (
    <HelmetProvider>
      <Container className="Experience-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {t("experience.title")} | {meta.title}
          </title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="10">
            <h1 className="display-4 mb-3">{t("experience.title")}</h1>
            <p className="exp_lead mb-4">{t("experience.lead")}</p>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="exp_list">
          {items.map((exp, i) => {
            const hasVideo = Boolean(exp.video);
            const embedUrl = toEmbedUrl(exp.video);
            return (
              <article className="exp_card" key={i}>
                <div className="exp_media">
                  {exp.media?.type === "video" ? (
                    <video
                      className="exp_media__video"
                      src={exp.media.src}
                      controls
                      playsInline
                    />
                  ) : (
                    <div className="exp_media__imgwrap">
                      <img
                        className="exp_media__img"
                        src={exp.media?.src}
                        alt={exp.media?.alt || `${exp.role} – ${exp.company}`}
                        loading="lazy"
                      />
                      {hasVideo ? (
                        <a
                          className="exp_media__cta"
                          href={exp.video}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={t("experience.seeVideo")}
                        >
                          {t("experience.seeVideo")}
                        </a>
                      ) : null}
                    </div>
                  )}
                </div>

                <div className="exp_content">
                  <header className="exp_header">
                    <h2 className="exp_title">{exp.role}</h2>
                    <div className="exp_meta">
                      <span className="exp_meta__item">{exp.company}</span>
                      <span className="exp_meta__sep">•</span>
                      <span className="exp_meta__item">{exp.location}</span>
                      <span className="exp_meta__sep">•</span>
                      <span className="exp_meta__item">{exp.period}</span>
                    </div>
                  </header>

                  {exp.summary ? <p className="exp_summary">{exp.summary}</p> : null}

                  {Array.isArray(exp.highlights) && exp.highlights.length ? (
                    <ul className="exp_bullets">
                      {exp.highlights.map((h, idx) => (
                        <li key={idx}>{h}</li>
                      ))}
                    </ul>
                  ) : null}

                  {hasVideo && embedUrl.includes("youtube") ? (
                    <details className="exp_embed">
                      <summary>{t("experience.previewVideo")}</summary>
                      <div className="exp_embed__frame">
                        <iframe
                          title={`Video: ${exp.role}`}
                          src={embedUrl}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </details>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        <Row className="mb-4">
          <Col lg="10">
            <h2 className="display-6 mb-2">{t("experience.worksTitle")}</h2>
            <p className="exp_lead mb-0">{t("experience.worksLead")}</p>
          </Col>
        </Row>

        <div className="works_grid">
          {playlistUrl ? (
            <div className="work_card">
              <div className="work_header">
                <h3 className="work_title">{t("experience.playlistTitle")}</h3>
                <a
                  className="work_link"
                  href={playlistUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("experience.openVideo")}
                </a>
              </div>
              <details className="work_embed">
                <summary>{t("experience.previewVideo")}</summary>
                <div className="work_embed__frame">
                  <iframe
                    title={t("experience.playlistTitle")}
                    src={toEmbedUrl(playlistUrl)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </details>
            </div>
          ) : null}

          {works.map((w, idx) => (
            <div className="work_card" key={idx}>
              <div className="work_media">
                <img className="work_img" src={w.img} alt="" loading="lazy" />
              </div>
              <div className="work_body">
                <p className="work_desc">{w.description}</p>
                <div className="work_actions">
                  <a
                    className="work_link"
                    href={w.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("experience.openVideo")}
                  </a>
                </div>
                <details className="work_embed">
                  <summary>{t("experience.previewVideo")}</summary>
                  <div className="work_embed__frame">
                    <iframe
                      title={`Work video ${idx + 1}`}
                      src={toEmbedUrl(w.link)}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </details>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
