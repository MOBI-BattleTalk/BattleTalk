import { RefObject, useEffect } from 'react';

/**
 * @description IntersectionObserver를 활용하여 인피니티 스크롤을 구현하는 훅 함수입니다.
 * useInfinityQuery 등과 함께 사용하여 스크롤 이벤트에 따라 데이터를 동적으로 로드할 수 있습니다.
 * @param onIntersect - target 감지 시 실행할 callback 함수
 * @param threshold - IntersectionObserver에서 사용되는 임계점. 1.0이면 root 내에서 target이 100%로 보일 때 callback 실행
 * @param target - 감지 대상 요소의 ref, 예: bottom이라는 ref를 전달
 */

type Props = {
  onIntersect: IntersectionObserverCallback;
  threshold: number;
  target: RefObject<Element>;
};

export const useObserver = ({ target, onIntersect, threshold }: Props) => {
  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    const handleObserver = () => {
      if (target && target.current) {
        //IntersectionObserver : 뷰포트와 타겟 요소 간 교차를 관찰하는 역할
        observer = new IntersectionObserver(onIntersect, { threshold });
        observer.observe(target.current);
      }
    };

    handleObserver(); // 초기 렌더링 시에도 호출

    return () => observer && observer.disconnect();
  }, [target, onIntersect, threshold]);
};
