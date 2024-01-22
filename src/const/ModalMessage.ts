export type ModalType = 'confirm' | 'alert' | 'delete';

interface ModalObject {
  title: string;
  content: string;
  modalType: ModalType;
}

export const MODAL: Record<string, ModalObject> = {
  DELETE_COMMENT: {
    title: '댓글 삭제',
    content: '댓글을 정말 삭제하시겠습니까?',
    modalType: 'delete',
  },
  DELETE_BATTLE: {
    title: '배틀 삭제하기',
    content: '배틀을 삭제하시겠습니까?',
    modalType: 'delete',
  },
  CONFIRM_BATTLE_JOIN: {
    title: '배틀 참가하기',
    content:
      '배틀에 참가하시려면 로그인이 필요합니다.\n로그인 페이지로 이동하시겠습니까?',
    modalType: 'confirm',
  },
  CONFIRM_COMMENT_LOGIN: {
    title: '댓글 작성하기',
    content:
      '댓글을 작성하시려면 로그인이 필요합니다.\n로그인 페이지로 이동하시겠습니까?',
    modalType: 'confirm',
  },
  ALERT_BATTLE_DONE: {
    title: '배틀 참여하기',
    content: '이미 참가한 배틀입니다!',
    modalType: 'confirm',
  },
  ALERT_BATTLE_UPLOAD: {
    title: '배틀 참여하기',
    content: '이미 참가한 배틀입니다!',
    modalType: 'confirm',
  },
};
