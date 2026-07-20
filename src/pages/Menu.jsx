// MENU: Tasfia
// Menu per wireframe pp. 03-04: morning and evening sections, card per dish.
function Menu({ t }) {
  const sections = [
    { title: t?.menu?.morningTitle, items: t?.menu?.morning?.items ?? [] },
    { title: t?.menu?.eveningTitle, items: t?.menu?.evening?.items ?? [] },
  ];

  return (
    <section className="menu">
      <div className="container">
        <h1>{t?.menu?.title}</h1>
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="eyebrow">{section.title}</h2>
            <ul className="menu-list">
              {section.items.map((item, index) => (
                <li className="card menu-item" key={index}>
                  <div className="menu-item__row">
                    <h3>{item?.name}</h3>
                    <span className="menu-item__price">{item?.price}</span>
                  </div>
                  <p>{item?.description}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Menu;
