import { appPath } from "@/lib/config";

export function Hero() {
  return (
    <div className="plain-hero">
      <div className="wrap">
        <h1>
          <span className="plain-hero__strong">Все нейросети без VPN.</span>
          <br />
          <span className="plain-hero__soft">Искусство без границ.</span>
        </h1>
        <p className="plain-hero__lede">
          23 модели изображений, видео и аудио в одном месте — российская оплата, кредиты не сгорают.
        </p>
        <div className="plain-hero__ctas">
          <a className="btn btn--primary" href={appPath("/register")}>
            Начать бесплатно
          </a>
          <a className="btn btn--ghost" href={appPath("/billing")}>
            Смотреть цены
          </a>
        </div>
      </div>
    </div>
  );
}
