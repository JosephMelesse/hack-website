// Contact per wireframe pp. 07-08: big call card, find-us block, map placeholder.
function Contact({ t }) {
  return (
    <section className="contact">
      <div className="container">
        <h1>{t?.nav?.contact}</h1>
        <div className="card contact-call">
          <h2 className="eyebrow">{t?.contact?.callTitle}</h2>
          {(t?.phones ?? []).map((p) => (
            <a
              className="contact-call__phone"
              href={`tel:${p?.tel}`}
              key={p?.tel}
            >
              {p?.display}
            </a>
          ))}
        </div>
        <section className="contact-find">
          <h2 className="eyebrow">{t?.contact?.findTitle}</h2>
          <p>
            {t?.contact?.address}
          </p>
          <div
            className={
              t?.contact?.mapEmbed ? "contact-map contact-map--live" : "contact-map"
            }
          >
            {t?.contact?.mapEmbed ? (
              <iframe
                src={t.contact.mapEmbed}
                title={t?.contact?.findTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <span>{t?.contact?.mapNote}</span>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Contact;
