// Пока поддомен app.neurohub.art не привязан в Railway, здесь можно временно
// указать текущий адрес основного приложения — после привязки поддомена
// достаточно поменять только переменную окружения, без правки кода.
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.neurohub.art";

export const appPath = (path: string) => `${APP_URL}${path}`;
