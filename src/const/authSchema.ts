import {ValidationRule} from 'react-hook-form';

/**
 * required : 해당 인풋 값이 필수 인지를 알려주는 속성
 * pattern : 해당 인풋 값에서 검사될 정규 표현식등을 넣는 속성입니다.
 */
export type RegisterOptionType = {
  required: boolean;
  pattern?: ValidationRule<RegExp> | undefined;
};

/**
 * label : 해당 인풋의 라벨입니다.
 * registerOption? : 인풋에 들어갈 유효성 검사입니다.
 */
export type SignInRegisterArrType = {
  label: 'userId' | 'password';
  name: string;
  registerOption?: RegisterOptionType | undefined;
};

/**
 * @description 로그인 폼
 * 아이디, 비밀번호를 모두 필수 속성으로 지정했습니다.
 */
export const loginSchema: SignInRegisterArrType[] = [
  {
    label: 'userId',
    name: '아이디',
    registerOption: {
      required: true,
    },
  },
  {
    label: 'password',
    name: '비밀번호',
    registerOption: {
      required: true,
    },
  },
];

export type SignUpRegisterArrType = {
  label: 'userId' | 'password' | 'nickname';
  name: string;
  registerOption?: RegisterOptionType;
};

/**
 * @description 회원가입 폼
 * 아이디 : 4자 10자 사이
 * 비밀번호 : 영어, 숫자, 특수문자 조합의 6자 이상
 * 닉네임 : 2자에서 10자 사이
 */
export const signUpSchema: SignUpRegisterArrType[] = [
  {
    label: 'userId',
    name: '아이디',
    registerOption: {
      required: true,
      pattern: {
        value: /^.{4,9}$/,
        message: '4자에서 10자 사이로 적어주세요.',
      },
    },
  },
  {
    label: 'password',
    name: '비밀번호',
    registerOption: {
      required: true,
      pattern: {
        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,20}$/,
        message: '영어, 숫자, 특수문자 조합의 6자 이상으로 적어주세요.',
      },
    },
  },
  {
    label: 'nickname',
    name: '닉네임',
    registerOption: {
      required: true,
      pattern: {
        value: /^.{2,9}$/,
        message: '2자에서 10자 사이로 적어주세요.',
      },
    },
  },
];
