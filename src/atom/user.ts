import LocalStorage from '@/utils/localStorage';
import { atom } from 'recoil';

const nickName = LocalStorage.getItem('nickName');
//예시
export const userNickNameAtom = atom({
  key: 'userNickName',
  default: nickName,
});
