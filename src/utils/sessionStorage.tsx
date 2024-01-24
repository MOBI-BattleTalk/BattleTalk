const SessionStorage = {
  setItem: ({ name, data }: { name: string; data: string }) => {
    return sessionStorage.setItem(name, data);
  },
  getItem: (name: string) => {
    return sessionStorage.getItem(name);
  },
};

export default SessionStorage;
