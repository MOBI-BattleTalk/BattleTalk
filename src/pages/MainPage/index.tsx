import MainBattleCard from '@/pages/MainPage/components/MainBattleCard.tsx';
// import { BattleMockList } from '@/mock/postMock.ts';
import BattleApi from '@/apis/post';
import { useInfiniteQuery } from '@tanstack/react-query';
import { BATTLE_QUERY_KEY } from '@/const/queryKey';
import { END_POINTS } from '@/const/EndPoint';

const MainPage = () => {
  const { data: battleData, fetchNextPage } = useInfiniteQuery({
    queryKey: [BATTLE_QUERY_KEY.BATTLE_LISt],
    queryFn: BattleApi.getBattleInfo,
    // 무한 스크롤 구현을 위한 주석 처리 입니다.
    // queryFn: ({ pageParam = 0 }) => BattleApi.getBattleInfo(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return (
        lastPage.pageNation.current < lastPage.pageNation.end &&
        lastPage.pageNation.current + 1
      );
    },
  });

  const battleList =
    battleData && Object.values(battleData.pages[0]).slice(0, -1);

  return (
    battleList && (
      <div className={'flex gap-[30px] flex-col pb-[50px]'}>
        {battleList.map((post, index) => {
          const createAt = post?.createdAt;
          const {
            nickName,
            profileUrl,
            title,
            blueOptionTitle,
            redOptionTitle,
            blueVoteCount,
            redVoteCount,
            voteTotalCount,
          } = post?.data;
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
