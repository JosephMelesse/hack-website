// MENU: Tasfia
import { useState } from "react";

// Menu per wireframe pp. 03-04: morning/evening toggle, card per dish.
function Menu({ t }) {
  const [section, setSection] = useState("morning");
  const items = t?.menu?.[section]?.items ?? [];

  return (
    <section className="menu">
      <div className="container">
        <h1>{t?.menu?.title}</h1>
        <div className="menu-toggle">
          <button
            type="button"
            className={section === "morning" ? "is-current" : undefined}
            aria-pressed={section === "morning"}
            onClick={() => setSection("morning")}
          >
            {t?.menu?.morningTitle}
          </button>
          <button
            type="button"
            className={section === "evening" ? "is-current" : undefined}
            aria-pressed={section === "evening"}
            onClick={() => setSection("evening")}
          >
            {t?.menu?.eveningTitle}
          </button>
        </div>
        <ul className="menu-list">
          {items.map((item, index) => (
            <li className="card menu-item" key={index}>
              <div className="menu-item__row">
                <h3>{item?.name}</h3>
                <span className="menu-item__price">{item?.price}</span>
              </div>
              <p>{item?.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Menu;
