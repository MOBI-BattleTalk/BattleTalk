import { RefObject, useEffect } from 'react';

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
        observer = new IntersectionObserver(onIntersect, { threshold });
        observer.observe(target.current);
      }
    };

    handleObserver(); // 초기 렌더링 시에도 호출

    return () => observer && observer.disconnect();
  }, [target, onIntersect, threshold]);
};
