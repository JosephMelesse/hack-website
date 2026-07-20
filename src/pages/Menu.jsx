// MENU: Tasfia
import { useState } from "react";
import hamburgersImg from "../assets/Hamburgers.jpg";
import sandwichImg from "../assets/Sandwich.jpg";
import openTacosImg from "../assets/Open_Tacos.jpg";
import gorditasImg from "../assets/IMG_20260708_002022_950.jpg";
import tortasImg from "../assets/torta.jpg";
import tacosImg from "../assets/IMG_20260708_002131_000.jpg";

const imageMap = {
  "Hamburgers": hamburgersImg,
  "Hamburguesas - Todo el día": hamburgersImg,
  "Sandwiches": sandwichImg,
  "Open Tacos": openTacosImg,
  "Tacos abiertos": openTacosImg,
  "Gorditas": gorditasImg,
  "Gorditas - Todo el día": gorditasImg,
  "Tortas": tortasImg,
  "Tacos": tacosImg,
};

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
              {imageMap[item?.name] ? (
                <img src={imageMap[item?.name]} alt={item?.name} className="menu-item__img" />
              ) : (
                <svg viewBox="0 0 100 100" className="menu-item__img-placeholder" aria-hidden="true">
                  <rect width="100%" height="100%" />
                </svg>
              )}
              <div className="menu-item__content">
                <div className="menu-item__row">
                  <h3>{item?.name}</h3>
                  <span className="menu-item__price">{item?.price}</span>
                </div>
                <p>{item?.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Menu;
