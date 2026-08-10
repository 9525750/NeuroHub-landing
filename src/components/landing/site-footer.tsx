import { appPath } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="mark">
              <span /> NeuroHub
            </div>
            <p>Сервис генерации изображений, видео и аудио через ведущие AI-модели. Кредиты вместо подписки, оплата российской картой и СБП.</p>
          </div>
          <div className="foot-col">
            <h5>Продукт</h5>
            <ul>
              <li><a href="#models">Изображения</a></li>
              <li><a href="#models">Видео</a></li>
              <li><a href="#models">Аудио</a></li>
              <li><a href={appPath("/billing")}>Цены</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Модели</h5>
            <ul>
              <li><a href="#models">Nano Banana Pro</a></li>
              <li><a href="#models">Kling 3.0</a></li>
              <li><a href="#models">Veo 3</a></li>
              <li><a href="#models">Suno V4.5</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Аккаунт</h5>
            <ul>
              <li><a href={appPath("/login")}>Вход</a></li>
              <li><a href={appPath("/register")}>Регистрация</a></li>
              <li><a href={appPath("/account")}>Личный кабинет</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Поддержка</h5>
            <ul>
              <li><a href="#faq">Частые вопросы</a></li>
              <li><a href="mailto:support@neurohub.art">support@neurohub.art</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 NeuroHub</span>
          <span>neurohub.art</span>
        </div>
      </div>
    </footer>
  );
}
