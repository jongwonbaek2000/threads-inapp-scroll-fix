// useThreadsScrollFix.jsx
import { useEffect } from 'react';

export const useThreadsScrollFix = () => {
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isThreads =
      ua.includes('threads') ||
      ua.includes('barcelona') ||
      document.referrer.includes('threads.net');

    if (!isThreads) return;

    const keepScrollOffset = () => {
      if (window.scrollY === 0) {
        window.scrollTo(0, 1);
      }
    };

    // 초기 진입 시 한 번 밀어주기
    setTimeout(keepScrollOffset, 100);

    // 다시 0이 되면 즉시 복구
    window.addEventListener('scroll', keepScrollOffset);

    // Threads 제스처 충돌 방지
    document.body.style.touchAction = 'pan-y';
    document.documentElement.style.touchAction = 'pan-y';

    return () => {
      window.removeEventListener('scroll', keepScrollOffset);
      document.body.style.touchAction = '';
      document.documentElement.style.touchAction = '';
    };
  }, []);
};
