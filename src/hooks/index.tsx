import { ReactNode } from 'react';
import { ChallengeProvider } from './Challenge';
import { CountDownProvider } from './CountDown';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ChallengeProvider>
      <CountDownProvider>{children}</CountDownProvider>
    </ChallengeProvider>
  );
};

export default AppProvider;
