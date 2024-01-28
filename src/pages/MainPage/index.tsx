import MainBattleCard from '@/pages/MainPage/components/MainBattleCard.tsx';
// import { BattleMockList } from '@/mock/postMock.ts';
import BattleApi from '@/apis/post';
import { useQuery } from '@tanstack/react-query';
import { BATTLE_QUERY_KEY } from '@/const/queryKey';

const MainPage = () => {
  const { data: battleData } = useQuery({
    queryKey: [BATTLE_QUERY_KEY.BATTLE_LISt],
    queryFn: () => BattleApi.getBattleInfo(),
  });

  const battleList = battleData && Object.values(battleData).slice(0, -1);

  return (
    battleList && (
      <div className={'flex gap-[30px] flex-col pb-[50px]'}>
        {battleList.map((post, index) => {
          console.log({ post });
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
