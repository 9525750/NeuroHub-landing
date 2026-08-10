"use client";

import { useEffect, useState } from "react";
import { appPath } from "@/lib/config";

// Картинок пока нет ни одной настоящей (сервис только запускается) — плитки
// это те же градиенты-заглушки, что и в остальном лендинге (см. t1–t8 в
// landing.css), а не реальные генерации. Промпты и модели — правдоподобный
// пример того, что получится, когда появятся настоящие работы.
type Tag = "portraits" | "ads" | "illustration" | "video" | "music" | "wallpapers";

const TAGS: { key: Tag | "all"; label: string }[] = [
  { key: "all", label: "Все" },
  { key: "portraits", label: "Портреты" },
  { key: "ads", label: "Реклама и продукт" },
  { key: "illustration", label: "Иллюстрация" },
  { key: "video", label: "Видео" },
  { key: "music", label: "Музыка и звук" },
  { key: "wallpapers", label: "Обои" },
];

type GalleryItem = {
  id: string;
  tag: Tag;
  cls: string;
  model: string;
  title: string;
  prompt: string;
};

const ITEMS: GalleryItem[] = [
  {
    id: "g1",
    tag: "portraits",
    cls: "t1",
    model: "Nano Banana Pro",
    title: "Портрет в мягком студийном свете",
    prompt:
      "Портретное фото девушки в бежевом свитере, мягкий боковой свет, боке на заднем плане, плёночная эстетика, объектив 85mm f/1.4",
  },
  {
    id: "g2",
    tag: "ads",
    cls: "t2",
    model: "Nano Banana Pro",
    title: "Продуктовый рендер батончика",
    prompt:
      "Флэтлей упаковки протеинового батончика на светлом фоне, рядом разрезанные орехи и капли шоколада, мягкие тени, рекламная предметная съёмка",
  },
  {
    id: "g3",
    tag: "illustration",
    cls: "t3",
    model: "Nano Banana Pro",
    title: "Плакат в стиле поп-арт",
    prompt:
      "Иллюстрация кофейной чашки в стиле ретро-плаката 60-х, плоские цвета, крупный растровый узор, надпись «MORNING»",
  },
  {
    id: "g4",
    tag: "video",
    cls: "t4",
    model: "Kling 3.0",
    title: "Панорама города на закате",
    prompt:
      "Кинематографичный облёт дрона над ночным городом, неоновые вывески отражаются в мокром асфальте, медленное движение камеры вперёд",
  },
  {
    id: "g5",
    tag: "wallpapers",
    cls: "t5",
    model: "Nano Banana Pro",
    title: "Абстрактные градиенты",
    prompt: "Абстрактные текучие формы пастельных оттенков, мягкий шум плёнки, минимализм, обои для рабочего стола 4K",
  },
  {
    id: "g6",
    tag: "portraits",
    cls: "t6",
    model: "Seedance 2.0",
    title: "Оживление портрета",
    prompt: "Лёгкое покачивание волос и моргание на статичном портрете, естественная мимика, минимум движения камеры",
  },
  {
    id: "g7",
    tag: "music",
    cls: "t7",
    model: "Suno",
    title: "Лоу-фай для учёбы",
    prompt: "Спокойный lo-fi бит с виниловым потрескиванием, мягкое пианино, 70 BPM, атмосфера дождливого вечера",
  },
  {
    id: "g8",
    tag: "ads",
    cls: "t8",
    model: "Nano Banana Pro",
    title: "Флакон косметики на мраморе",
    prompt: "Флакон сыворотки на белом мраморе, капли воды, мягкий верхний свет, минималистичная рекламная сцена",
  },
  {
    id: "g9",
    tag: "illustration",
    cls: "t1",
    model: "Nano Banana Pro",
    title: "Персонаж для сторибординга",
    prompt:
      "Дизайн персонажа: лисёнок-путешественник в плаще, три ракурса (анфас, профиль, спина), референс-лист для аниматора",
  },
  {
    id: "g10",
    tag: "video",
    cls: "t2",
    model: "Grok Imagine Video",
    title: "Морская волна крупным планом",
    prompt: "Замедленная съёмка разбивающейся волны, брызги подсвечены закатным солнцем, кинематографичный контраст",
  },
  {
    id: "g11",
    tag: "music",
    cls: "t3",
    model: "ElevenLabs",
    title: "Голос диктора для ролика",
    prompt: "Тёплый уверенный мужской голос, спокойный темп, рекламная озвучка технологичного продукта",
  },
  {
    id: "g12",
    tag: "wallpapers",
    cls: "t4",
    model: "Nano Banana Pro",
    title: "Горы в тумане",
    prompt: "Минималистичный пейзаж горных вершин в утреннем тумане, приглушённая палитра, широкоформатные обои",
  },
];

export function Gallery() {
  const [activeTag, setActiveTag] = useState<Tag | "all">("all");
  const [openItem, setOpenItem] = useState<GalleryItem | null>(null);
  const [copied, setCopied] = useState(false);

  const items = activeTag === "all" ? ITEMS : ITEMS.filter((item) => item.tag === activeTag);

  useEffect(() => {
    if (!openItem) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenItem(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openItem]);

  function openLightbox(item: GalleryItem) {
    setCopied(false);
    setOpenItem(item);
  }

  async function copyPrompt() {
    if (!openItem) return;
    try {
      await navigator.clipboard.writeText(openItem.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Буфер обмена недоступен (например, без HTTPS в деве) — просто не показываем «Скопировано».
    }
  }

  return (
    <div className="band" id="gallery">
      <div className="wrap">
        <div className="sec-eyebrow">
          <b>ГАЛЕРЕЯ · Примеры и промпты</b>
        </div>

        <div className="gallery">
          <div className="gallery__sidebar">
            <span className="gallery__sidebar-label">Категории</span>
            <div className="gallery__tags">
              {TAGS.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setActiveTag(t.key)}
                  className={`gallery__tag${activeTag === t.key ? " active" : ""}`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="gallery__grid">
            {items.map((item) => (
              <button key={item.id} type="button" className={`gallery__card ${item.cls}`} onClick={() => openLightbox(item)}>
                <span className="gallery__model">{item.model}</span>
                <span className="gallery__overlay">
                  <span className="gallery__prompt">{item.prompt}</span>
                  <span className="gallery__use">Использовать →</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {openItem && (
        <div className="lightbox" onClick={() => setOpenItem(null)}>
          <div className="lightbox__panel" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="lightbox__close" onClick={() => setOpenItem(null)} aria-label="Закрыть">
              ✕
            </button>
            <div className={`lightbox__image ${openItem.cls}`} />
            <div className="lightbox__details">
              <span className="tag">{openItem.model}</span>
              <h3>{openItem.title}</h3>
              <span className="lightbox__prompt-label">Промпт</span>
              <p className="lightbox__prompt">{openItem.prompt}</p>
              <div className="lightbox__actions">
                <button type="button" className="btn btn--ghost" onClick={copyPrompt}>
                  {copied ? "Скопировано" : "Скопировать промпт"}
                </button>
                <a className="btn btn--primary" href={appPath("/register")}>
                  Использовать
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
