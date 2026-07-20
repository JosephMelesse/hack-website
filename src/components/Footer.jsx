import logo from "../assets/logo.png";

// Footer per wireframe: hours / address / socials, dark ground, tile divider on top.
function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div className="tile-divider" aria-hidden="true"></div>
      <div className="container site-footer__grid">
        <section>
          <h2 className="eyebrow">{t?.footer?.hoursTitle}</h2>
          <ul>
            {(t?.footer?.hours ?? []).map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="eyebrow">{t?.footer?.addressTitle}</h2>
          <p>{t?.footer?.address}</p>
        </section>
        <section>
          <h2 className="eyebrow">{t?.footer?.socialTitle}</h2>
          <ul>
            {(t?.footer?.social ?? []).map((s) => (
              <li key={s?.label}>
                <a href={s?.url}>{s?.label}</a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="container site-footer__brand">
        <img src={logo} alt="" width="56" height="56" />
        <span>{t?.footer?.since}</span>
      </div>
    </footer>
  );
}

export default Footer;
