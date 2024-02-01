import DetailBattleCard from '@/pages/DetailPage/components/DetailBattleCard.tsx';
import CommentList from '@/pages/DetailPage/components/CommentList.tsx';
import { useQuery } from '@tanstack/react-query';
import BattleApi from '@/apis/post';
import { BATTLE_QUERY_KEY } from '@/const/queryKey';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '@/atom/user.ts';

const DetailPage = () => {
  // 현재 상세페이지에  id
  const { id: battlePostId } = useParams();
  const userInfo = useRecoilValue(userInfoAtom);

  console.log('유저아ㅣ디', userInfo?.userId);

  // 배틀 상세 정보
  const { data: detailBattleData } = useQuery({
    queryKey: [BATTLE_QUERY_KEY.DETAIL_BATTLE_DATA, battlePostId],
    queryFn: () => BattleApi.getDetailBattleInfo(battlePostId!),
  });

  // 댓글 정보
  const { data: commentList } = useQuery({
    queryKey: [BATTLE_QUERY_KEY.COMMENT_LIST, battlePostId],
    queryFn: BattleApi.getComment,
  });

  const commentListArr = commentList && Object.values(commentList).slice(0, -1);
  const postCommentListArr =
    commentListArr &&
    commentListArr.filter((comment) => comment.data.parentId === battlePostId);

  //내 댓글이 이미 존재하는지 여부
  const hasMyComment = postCommentListArr?.some(
    (comment) => comment.data.userId === userInfo?.userId,
  );

  return (
    <div>
      {detailBattleData && (
        <DetailBattleCard
          post={detailBattleData}
          hasMyComment={hasMyComment!}
        />
      )}
      <div className="mb-[60px]">
        {postCommentListArr && (
          <CommentList
            postCommentListArr={postCommentListArr!}
            battlePostId={battlePostId}
          />
        )}
      </div>
    </div>
  );
};

export default DetailPage;
