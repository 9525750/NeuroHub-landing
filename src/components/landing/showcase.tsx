import { appPath } from "@/lib/config";

type Tile = {
  cls: string;
  big?: boolean;
  vertical?: boolean;
  label?: string;
  image?: string;
  video?: string;
};

export function Showcase({
  eyebrow,
  tag,
  title,
  description,
  ctaLabel,
  introBackground,
  tiles,
  columns,
}: {
  eyebrow: string;
  tag: string;
  title: string;
  description: string;
  ctaLabel: string;
  introBackground?: string;
  tiles: Tile[];
  // 5 — витрина с преимущественно вертикальными плитками (изображения),
  // 3 — с преимущественно горизонтальными (видео). См. landing.css.
  columns: 3 | 5;
}) {
  return (
    <div className="wrap">
      <div className="sec-eyebrow">
        <b>{eyebrow}</b>
      </div>
      <div className="showcase notch">
        <div className="showcase__intro" style={introBackground ? { background: introBackground } : undefined}>
          <span className="tag">{tag}</span>
          <h3>{title}</h3>
          <p>{description}</p>
          <a className="btn btn--dark" href={appPath("/register")}>
            {ctaLabel}
          </a>
        </div>
        <div className={`showcase__grid showcase__grid--${columns}`}>
          {tiles.map((tile, i) => (
            <div
              key={i}
              className={`showcase__tile ${tile.cls}${tile.big ? " big" : ""}${tile.vertical ? " vertical" : ""}`}
            >
              {tile.video ? (
                <video src={tile.video} className="showcase__media" autoPlay muted loop playsInline />
              ) : tile.image ? (
                // eslint-disable-next-line @next/next/no-img-element -- фиксированные локальные webp, next/image не нужен для декоративной плитки
                <img src={tile.image} alt="" className="showcase__media" />
              ) : null}
              {tile.label && <span>{tile.label}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
