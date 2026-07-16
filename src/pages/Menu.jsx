// MENU: Tasfia
import data from "../data.json";
function Menu() {
  return (
    <section>
      {/* TODO (Tasfia): menu list */}
      {/* retrieve data from data.json*/}
      <h2>{data.es.menu.title}</h2>
      <ul>
        {data.es.menu.items.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Menu;

  