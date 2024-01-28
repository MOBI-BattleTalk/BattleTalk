import toast from 'react-hot-toast';

/**
 * 상수로 이루어진 토스트 메시지입니다.
 * @typedef {Object} TOAST_MESSAGE
 * @property {string} SIGN_IN_SUCCESS - 로그인 성공 메시지입니다.
 * @property {string} SIGN_IN_ERROR - 로그인 실패 메시지입니다.
 * @property {string} SIGN_UP_SUCCESS - 회원가입 성공 메시지입니다.
 * @property {string} SIGN_UP_ERROR - 회원가입 실패 메시지입니다.
 */
const TOAST_MESSAGE = {
  SIGN_IN_SUCCESS: '로그인 성공!',
  SIGN_IN_ERROR: '로그인 실패',
  SIGN_UP_SUCCESS: '회원가입 성공!',
  SIGN_UP_ERROR: '회원가입 실패',
  COMMENT_SUCCESS: '배틀 참가 성공!',
  COMMENT_FAILURE: '배틀 참가 실패',
  CHANGE_NICKNAME_SUCCESS: '닉네임 변경 성공!',
} as const;

/**
 * 토스트 스타일을 지정한 상수입니다.
 * @typedef {Object} TOASTER_STYLE
 * @property {Object} style - 토스트의 스타일을 정의하는 객체입니다.
 * @property {string} style.fontSize - 토스트의 글꼴 크기입니다.
 * @property {string} style.fontWeight - 토스트의 글꼴 두께입니다.
 * @property {string} style.color - 토스트 텍스트의 색상입니다.
 * @property {string} style.backgroundColor - 토스트의 배경색입니다.
 */
const TOASTER_STYLE = {
  style: {
    fontSize: '20px',
    fontWeight: 600,
    color: '#fff',
    backgroundColor: '#8162d9',
  },
} as const;

/**
 * react-hot-toast를 사용하여 결과를 알리는 토스트 메시지 함수를 담은 객체입니다.
 * @namespace toastMessage
 * @property {Function} signInSuccessNotify - 로그인 성공 메시지를 알리는 함수입니다.
 * @property {Function} signInErrorNotify - 로그인 실패 메시지를 알리는 함수입니다.
 * @property {Function} signUpSuccessNotify - 회원가입 성공 메시지를 알리는 함수입니다.
 * @property {Function} signUpErrorNotify - 회원가입 실패 메시지를 알리는 함수입니다.
 * @property {Function} battleJoinSuccessNotify - 배틀 참여 성공 메시지를 알리는 함수입니다.
 * @property {Function} battleJoinErrorNotify - 배틀 참여 실패 메시지를 알리는 함수입니다.
 */
const toastMessage = {
  signInSuccessNotify: () => {
    toast.success(TOAST_MESSAGE.SIGN_IN_SUCCESS, TOASTER_STYLE);
  },
  signInErrorNotify: () => {
    toast.error(TOAST_MESSAGE.SIGN_IN_ERROR, TOASTER_STYLE);
  },
  signUpSuccessNotify: () => {
    toast.success(TOAST_MESSAGE.SIGN_UP_SUCCESS, TOASTER_STYLE);
  },
  signUpErrorNotify: () => {
    toast.error(TOAST_MESSAGE.SIGN_UP_ERROR, TOASTER_STYLE);
  },
  commentSuccessNotify: () => {
    toast.success(TOAST_MESSAGE.COMMENT_SUCCESS, TOASTER_STYLE);
  },
  commentFailureNotify: () => {
    toast.error(TOAST_MESSAGE.COMMENT_FAILURE, TOASTER_STYLE);
  },
  changeNicknameSuccessNotify: () => {
    toast.success(TOAST_MESSAGE.CHANGE_NICKNAME_SUCCESS, TOASTER_STYLE);
  },
};

export default toastMessage;

/**
 * 사용 예시 입니다.
 *
 * @example
 *
 * 1. Toaster를 import 합니다.
 *      import { Toaster } from 'react-hot-toast';
 *
 * 2. JSX문에 <Toaster />를 추가합니다.
 *      const HomePage : React.Fc = () => {
 *
 *          return (
 *              <div>
 *                  <h1>HomePage</h1>
 *                  <Toaster />
 *              </div>
 *          )
 *      }
 *
 * 3. 버튼을 만들고 이벤트 함수 안에 toastMessage.signInSuccessNotify()함수를 실행합니다.
 *      const HomePage : React.Fc = () => {
 *
 *          return (
 *              <div>
 *                  <h1>HomePage</h1>
 *                  <Toaster />
 *                  <button onClick(toastMessage.signInSuccessNotify)>toaster render</button>
 *              </div>
 *          )
 *      }
 *
 * 4. 이벤트 함수가 실행되면 toast 메세지가 나타납니다.
 */
