import { appPath } from "@/lib/config";

type Tile = { cls: string; big?: boolean; vertical?: boolean; label?: string };

export function Showcase({
  eyebrow,
  tag,
  title,
  description,
  ctaLabel,
  introBackground,
  tiles,
}: {
  eyebrow: string;
  tag: string;
  title: string;
  description: string;
  ctaLabel: string;
  introBackground?: string;
  tiles: Tile[];
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
        <div className="showcase__grid">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className={`showcase__tile ${tile.cls}${tile.big ? " big" : ""}${tile.vertical ? " vertical" : ""}`}
            >
              {tile.label && <span>{tile.label}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
