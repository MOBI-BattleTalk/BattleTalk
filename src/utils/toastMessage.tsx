import toast from 'react-hot-toast';

/**
 * 상수로 이루어진 토스트 메시지입니다.
 * @typedef {Object} TOAST_MESSAGE
 * @property {string} SIGN_IN_SUCCESS - 로그인 성공 메시지입니다.
 * @property {string} SIGN_IN_ERROR - 로그인 실패 메시지입니다.
 * @property {string} SIGN_UP_SUCCESS - 회원가입 성공 메시지입니다.
 * @property {string} SIGN_UP_ERROR - 회원가입 실패 메시지입니다.
 * @property {string} COMMENT_SUCCESS - 댓글 작성 성공 메세지입니다.
 * @property {string} COMMENT_ERROR - 댓글 작성 실패 메세지입니다.
 * @property {string} CHANGE_NICKNAME_SUCCESS - 닉네임 변경 성공 메세지 입니다.
 * @property {string} CHANGE_NICKNAME_ERROR - 닉네임 변경 실패 메세지 입니다.
 */

export enum TOAST_MESSAGE {
  SIGN_IN_SUCCESS = '로그인 성공!',
  SIGN_IN_ERROR = '로그인 실패',
  SIGN_UP_SUCCESS = '회원가입 성공!',
  SIGN_UP_ERROR = '회원가입 실패',
  COMMENT_SUCCESS = '배틀 참가 성공!',
  COMMENT_ERROR = '배틀 참가 실패',
  CHANGE_NICKNAME_SUCCESS = '닉네임 변경 성공!',
  CHANGE_NICKNAME_ERROR = '닉네임 변경 실패!',
  LOGOUT_SUCCESS = '로그아웃 성공',
  LOGOUT_FAILURE = '로그아웃 실패',
  ALREADY_JOIN_BATTLE = '이미 참가한 배틀입니다.',
  DELETE_BATTLE_SUCCESS = '배틀 삭제 성공!',
  DELETE_BATTLE_FAILURE = '배틀 삭제 실패',
}

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
 * react-hot-toast를 사용하여 성공/실패 결과를 알리는 토스트 메시지 함수입니다.
 * @namespace toastMessage
 * @param {boolean} isStatus - 성공 또는 실패 여부를 나타내는 boolean값 입니다.
 * @param {TOAST_MESSAGE} message - 표시할 토스트 메시지입니다. enum TOAST_MESSAGE에 있는 값만 올 수 있습니다.
 */
const toastMessage = (isStatus: boolean, message: TOAST_MESSAGE) => {
  if (isStatus) {
    return toast.success(message, TOASTER_STYLE);
  } else {
    return toast.error(message, TOASTER_STYLE);
  }
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
 * 3. 버튼을 만들고 이벤트 함수 안에 toastMessage()함수를 실행합니다.
 *      const LoginPage : React.Fc = () => {
 *
 *          return (
 *              <form>
 *                  <Toaster />
 *                  <h1>Login</h1>
 *                  <label>id</label>
 *                  <input />
 *                  <label>password</label>
 *                  <input />
 *                  <button onClick(() => toastMessage(true, TOAST_MESSAGE.SIGN_IN_SUCCESS))>toaster render</button>
 *              </form>
 *          )
 *      }
 *
 * 4. 이벤트 함수가 실행되면 toast 메세지가 나타납니다.
 */
