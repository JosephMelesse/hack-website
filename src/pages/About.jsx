// ABOUT: Luis
function About({ t }) {
  return (
    <section className="about">
      <div className="container">
        <h1>{t?.about?.title}</h1>
        <p>{t?.about?.story}</p>
      </div>
    </section>
  );
}

export default About;
