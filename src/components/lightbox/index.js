import React, { useCallback, useEffect, useRef } from "react";
import { useTranslation } from "../../i18n/useTranslation";

export const Lightbox = ({ images, index, title, onClose, onIndex }) => {
  const { t } = useTranslation();
  const closeRef = useRef(null);
  const count = images.length;

  const go = useCallback((d) => onIndex((index + d + count) % count), [index, count, onIndex]);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && count > 1) go(1);
      if (e.key === "ArrowLeft" && count > 1) go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, go, count]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <div className="lightbox__frame" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox__bar">
          <p>{title} <span>{index + 1} / {count}</span></p>
          <button ref={closeRef} type="button" className="lightbox__btn" onClick={onClose}>{t("lightbox.close")}</button>
        </div>
        <img src={images[index]} alt={`${title} ${index + 1}/${count}`} />
        {count > 1 ? (
          <div className="lightbox__nav">
            <button type="button" className="lightbox__btn" onClick={() => go(-1)} aria-label={t("lightbox.prev")}>‹</button>
            <button type="button" className="lightbox__btn" onClick={() => go(1)} aria-label={t("lightbox.next")}>›</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
