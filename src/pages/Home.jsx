// HOME: Joseph
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/IMG_20260708_002019_884.jpg";
import teaserImg from "../assets/IMG_20260708_002131_000.jpg";
import videoThumb from "../assets/IMG_20260708_002223_321.jpg";
import featuredA from "../assets/Hamburgers.jpg";
import featuredB from "../assets/Sandwich.jpg";
import featuredC from "../assets/Open_Tacos.jpg";

const FEATURED_IMGS = [featuredA, featuredB, featuredC];
const VIDEO_ID = "hovIsj2oYfM";

function Home({ t }) {
  const [playVideo, setPlayVideo] = useState(false);
  const items = [
    ...(t?.menu?.morning?.items ?? []),
    ...(t?.menu?.evening?.items ?? []),
  ];

  const featured = t?.home?.featured ?? [];
  const [featIndex, setFeatIndex] = useState(0);
  const [featPaused, setFeatPaused] = useState(false);
  const activeFeat = featured.length ? featIndex % featured.length : 0;

  useEffect(() => {
    if (featPaused || featured.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setFeatIndex((i) => i + 1), 2000);
    return () => clearInterval(id);
  }, [featPaused, featured.length]);

  return (
    <>
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <h1>{t?.home?.heroTitle}</h1>
            <p>{t?.home?.heroText}</p>
            <p className="home-hero__service">{t?.home?.serviceLine}</p>
            <a className="btn" href={`tel:${t?.phones?.[0]?.tel}`}>
              {t?.nav?.call} · {t?.phones?.[0]?.display}
            </a>
          </div>
          <div className="home-hero__featured">
            <h2 className="eyebrow">{t?.home?.featuredTitle}</h2>
            <div
              className="home-featured__stage"
              onMouseEnter={() => setFeatPaused(true)}
              onMouseLeave={() => setFeatPaused(false)}
            >
              {featured.map((name, i) => (
                <article
                  className={
                    "card home-featured__card" +
                    (i === activeFeat ? " home-featured__card--active" : "")
                  }
                  key={name}
                  aria-hidden={i !== activeFeat}
                >
                  <img
                    src={FEATURED_IMGS[i % FEATURED_IMGS.length]}
                    alt={name}
                    style={i === 2 ? { objectFit: "contain" } : undefined}
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
            {featured.length > 1 && (
              <div
                className="home-featured__controls"
                onMouseEnter={() => setFeatPaused(true)}
                onMouseLeave={() => setFeatPaused(false)}
                onFocus={() => setFeatPaused(true)}
                onBlur={() => setFeatPaused(false)}
              >
                <button
                  type="button"
                  className="home-featured__arrow"
                  aria-label={
                    featured[(activeFeat + featured.length - 1) % featured.length]
                  }
                  onClick={() =>
                    setFeatIndex(
                      (activeFeat + featured.length - 1) % featured.length
                    )
                  }
                >
                  ‹
                </button>
                <div className="home-featured__dots">
                  {featured.map((name, i) => (
                    <button
                      type="button"
                      key={name}
                      className={i === activeFeat ? "is-current" : undefined}
                      aria-label={name}
                      aria-pressed={i === activeFeat}
                      onClick={() => setFeatIndex(i)}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="home-featured__arrow"
                  aria-label={featured[(activeFeat + 1) % featured.length]}
                  onClick={() =>
                    setFeatIndex((activeFeat + 1) % featured.length)
                  }
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="home-about">
        <div className="container">
          <h2 className="eyebrow">{t?.home?.aboutTeaserTitle}</h2>
          <p>{t?.home?.aboutTeaser}</p>
          <Link to="/about">{t?.nav?.about} →</Link>
        </div>
      </section>

      <section className="home-video-band">
        <div className="container">
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
      </section>

      <section className="home-featured">
        <div className="container">
          <div className="home-featured__photos">
            <div className="home-featured__photo">
              <img
                src={heroImg}
                alt="Fresh tortillas, al pastor, and filled gorditas on the griddle"
              />
              <div className="tile-divider" aria-hidden="true"></div>
            </div>
            <div className="home-featured__photo">
              <img src={teaserImg} alt="Tacos served at the family table" />
              <div className="tile-divider" aria-hidden="true"></div>
            </div>
          </div>
          <Link className="home-featured__more" to="/menu">
            {t?.menu?.title} →
          </Link>
        </div>
      </section>


    </>
  );
}

export default Home;
