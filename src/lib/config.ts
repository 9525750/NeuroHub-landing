// Пока поддомен app.neurohub.art не привязан в Railway, здесь можно временно
// указать текущий адрес основного приложения — после привязки поддомена
// достаточно поменять только переменную окружения, без правки кода.
const rawAppUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.neurohub.art";
// Если в переменной окружения забыли схему (например, вставили просто
// "neurohub-production.up.railway.app" без "https://") — браузер трактует
// такую ссылку как относительный путь от текущего домена, и все внешние
// кнопки на лендинге молча ломаются. Подстраховываемся здесь.
export const APP_URL = /^https?:\/\//.test(rawAppUrl) ? rawAppUrl : `https://${rawAppUrl}`;

export const appPath = (path: string) => `${APP_URL}${path}`;
