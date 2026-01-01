// App.tsx
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { Suspense } from 'react';
import { useThreadsScrollFix } from './customHooks/useThreadsScrollFix';
import AppContent from './AppContent';
import GlobalStyle from './GlobalStyle';

function App() {
  // ✅ Threads 인앱 브라우저 스크롤 닫힘 방지
  useThreadsScrollFix();

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Suspense fallback={<div>Loading...</div>}>
          <AppContent />
        </Suspense>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
