const ITEMS = [
  { title: "Все модели ИИ", text: "Nano Banana Pro, Kling 3.0, Veo 3, Suno и другие — без привязки к конкретной модели." },
  { title: "Мгновенное зачисление", text: "Кредиты появляются на балансе сразу после подтверждения оплаты — обычно за секунды." },
  { title: "Новые модели без доплат", text: "Мы добавляем модели в каталог по мере выхода — ваши кредиты работают и с ними." },
  { title: "Результаты — ваши", text: "Файлы сохраняются в истории и доступны для скачивания в любой момент." },
  { title: "Без подписки", text: "Разовая покупка. Повторного списания не будет, пока вы сами не купите ещё один пакет." },
];

export function Included() {
  return (
    <div className="band">
      <div className="wrap">
        <div className="incl-head">
          <h2>Всё включено</h2>
          <p>Любой пакет кредитов можно использовать со всеми моделями.</p>
        </div>
        <div className="incl-grid">
          {ITEMS.map((item) => (
            <div key={item.title} className="incl-card">
              <span className="spark-sm">✦</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
