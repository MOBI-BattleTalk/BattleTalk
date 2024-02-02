import { STORAGE_KEYS } from '@/const/Keys';
import { StorageUserType } from '@/types/userType';
import LocalStorage from '@/utils/localStorage';
import { atom } from 'recoil';

const userInfo = LocalStorage.getItem(STORAGE_KEYS.USER_INFO);

export const userInfoAtom = atom<StorageUserType | null>({
  key: 'userInfo',
  default: userInfo,
});
