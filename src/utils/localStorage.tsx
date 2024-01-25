/**
 * localStorage를 사용하는 로직을 담았습니다.
 * */

const LocalStorage = {
  /**
   * @param key 쿠키의 이름이 되는 키
   * @param data 쿠키에 넣을 데이터
   * */
  setItem: (key: string, data: string) => {
    return localStorage.setItem(key, data);
  },
  /**
   * @param 키를 넣으면 해당 데이터를 파싱해서 가져옵니다.
   * */
  getItem: (name: string) => {
    const data = localStorage.getItem(name)!;
    return JSON.parse(data);
  },
  removeItem: (name: string) => {
    return localStorage.removeItem(name);
  },
};

export default LocalStorage;
