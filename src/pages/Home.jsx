// HOME: Joseph
import { useState } from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/IMG_20260708_002019_884.jpg";
import teaserImg from "../assets/IMG_20260708_002131_000.jpg";
import videoThumb from "../assets/IMG_20260708_002223_321.jpg";
import featuredA from "../assets/IMG_20260708_002022_950.jpg";
import featuredB from "../assets/IMG_20260708_002256_459.jpg";
import featuredC from "../assets/IMG_20260708_002024_863.jpg";

const FEATURED_IMGS = [featuredA, featuredB, featuredC];
const VIDEO_ID = "hovIsj2oYfM";

function Home({ t }) {
  const [playVideo, setPlayVideo] = useState(false);
  const items = [
    ...(t?.menu?.morning?.items ?? []),
    ...(t?.menu?.evening?.items ?? []),
  ];

  return (
    <>
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <h1>{t?.home?.heroTitle}</h1>
            <p>{t?.home?.heroText}</p>
            <p className="home-hero__service">{t?.home?.serviceLine}</p>
            <a className="btn" href={`tel:${t?.phone}`}>
              {t?.nav?.call} · {t?.phoneDisplay}
            </a>
          </div>
          <div className="home-hero__photo">
            <img
              src={heroImg}
              alt="Fresh tortillas, al pastor, and filled gorditas on the griddle"
            />
            <div className="tile-divider" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      <section className="home-about">
        <div className="container home-about__grid">
          <div className="home-about__photo">
            <img src={teaserImg} alt="Tacos served at the family table" />
          </div>
          <div>
            <h2 className="eyebrow">{t?.home?.aboutTeaserTitle}</h2>
            <p>{t?.home?.aboutTeaser}</p>
            <Link to="/about">{t?.nav?.about} →</Link>
            <div className="home-video">
              {playVideo ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1`}
                  title="Gorditas Santa Maria video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  className="home-video__facade"
                  onClick={() => setPlayVideo(true)}
                  aria-label="Play video"
                >
                  <img src={videoThumb} alt="" />
                  <span className="home-video__play" aria-hidden="true">
                    ▶
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="home-featured">
        <div className="container">
          <h2 className="eyebrow">{t?.home?.featuredTitle}</h2>
          <div className="home-featured__grid">
            {(t?.home?.featured ?? []).map((name, i) => (
              <article className="card home-featured__card" key={name}>
                <img
                  src={FEATURED_IMGS[i % FEATURED_IMGS.length]}
                  alt={name}
                />
                <div className="home-featured__row">
                  <h3>{name}</h3>
                  <span className="home-featured__price">
                    {items.find((item) => item?.name === name)?.price}
                  </span>
                </div>
              </article>
            ))}
          </div>
          <Link className="home-featured__more" to="/menu">
            {t?.menu?.title} →
          </Link>
        </div>
      </section>

      <section className="home-strip">
        <div className="container home-strip__grid">
          <div>
            <h2 className="eyebrow">{t?.footer?.hoursTitle}</h2>
            <p>{(t?.footer?.hours ?? []).join(" · ")}</p>
          </div>
          <div>
            <h2 className="eyebrow">{t?.footer?.addressTitle}</h2>
            <p>{t?.footer?.address}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
