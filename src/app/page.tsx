import "./landing.css";

import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { Showcase } from "@/components/landing/showcase";
import { ModelsBento } from "@/components/landing/models-bento";
import { Features } from "@/components/landing/features";
import { Included } from "@/components/landing/included";
import { Testimonials } from "@/components/landing/testimonials";
import { Faq } from "@/components/landing/faq";
import { SiteFooter } from "@/components/landing/site-footer";

export default function Home() {
  return (
    <div className="landing">
      <Nav />
      <Hero />

      <ModelsBento />
      <Features />

      <Showcase
        eyebrow="ПРИМЕРЫ · Kling 3.0"
        tag="Видео"
        title="Kling 3.0"
        description="Кинематографичная генерация видео — реалистичное движение, динамика кадра и понимание сцены."
        ctaLabel="Попробовать Kling 3.0"
        introBackground="linear-gradient(165deg, #eef2fb, #dfe7fb)"
        columns={3}
        tiles={[
          { cls: "t4", vertical: true, label: "Видео" },
          { cls: "t7" },
          { cls: "t3" },
          { cls: "t8" },
          { cls: "t5", label: "Видео" },
          { cls: "t1" },
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
