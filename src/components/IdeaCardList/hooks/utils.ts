import { IdeaCardT } from '@/types/IdeaCardT';
import { parse } from 'date-fns';

// sort by date
export const sortByDate = (ideas: IdeaCardT[]) => {
  return ideas.sort((a, b) => {
    return (
      parseUpdatedDate(b.lastUpdated).getTime() -
      parseUpdatedDate(a.lastUpdated).getTime()
    );
  });
};

//sort by title
export const sortByTitle = (ideas: IdeaCardT[]) => {
  return ideas.sort((a, b) => a.title.localeCompare(b.title));
};

///parse date
export const parseUpdatedDate = (dateString: string): Date => {
  return parse(dateString, 'dd-MM-yy HH:mm', new Date());
};
