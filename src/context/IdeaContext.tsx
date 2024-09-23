import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
} from 'react';
import { IdeaCardT } from '@/types/IdeaCardT';
import { getIdeasFromStorage } from '@/utils/localStorage';
import { sortByDate, sortByTitle } from '@/utils/utils';

interface IdeaContextProps {
  ideaList: IdeaCardT[];
  setSortBy: Dispatch<React.SetStateAction<'title' | 'date'>>;
  setIdeasNeedUpdateCounter: Dispatch<React.SetStateAction<number>>;
}

interface IdeaProviderProps {
  children: ReactNode;
}

const IdeaContext = createContext<IdeaContextProps | undefined>(undefined);

export const IdeaProvider: React.FC<IdeaProviderProps> = ({ children }) => {
  const [ideaList, setIdeaList] = useState<IdeaCardT[]>([]);
  const [sortBy, setSortBy] = useState<'title' | 'date'>('date');
  const [ideasNeedUpdateCounter, setIdeasNeedUpdateCounter] = useState(0);

  useEffect(() => {
    const ideas = getIdeasFromStorage() as IdeaCardT[];

    const sortedIdeas =
      sortBy === 'date' ? sortByDate(ideas) : sortByTitle(ideas);

    setIdeaList(sortedIdeas);
  }, [sortBy, ideasNeedUpdateCounter]);

  return (
    <IdeaContext.Provider
      value={{ ideaList, setSortBy, setIdeasNeedUpdateCounter }}
    >
      {children}
    </IdeaContext.Provider>
  );
};

export const useIdeaContext = () => {
  const context = useContext(IdeaContext);
  if (!context) {
    throw new Error('useIdeaContext must be used within an IdeaProvider');
  }
  return context;
};
