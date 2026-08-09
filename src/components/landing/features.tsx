const ICONS = {
  credits: <path d="M12 2v20M2 12h20" />,
  history: <path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5" />,
  motion: <path d="M5 12h14M13 5l7 7-7 7" />,
  upscale: <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />,
  fast: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>,
};

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="feat__icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        {children}
      </svg>
    </div>
  );
}

export function Features() {
  return (
    <div className="band band--alt" id="tools">
      <div className="wrap">
        <div className="sec-eyebrow">
          <b>II — Всё нужное для генерации</b>
        </div>
        <div className="feat-grid">
          <div className="feat-lead">
            <span className="tag">Уже работает</span>
            <h4>Референсы и правки</h4>
            <p>Загружайте свои фото — модель учтёт их стиль, лицо или композицию. Работает в разделах «Изображения» и «Видео».</p>
          </div>
          <div className="feat">
            <Icon>{ICONS.credits}</Icon>
            <h4>Кредиты, не подписка</h4>
            <p>Списываются только за то, что вы сгенерировали. Не сгорают.</p>
          </div>
          <div className="feat">
            <Icon>{ICONS.history}</Icon>
            <h4>История всегда под рукой</h4>
            <p>Каждая генерация сохраняется — скачивайте или повторяйте с теми же параметрами.</p>
          </div>
          <div className="feat">
            <Icon>{ICONS.motion}</Icon>
            <h4>Режим «Движение»</h4>
            <p>Оживите фотографию — Kling и WAN превращают кадр в видео.</p>
          </div>
          <div className="feat">
            <Icon>{ICONS.upscale}</Icon>
            <h4>Апскейл</h4>
            <p>Увеличивайте разрешение готовых изображений без потери деталей.</p>
          </div>
          <div className="feat">
            <Icon>{ICONS.fast}</Icon>
            <h4>Быстрый результат</h4>
            <p>Статус обновляется сам — результат приходит за секунды-минуты.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
