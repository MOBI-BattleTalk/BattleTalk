import BattleApi from '@/apis/post';
import { BATTLE_QUERY_KEY } from '@/const/queryKey';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { useObserver } from '@/hooks/useObserver.tsx';
import MainBattleCard from '@/pages/MainPage/components/MainBattleCard.tsx';
import { GetBattleInfoType } from '@/types/postType.ts';

const MainPage = () => {
  const bottom = useRef(null);
  const {
    data: battleData,
    fetchNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: [BATTLE_QUERY_KEY.BATTLE_LIST],
    queryFn: async ({ pageParam }) => {
      return await BattleApi.getBattleInfo(pageParam);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const page = lastPage.pageNation.current;
      if (lastPage.pageNation.total === page) return;
      return page + 1;
    },
  });
  const onIntersect = ([entry]: IntersectionObserverEntry[]) =>
    entry.isIntersecting && fetchNextPage();

  useObserver({
    target: bottom,
    onIntersect,
    threshold: 0.5,
  });

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
      </div>
    )
  );
};

export default MainPage;
