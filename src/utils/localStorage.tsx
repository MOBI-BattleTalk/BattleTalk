/**
 * sessionStorage에서는 유저 정보를 저장합니다.
 * */

const LocalStorage = {
  /**
   * @param key 쿠키의 이름이 되는 키
   * @param data 쿠키에 넣을 데이터
   * */
  setItem: (key: string, data: string) => {
    return localStorage.setItem(key, data);
    sessionStorage;
  },
  getItem: (name: string) => {
    return localStorage.getItem(name);
  },
  removeItem: (name: string) => {
    return localStorage.removeItem(name);
  },
};

export default LocalStorage;
