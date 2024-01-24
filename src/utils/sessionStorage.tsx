/**
 * sessionStorage에서는 유저 정보를 저장합니다.
 * */

const SessionStorage = {
  setItem: ({ name, data }: { name: string; data: string }) => {
    return sessionStorage.setItem(name, data);
  },
  getItem: (name: string) => {
    return sessionStorage.getItem(name);
  },
};

export default SessionStorage;
