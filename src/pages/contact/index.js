import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { getContent, contactConfig } from "../../content_option";
import { useTranslation } from "../../i18n/useTranslation";
import { Seo } from "../../components/seo";

export const ContactUs = () => {
  const { t, lang } = useTranslation();
  const { meta, contact } = getContent(lang);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", text: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ state: "sending", text: "" });
    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        {
          from_name: form.email,
          user_name: form.name,
          to_name: contactConfig.YOUR_EMAIL,
          message: form.message,
        },
        contactConfig.YOUR_USER_ID
      )
      .then(
        () => {
          setStatus({ state: "success", text: t("contact.success") });
          setForm({ name: "", email: "", message: "" });
        },
        () => setStatus({ state: "error", text: t("contact.failed") })
      );
  };

  return (
    <>
      <Seo title={`${contact.title} | ${meta.title}`} description={meta.description} />
      <header className="page-head">
        <div className="wrap">
          <h1 className="page-title">{contact.title}</h1>
          <p className="page-lead">{contact.lead}</p>
        </div>
      </header>

      <section className="section section--tight">
        <div className="wrap contact">
          <dl className="facts contact__facts">
            <div>
              <dt>{t("contact.email")}</dt>
              <dd><a href={`mailto:${contactConfig.YOUR_EMAIL}`}>{contactConfig.YOUR_EMAIL}</a></dd>
            </div>
            <div>
              <dt>{t("contact.phone")}</dt>
              <dd><a href={`tel:${contactConfig.YOUR_PHONE.replace(/\s/g, "")}`}>{contactConfig.YOUR_PHONE}</a></dd>
            </div>
            <div>
              <dt>{t("contact.location")}</dt>
              <dd>{contact.location}</dd>
            </div>
          </dl>

          <form className="form" onSubmit={handleSubmit}>
            <h2 className="h3">{t("contact.formTitle")}</h2>
            <div className="form__row">
              <label>
                <span>{t("contact.name")}</span>
                <input name="name" type="text" autoComplete="name" required value={form.name} onChange={handleChange} />
              </label>
              <label>
                <span>{t("contact.emailField")}</span>
                <input name="email" type="email" autoComplete="email" required value={form.email} onChange={handleChange} />
              </label>
            </div>
            <label>
              <span>{t("contact.message")}</span>
              <textarea name="message" rows="6" required value={form.message} onChange={handleChange} />
            </label>
            {status.text ? (
              <p className={`form__status form__status--${status.state}`} role="status">{status.text}</p>
            ) : null}
            <button className="btn btn--solid" type="submit" disabled={status.state === "sending"}>
              {status.state === "sending" ? t("contact.sending") : t("contact.send")}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
