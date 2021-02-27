import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengeComplete: number;
}
interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengeContext {
  level: number;
  activeChallenge: Challenge | null;
  currentExperience: number;
  challengeComplete: number;
  experienceToNextLevel: number;
  handleLevelUp(): void;
  handleStartNewChallenge(): void;
  handleResetActiveChallenge(): void;
  handleCompleteChallenge(): void;
}

const ChallengeContext = createContext<ChallengeContext>(
  {} as ChallengeContext,
);

export const ChallengeProvider = ({
  children,
  ...rest
}: ChallengesProviderProps) => {
  const [level, setLevel] = useState(rest.level ?? 0);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0,
  );
  const [challengeComplete, setChallengeComplete] = useState(
    rest.challengeComplete ?? 0,
  );

  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(
    null,
  );

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const handleLevelUp = useCallback(() => {
    setLevel(prevState => prevState + 1);
  }, []);

  const handleStartNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge as Challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}xp!`,
      });
    }
  }, []);

  const handleResetActiveChallenge = useCallback(() => {
    setActiveChallenge(null);
  }, []);

  const handleCompleteChallenge = useCallback(() => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      handleLevelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengeComplete(prevState => prevState + 1);
  }, [
    activeChallenge,
    currentExperience,
    experienceToNextLevel,
    handleLevelUp,
  ]);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengeComplete', String(challengeComplete));
  }, [level, currentExperience, challengeComplete]);

  return (
    <ChallengeContext.Provider
      value={{
        challengeComplete,
        currentExperience,
        activeChallenge,
        experienceToNextLevel,
        level,
        handleLevelUp,
        handleStartNewChallenge,
        handleResetActiveChallenge,
        handleCompleteChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};

export const useChallenge = () => {
  const { ...context } = useContext(ChallengeContext);

  return context;
};
