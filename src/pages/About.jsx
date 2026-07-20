// ABOUT: Luis
import outsideImg from "../assets/Outside_photo.jpg";

function About({ t }) {
  return (
    <section className="about">
      <div className="container">
        <h1>{t?.about?.title}</h1>
        <p>{t?.about?.story}</p>
        <img src={outsideImg} alt="Outside of Gorditas Santa Maria" style={{ marginTop: '2rem', borderRadius: 'var(--radius)' }} />
      </div>
    </section>
  );
}

export default About;
