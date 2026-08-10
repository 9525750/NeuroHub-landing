import "./landing.css";

import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { Showcase } from "@/components/landing/showcase";
import { ModelsBento } from "@/components/landing/models-bento";
import { Features } from "@/components/landing/features";
import { AppsGrid } from "@/components/landing/apps-grid";
import { Included } from "@/components/landing/included";
import { Testimonials } from "@/components/landing/testimonials";
import { Faq } from "@/components/landing/faq";
import { SiteFooter } from "@/components/landing/site-footer";

export default function Home() {
  return (
    <div className="landing">
      <Nav />
      <Hero />

      <Showcase
        eyebrow="ПРИМЕРЫ · Nano Banana Pro"
        tag="Изображения"
        title="Nano Banana Pro"
        description="4K-изображения с точным пониманием промпта — от портрета до сложной сцены с текстом."
        ctaLabel="Попробовать"
        tiles={[
          { cls: "t2", vertical: true, label: "Изображение" },
          { cls: "t1", vertical: true },
          { cls: "t3", vertical: true },
          { cls: "t4", vertical: true },
          { cls: "t5" },
          { cls: "t6", label: "Изображение" },
          { cls: "t7" },
        ]}
      />

      <ModelsBento />
      <Features />
      <AppsGrid />

      <Showcase
        eyebrow="ПРИМЕРЫ · Kling 3.0"
        tag="Видео"
        title="Kling 3.0"
        description="Кинематографичная генерация видео — реалистичное движение, динамика кадра и понимание сцены."
        ctaLabel="Попробовать Kling 3.0"
        introBackground="linear-gradient(165deg, #eef2fb, #dfe7fb)"
        tiles={[
          { cls: "t4", vertical: true, label: "Видео" },
          { cls: "t7", vertical: true },
          { cls: "t3", vertical: true },
          { cls: "t8", vertical: true },
          { cls: "t5" },
          { cls: "t1", label: "Видео" },
          { cls: "t6" },
        ]}
      />

      <Included />
      <Testimonials />
      <Faq />
      <SiteFooter />
    </div>
  );
}
