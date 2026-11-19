import React from "react";
import { getContent, documents } from "../../content_option";
import { useTranslation } from "../../i18n/useTranslation";
import { Seo } from "../../components/seo";

export const About = () => {
  const { t, lang } = useTranslation();
  const { meta, about, hero } = getContent(lang);

  return (
    <>
      <Seo title={`${about.title} | ${meta.title}`} description={meta.description} />
      <header className="page-head">
        <div className="wrap">
          <h1 className="page-title">{about.title}</h1>
        </div>
      </header>

      <section className="section section--tight">
        <div className="wrap about">
          <div className="about__text">
            {about.intro.map((p, i) => <p key={i}>{p}</p>)}
            <a className="btn btn--ghost" href={documents.cv} download>{t("nav.cv")}</a>
          </div>
          <aside className="about__side">
            <div className="about__photo">
              <img className="about__portrait" src={hero.portrait} alt={t("home.portraitAlt")} loading="lazy" />
            </div>
            <h2 className="h3">{about.educationTitle}</h2>
            <dl className="facts">
              {about.education.map((e) => (
                <div key={e.title}>
                  <dt>{e.title}</dt>
                  <dd>{e.where}, {e.date}</dd>
                </div>
              ))}
            </dl>
            <h2 className="h3">{about.languagesTitle}</h2>
            <dl className="facts">
              {about.languages.map((l) => (
                <div key={l.name}>
                  <dt>{l.name}</dt>
                  <dd>{l.level}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap">
          <h2 className="h2">{about.skillsTitle}</h2>
          <dl className="skills">
            {about.skills.map((g) => (
              <div key={g.title} className="skills__row">
                <dt>{g.title}</dt>
                <dd>
                  <ul className="tags">
                    {g.items.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
};
