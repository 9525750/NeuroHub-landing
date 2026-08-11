import "./landing.css";

import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { Showcase } from "@/components/landing/showcase";
import { ModelsBento } from "@/components/landing/models-bento";
import { Features } from "@/components/landing/features";
import { Included } from "@/components/landing/included";
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
        columns={3}
        tiles={[
          { cls: "t4", vertical: true, label: "Видео", video: "/kling/video-2.mp4" },
          { cls: "t7", image: "/kling/spaceship-interior.webp" },
          { cls: "t3", image: "/kling/rain-portrait.webp" },
          { cls: "t8", image: "/kling/cartoon-boy.webp" },
          { cls: "t5", label: "Видео", video: "/kling/video-1.mp4" },
          { cls: "t1", image: "/kling/spaceship-fleet.webp" },
          { cls: "t6", image: "/kling/dragon.webp" },
        ]}
      />

      <Included />
      {/* Testimonials выключен — блок был заполнен примерами, не настоящими
          отзывами пользователей. Компонент оставлен в кодовой базе, чтобы
          включить его обратно, когда появятся реальные отзывы. */}
      <Faq />
      <SiteFooter />
    </div>
  );
}
