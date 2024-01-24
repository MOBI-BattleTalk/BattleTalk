/**
 * sessionStorage에서는 유저 정보를 저장합니다.
 * */

const SessionStorage = {
  /**
   * @param key 쿠키의 이름이 되는 키
   * @param data 쿠키에 넣을 데이터
   * */
  setItem: (key: string, data: string) => {
    return sessionStorage.setItem(key, data);
  },
  getItem: (name: string) => {
    return sessionStorage.getItem(name);
  },
  removeItem: (name: string) => {
    return sessionStorage.removeItem(name);
  },
};

export default SessionStorage;
