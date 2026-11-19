import React from "react";
import { getContent } from "../../content_option";
import { useTranslation } from "../../i18n/useTranslation";
import { Seo } from "../../components/seo";

export const Experience = () => {
  const { t, lang } = useTranslation();
  const { meta, experiences } = getContent(lang);

  return (
    <>
      <Seo title={`${t("experience.title")} | ${meta.title}`} description={meta.description} />
      <header className="page-head">
        <div className="wrap">
          <h1 className="page-title">{t("experience.title")}</h1>
          <p className="page-lead">{t("experience.lead")}</p>
        </div>
      </header>

      <section className="section section--tight">
        <div className="wrap">
          <ol className="timeline">
            {experiences.map((exp) => {
              const current = /aujourd|present/i.test(exp.period);
              return (
                <li key={`${exp.company}-${exp.period}`} className={`timeline__item ${current ? "is-current" : ""}`}>
                  <div className="timeline__when">
                    <p className="timeline__period">{exp.period}</p>
                    {current ? <p className="timeline__badge">{t("experience.current")}</p> : null}
                  </div>
                  <div className="timeline__body">
                    <h2 className="timeline__role">{exp.role}</h2>
                    <p className="timeline__company">
                      {exp.company}
                      {exp.note ? <span>, {exp.note}</span> : null}
                      <span>, {exp.location}</span>
                    </p>
                    <p>{exp.summary}</p>
                    <ul className="dash-list">
                      {exp.highlights.map((h) => <li key={h}>{h}</li>)}
                    </ul>
                    {exp.video ? (
                      <a className="text-link" href={exp.video} target="_blank" rel="noreferrer">{t("experience.video")}</a>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </>
  );
};
