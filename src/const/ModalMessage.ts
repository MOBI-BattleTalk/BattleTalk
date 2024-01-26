type ModalType = 'confirm' | 'alert' | 'delete';

interface ModalObject {
  content: string;
  modalType: ModalType;
}

//자동 완성을 위한 타입
type ModalNamesType =
  | 'DELETE_COMMENT'
  | 'DELETE_BATTLE'
  | 'CONFIRM_BATTLE_JOIN'
  | 'CONFIRM_COMMENT_LOGIN'
  | 'ALERT_BATTLE_DONE'
  | 'ALERT_SUCCESS_BATTLE_UPLOAD'
  | 'ALERT_FAILURE_BATTLE_UPLOAD';

export const MODAL: Record<ModalNamesType, ModalObject> = {
  DELETE_COMMENT: {
    content: '댓글을 정말 삭제하시겠습니까?',
    modalType: 'delete',
  },
  DELETE_BATTLE: {
    content: '배틀을 삭제하시겠습니까?',
    modalType: 'delete',
  },
  CONFIRM_BATTLE_JOIN: {
    content:
      '배틀에 참가하시려면 로그인이 필요합니다.\n로그인 페이지로 이동하시겠습니까?',
    modalType: 'confirm',
  },
  CONFIRM_COMMENT_LOGIN: {
    content:
      '댓글을 작성하시려면 로그인이 필요합니다.\n로그인 페이지로 이동하시겠습니까?',
    modalType: 'confirm',
  },
  ALERT_BATTLE_DONE: {
    content: '이미 참가한 배틀입니다!',
    modalType: 'alert',
  },
  ALERT_SUCCESS_BATTLE_UPLOAD: {
    content: '배틀 업로드 성공!',
    modalType: 'alert',
  },
  ALERT_FAILURE_BATTLE_UPLOAD: {
    content: '배틀 업로드 실패 \n내용을 모두 채워주세요.',
    modalType: 'alert',
  },
};
