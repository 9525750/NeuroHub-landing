const ITEMS = [
  { role: "Дизайнер", avatar: "av1" },
  { role: "Маркетолог", avatar: "av2" },
  { role: "Контент-мейкер", avatar: "av3" },
  { role: "Владелец бизнеса", avatar: "av4" },
];

export function Testimonials() {
  return (
    <div className="band band--alt">
      <div className="wrap">
        <div className="sec-eyebrow">
          <b>V — Голоса пользователей</b>
        </div>
        <div className="testi-head">
          <h2>Отзывы</h2>
          <p>Что говорят те, кто уже пользуется NeuroHub</p>
        </div>
        <div className="testi-note-wrap">
          <span className="testi-note">⚠ Место под реальные отзывы — сейчас здесь пример вёрстки, не настоящие пользователи</span>
        </div>
        <div className="testi-row" style={{ marginTop: 28 }}>
          {ITEMS.map((item) => (
            <div key={item.role} className="testi-card">
              <div className="testi-card__top">
                <span className={`testi-avatar ${item.avatar}`} />
                <div>
                  <b>{item.role}</b>
                  <span className="role">Пример роли</span>
                </div>
              </div>
              <p>«Текст отзыва появится здесь, когда наберём первые реальные впечатления пользователей.»</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
