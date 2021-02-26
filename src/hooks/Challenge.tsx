import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from 'react';
import challenges from '../../challenges.json';

interface ChallengesProviderProps {
  children: ReactNode;
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

export const ChallengeProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengeComplete, setChallengeComplete] = useState(0);

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
      finalExperience = finalExperience - experienceToNextLevel;
      handleLevelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengeComplete(prevState => prevState + 1);
  }, [activeChallenge]);

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
