const CARDS: {
  provider: string;
  cls: string;
  wide?: boolean;
  models: { name: string; note: string }[];
}[] = [
  { provider: "Google", cls: "p-google", wide: true, models: [{ name: "Imagen 4", note: "Фотореализм" }, { name: "Gemini Omni Flash", note: "Видео" }] },
  { provider: "OpenAI", cls: "p-openai", models: [{ name: "GPT Image 2", note: "4K, точный текст" }] },
  { provider: "Nano Banana", cls: "p-nanobanana", models: [{ name: "Pro", note: "Референсы, 4K" }] },
  { provider: "Kling AI", cls: "p-kling", models: [{ name: "Kling 3.0", note: "Кино-видео" }, { name: "Motion", note: "Оживление фото" }] },
  { provider: "ByteDance", cls: "p-bytedance", models: [{ name: "Seedream 4.5", note: "Изображения" }, { name: "Seedance 2.0", note: "Видео" }] },
  { provider: "Suno", cls: "p-suno", models: [{ name: "V4.5", note: "Музыка, звуки" }] },
  { provider: "ElevenLabs", cls: "p-eleven", models: [{ name: "Multilingual v2", note: "Озвучка, RU" }] },
  { provider: "Grok", cls: "p-grok", models: [{ name: "Image", note: "Изображения" }, { name: "Imagine Video", note: "Видео" }] },
];

export function ModelsBento() {
  return (
    <div className="band" id="models">
      <div className="wrap">
        <div className="sec-eyebrow">
          <b>I — Лучшие модели рынка</b>
        </div>
        <div className="bento">
          <div className="bento__lead">
            <span className="pill">Один сервис</span>
            <h3>Лучшие модели рынка.</h3>
            <p>Все ведущие AI-модели изображений, видео и звука — без регистрации в десятке отдельных сервисов.</p>
            <a href="#models">Смотреть все модели →</a>
          </div>
          {CARDS.map((card) => (
            <div key={card.provider} className={`bento__card ${card.cls}${card.wide ? " wide" : ""}`}>
              <h4>{card.provider}</h4>
              <div className="models">
                {card.models.map((m) => (
                  <div key={m.name}>
                    <b>{m.name}</b>
                    <span>{m.note}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
