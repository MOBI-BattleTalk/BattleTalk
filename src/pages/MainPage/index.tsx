import BattleApi from '@/apis/post';
import { BATTLE_QUERY_KEY } from '@/const/queryKey';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { useObserver } from '@/hooks/useObserver.tsx';
import MainBattleCard from '@/pages/MainPage/components/MainBattleCard.tsx';
import { GetBattleInfoType } from '@/types/postType.ts';

const MainPage = () => {
  const bottom = useRef(null);

  //인피니티 스크롤 로직
  const {
    data: battleData,
    fetchNextPage, //다음 페이지를 불러오는 함수
    status,
  } = useInfiniteQuery({
    queryKey: [BATTLE_QUERY_KEY.BATTLE_LIST],
    queryFn: async ({ pageParam }) => {
      return await BattleApi.getBattleInfo(pageParam);
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

  //받아온 데이를 페이지 별로 mapping 하여 뒤의 pagination 객체 데이터를 없애준 다음
  //battleList 라는 총 데이터 배열에 넣습니다. 이것을 렌더링 합니다.
  const battleList: GetBattleInfoType[] = [];
  battleData?.pages.map((page) => {
    const pageResult = Object.values(page).slice(0, -1) as GetBattleInfoType[];
    battleList.push(...pageResult);
  });

  return (
    status === 'success' &&
    battleList && (
      <div className={'flex gap-[30px] flex-col pb-[100px]'}>
        {battleList.map((post: GetBattleInfoType, index) => {
          const createAt = post.createdAt;
          const {
            nickName,
            profileUrl,
            title,
            blueOptionTitle,
            redOptionTitle,
            blueVoteCount,
            redVoteCount,
            voteTotalCount,
          } = post.data;
          const blueOptionImg = post.dataImage[0].url;
          const redOptionImg = post.dataImage[1].url;
          const postId = post.id;
          return (
            <MainBattleCard
              key={index}
              createAt={createAt}
              nickName={nickName}
              profileUrl={profileUrl}
              title={title}
              blueOptionTitle={blueOptionTitle}
              redOptionTitle={redOptionTitle}
              blueVoteCount={blueVoteCount}
              redVoteCount={redVoteCount}
              voteTotalCount={voteTotalCount}
              blueOptionImg={blueOptionImg}
              redOptionImg={redOptionImg}
              postId={postId}
            />
          );
        })}
        {/*인피니티 스크롤을 위한 옵저버*/}
        <div ref={bottom}></div>
      </div>
    )
  );
};

export default MainPage;
