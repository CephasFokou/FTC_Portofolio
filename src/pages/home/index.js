import React from "react";
import { Link } from "react-router-dom";
import { getContent } from "../../content_option";
import { useTranslation } from "../../i18n/useTranslation";
import { Seo } from "../../components/seo";

export const Home = () => {
  const { t, lang } = useTranslation();
  const { meta, hero, statement, offers, recent, homeProjects, homeCta } = getContent(lang);

  return (
    <>
      <Seo title={meta.title} description={meta.description} />

      <section className="hero">
        <div className="wrap hero__grid">
          <div className="hero__text">
            <p className="hero__role">
              <strong>{hero.name}</strong>
              <span>{hero.role}</span>
            </p>
            <h1 className="hero__title">{hero.title}</h1>
            <p className="hero__lead">{hero.lead}</p>
            <div className="actions">
              <Link className="btn btn--solid" to="/portfolio">{t("home.seeProjects")}</Link>
              <Link className="btn btn--ghost" to="/contact">{t("home.contactMe")}</Link>
            </div>
          </div>
          <figure className="hero__portrait">
            <img src={hero.portrait} alt={t("home.portraitAlt")} width="920" height="1150" />
          </figure>
        </div>
      </section>

      <section className="statement">
        <div className="wrap">
          <p className="statement__text">{statement.text}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h2">{offers.title}</h2>
          <div className="offers">
            {offers.items.map((o) => (
              <article key={o.title} className="offer">
                <h3 className="h3">{o.title}</h3>
                <p>{o.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap">
          <div className="section__head">
            <h2 className="h2">{homeProjects.title}</h2>
            <Link className="text-link" to="/portfolio">{homeProjects.all}</Link>
          </div>
          <div className="teasers">
            {recent.slice(0, 3).map((p) => (
              <Link key={p.id} to={`/portfolio#${p.id}`} className="teaser">
                <img src={p.cover} alt="" loading="lazy" />
                <span className="teaser__context">{p.context}</span>
                <span className="teaser__title">{p.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap cta">
          <div>
            <h2 className="h2">{homeCta.title}</h2>
            <p>{homeCta.text}</p>
          </div>
          <Link className="btn btn--solid" to="/contact">{t("home.contactMe")}</Link>
        </div>
      </section>
    </>
  );
};
