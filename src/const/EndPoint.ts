/**
 * @description : api에 요청을 보내는 endpoint 주소입니다.
 * 예시 ) '/user/sign-in' => END_POINTS.SIGN_UP
 * 필요한 url 주소를 추가할 수 있습니다.
 * */

export const END_POINTS = {
  POST: '/post',
  COMMENT: '/comment',
  USER_SIGN_UP: '/user/sign-up',
  USER_SIGN_IN: '/user/sign-in',
  USER_SIGN_OUT: '/user/sign-out',
  USER_REFRESH: '/user/refresh',
  UPDATE_PROFILE: '/user/update/profile',
  UPDATE_INFO: '/user/update/info',
  /*프론트 url 주소*/
  CREATE_BATTLE: '/createBattle',
  HOME: '/',
  DETAIL: '/detail',
  LOGIN: '/login',
} as const;
