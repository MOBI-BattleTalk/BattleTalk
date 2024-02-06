import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import BattleApi from '@/apis/post';
import { BATTLE_QUERY_KEY } from '@/const/queryKey';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '@/atom/user.ts';
import { useObserver } from '@/hooks/useObserver.tsx';
import { useRef } from 'react';
import DetailBattleCard from '@/pages/DetailPage/components/DetailBattleCard.tsx';
import CommentList from '@/pages/DetailPage/components/CommentList.tsx';
import { CommentListType } from '@/types/postType.ts';

const DetailPage = () => {
  const bottom = useRef(null);
  // 현재 상세페이지에  id
  const { id: battlePostId } = useParams();
  const userInfo = useRecoilValue(userInfoAtom);
  // 배틀 상세 정보
  const { data: detailBattleData } = useQuery({
    queryKey: [BATTLE_QUERY_KEY.DETAIL_BATTLE_DATA, battlePostId],
    queryFn: () => BattleApi.getDetailBattleInfo(battlePostId!),
  });

  //댓글을 인피니티 스크롤로 불러옵니다.
  const {
    data: commentList,
    fetchNextPage, //다음 페이지를 불러오는 함수
    isSuccess: isCommentSuccess,
  } = useInfiniteQuery({
    queryKey: [BATTLE_QUERY_KEY.COMMENT_LIST, battlePostId],
    queryFn: async ({ pageParam }) => {
      return await BattleApi.getComment({ pageParam, parentId: battlePostId! });
    },
    initialPageParam: 1,
    //다음 페이지를 불러옵니다.
    getNextPageParam: (lastPage) => {
      const page = lastPage.pageNation.current;
      if (lastPage.pageNation.total === page) return;
      return page + 1;
    },
  });

  //useObserver로 넘겨줄 콜백, entry로 넘어오는 것이 isIntersecting이면 fetchNextPage가 실행
  const onIntersect = ([entry]: IntersectionObserverEntry[]) =>
    entry.isIntersecting && fetchNextPage();

  //useObserver 훅함수
  useObserver({
    target: bottom,
    onIntersect,
    threshold: 0.5,
  });

  //댓글 데이터를 가져와서 가공후 한번에 댓글 배열(commentListArr)에 넣었습니다.
  const commentListArr: CommentListType[] = [];
  commentList?.pages.map((page) => {
    console.log('page', page);
    const pageResult = Object.values(page).slice(0, -1) as CommentListType[];
    commentListArr.push(...pageResult);
  });

  //내 댓글이 이미 존재하는지 여부
  const hasMyComment = commentListArr?.some(
    (comment) => comment.data.userId === userInfo?.userId,
  );

  //내 포스트 인지 여부
  const isMyPost = detailBattleData?.data.data.userId === userInfo?.userId;

  return (
    <div>
      {detailBattleData && (
        <DetailBattleCard
          post={detailBattleData}
          hasMyComment={hasMyComment!}
          isMyPost={isMyPost}
        />
      )}
      <div className="mb-[60px]">
        {commentListArr && isCommentSuccess && (
          <CommentList
            postCommentListArr={commentListArr!}
            battlePostId={battlePostId}
          />
        )}
      </div>
      <div ref={bottom}></div>
    </div>
  );
};

export default DetailPage;
