import React, { useState } from "react";
import { getContent } from "../../content_option";
import { useTranslation } from "../../i18n/useTranslation";
import { Seo } from "../../components/seo";
import { Lightbox } from "../../components/lightbox";

const isVideo = (url) => /youtu/.test(url || "");

export const Portfolio = () => {
  const { t, lang } = useTranslation();
  const { meta, recent, archive } = getContent(lang);
  const [box, setBox] = useState(null);

  const openGallery = (images, title) => setBox({ images, title, index: 0 });

  return (
    <>
      <Seo title={`${t("projects.title")} | ${meta.title}`} description={meta.description} />

      <header className="page-head">
        <div className="wrap">
          <h1 className="page-title">{t("projects.title")}</h1>
          <p className="page-lead">{t("projects.lead")}</p>
        </div>
      </header>

      <section className="section section--tight">
        <div className="wrap">
          <h2 className="h2">{t("projects.recentTitle")}</h2>
          <div className="cases">
            {recent.map((p) => (
              <article key={p.id} id={p.id} className="case">
                <figure className="case__media">
                  <img src={p.cover} alt="" loading="lazy" />
                  <figcaption>{t("projects.illustration")}</figcaption>
                </figure>
                <div className="case__body">
                  <p className="case__context">{p.context}</p>
                  <h3 className="case__title">{p.title}</h3>
                  <p className="case__summary">{p.summary}</p>
                  <h4 className="case__label">{t("projects.role")}</h4>
                  <ul className="dash-list">
                    {p.role.map((r) => <li key={r}>{r}</li>)}
                  </ul>
                  <div className="case__outcome">
                    <h4 className="case__label">{t("projects.outcome")}</h4>
                    <p>{p.outcome}</p>
                  </div>
                  <ul className="tags" aria-label="Tags">
                    {p.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  {(p.gallery || p.video) && (
                    <div className="actions actions--small">
                      {p.gallery ? (
                        <button type="button" className="btn btn--ghost btn--sm" onClick={() => openGallery(p.gallery, p.title)}>
                          {t("projects.gallery")}
                        </button>
                      ) : null}
                      {p.video ? (
                        <a className="btn btn--ghost btn--sm" href={p.video} target="_blank" rel="noreferrer">{t("projects.video")}</a>
                      ) : null}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap">
          <div className="section__head section__head--stack">
            <h2 className="h2">{t("projects.archiveTitle")}</h2>
            <p>{t("projects.archiveLead")}</p>
          </div>
          <div className="archive">
            {archive.map((a) => (
              <article key={a.title} className="archive__item">
                <button type="button" className="archive__thumb" onClick={() => openGallery(a.gallery, a.title)} aria-label={`${t("projects.gallery")} : ${a.title}`}>
                  <img src={a.img} alt="" loading="lazy" />
                </button>
                <h3 className="archive__title">{a.title}</h3>
                <p className="archive__context">{a.context}</p>
                {a.link ? (
                  <a className="text-link" href={a.link} target="_blank" rel="noreferrer">
                    {isVideo(a.link) ? t("projects.video") : t("projects.link")}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {box ? (
        <Lightbox
          images={box.images}
          index={box.index}
          title={box.title}
          onClose={() => setBox(null)}
          onIndex={(i) => setBox((b) => ({ ...b, index: i }))}
        />
      ) : null}
    </>
  );
};
