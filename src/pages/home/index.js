import React from "react";
import { Link } from "react-router-dom";
import { getContent } from "../../content_option";
import { useTranslation } from "../../i18n/useTranslation";
import { Seo } from "../../components/seo";

export const Home = () => {
  const { t, lang } = useTranslation();
  const { meta, hero, footprint, offers, recent, homeProjects, homeCta } = getContent(lang);

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
            <img src={hero.portrait} alt={t("home.portraitAlt")} width="869" height="1200" />
          </figure>
        </div>
      </section>

      <section className="route" aria-labelledby="route-title">
        <div className="wrap">
          <div className="route__head">
            <h2 id="route-title" className="route__title">{footprint.title}</h2>
            <p className="route__lead">{footprint.lead}</p>
          </div>
          <ol className="route__line">
            {footprint.items.map((item) => (
              <li key={item.code} className={`route__stop ${item.live ? "is-live" : "is-next"}`}>
                <span className="route__dot" aria-hidden="true" />
                <span className="route__code" aria-hidden="true">{item.code}</span>
                <span className="route__country">{item.country}</span>
                <span className="route__product">{item.product}</span>
                <span className="route__status">{item.status}</span>
              </li>
            ))}
          </ol>
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
                <ul className="dash-list">
                  {o.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
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
