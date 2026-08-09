import { appPath } from "@/lib/config";

const APPS = [
  { cls: "a1", label: "Создание изображений →" },
  { cls: "a2", label: "Апскейл →" },
  { cls: "a3", label: "Видео: создание →" },
  { cls: "a4", label: "Видео: движение →" },
  { cls: "a5", label: "Музыка и звуки →" },
  { cls: "a6", label: "Озвучка текста →" },
];

export function AppsGrid() {
  return (
    <div className="band" id="apps">
      <div className="wrap">
        <div className="sec-eyebrow">
          <b>III — Режимы генерации</b>
        </div>
        <div className="apps-head">
          <div>
            <h2>Режимы генерации</h2>
            <p>Один баланс для изображений, видео и аудио — переключение внутри рабочего стола, без отдельных разделов оплаты.</p>
          </div>
          <a className="btn btn--ghost" href={appPath("/register")}>
            Перейти на рабочий стол →
          </a>
        </div>
        <div className="apps-row">
          {APPS.map((app) => (
            <div key={app.cls} className="app-card">
              <div className={`app-card__img ${app.cls}`}>
                <span className="app-card__badge badge-new">РЕАЛЬНО</span>
              </div>
              <div className="app-card__label">{app.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
