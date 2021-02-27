import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useChallenge } from './Challenge';

interface CountDownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  handleStartCountDown(): void;
  handleResetCountDown(): void;
}

interface CountDownProviderProps {
  children: ReactNode;
}

const ConstCountDownContext = createContext<CountDownContextData>(
  {} as CountDownContextData,
);

export const CountDownProvider = ({ children }: CountDownProviderProps) => {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const { handleStartNewChallenge } = useChallenge();

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const CountdownTimeOut = useRef(0);

  const handleStartCountDown = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleResetCountDown = useCallback(() => {
    clearTimeout(CountdownTimeOut.current);
    setIsActive(false);
    setTime(0.1 * 60);
    setHasFinished(false);
  }, []);

  useEffect(() => {
    if (isActive && time > 0) {
      CountdownTimeOut.current = setTimeout(() => {
        setTime(prevState => prevState - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      handleStartNewChallenge();
    }
  }, [handleStartNewChallenge, isActive, time]);

  return (
    <ConstCountDownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        handleStartCountDown,
        handleResetCountDown,
      }}
    >
      {children}
    </ConstCountDownContext.Provider>
  );
};

export const useCountDown = () => {
  const { ...context } = useContext(ConstCountDownContext);

  return context;
};
