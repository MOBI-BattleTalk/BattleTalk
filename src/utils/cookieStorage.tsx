const cookieStorage = {
  setCookie: (key: string, value: string, maxAgeInMinutes: number) => {
    const todayDate = new Date();
    todayDate.setTime(todayDate.getTime() + maxAgeInMinutes * 1000 * 60);
    document.cookie = `${key}=${encodeURIComponent(
      value,
    )}; path=/; expires=${todayDate.toUTCString()};`;
  },

  getCookie: (key: string) => {
    const regex = new RegExp(`${key}=([^;]*)`);
    const match = regex.exec(document.cookie);
    return match ? decodeURIComponent(match[1]) : null;
  },

  hasCookie: (key: string) => {
    return !!cookieStorage.getCookie(key);
  },

  deleteCookie: (name: string) => {
    document.cookie =
      name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  },
};

export default cookieStorage;
