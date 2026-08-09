import { appPath } from "@/lib/config";

export function Nav() {
  return (
    <nav className="nav">
      <div className="wrap">
        <div className="nav__brand">
          <span className="nav__brand-mark" /> NeuroHub
        </div>
        <div className="nav__links">
          <a href="#models">Модели</a>
          <a href="#tools">Возможности</a>
          <a href="#apps">Режимы</a>
          <a href={appPath("/billing")}>Цены</a>
          <a href="#faq">Вопросы</a>
        </div>
        <div className="nav__ctas">
          <a className="link" href={appPath("/login")}>
            Войти
          </a>
          <a className="btn btn--dark nav__cta" href={appPath("/register")}>
            Начать бесплатно
          </a>
        </div>
      </div>
    </nav>
  );
}
