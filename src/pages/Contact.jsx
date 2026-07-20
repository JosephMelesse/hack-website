// Contact per wireframe pp. 07-08: big call card, find-us block, map placeholder.
function Contact({ t }) {
  return (
    <section className="contact">
      <div className="container">
        <h1>{t?.nav?.contact}</h1>
        <div className="card contact-call">
          <h2 className="eyebrow">{t?.contact?.callTitle}</h2>
          <a className="contact-call__phone" href={`tel:${t?.phone}`}>
            {t?.phoneDisplay}
          </a>
        </div>
        <section className="contact-find">
          <h2 className="eyebrow">{t?.contact?.findTitle}</h2>
          <p>
            {t?.contact?.address} · {(t?.footer?.hours ?? []).join(" · ")}
          </p>
          {/* real map embed pending (DESIGN.md §7) */}
          <div className="contact-map">
            <span>{t?.contact?.mapNote}</span>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Contact;
