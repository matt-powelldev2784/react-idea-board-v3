import { useEffect, useState } from 'react';
import { IdeaCardT } from '@/types/IdeaCardT';
import { getIdeasFromStorage } from '@/utils/localStorage';
import { sortByDate, sortByTitle } from './utils';

interface useSortedIdeasProps {
  sortBy: 'title' | 'date';
}

export const useSortedIdeas = ({ sortBy }: useSortedIdeasProps) => {
  const [ideaList, setIdeaList] = useState<IdeaCardT[]>([]);

  useEffect(() => {
    const ideas = getIdeasFromStorage() as IdeaCardT[];

    const sortedIdeas =
      sortBy === 'date' ? sortByDate(ideas) : sortByTitle(ideas);

    setIdeaList(sortedIdeas);
  }, [sortBy]);

  return { ideaList };
};
