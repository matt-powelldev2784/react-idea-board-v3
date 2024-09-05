import { IdeaCard } from '../ideaCard/IdeaCard';
import { useSortedIdeas } from './hooks/useSortedIdeas';

export const IdeaCardList = () => {
  const { ideaList } = useSortedIdeas({ sortBy: 'date' });

  return (
    <div className="m-4 mb-24 flex flex-col gap-4">
      {ideaList.length ? (
        <h1 className="text-center text-xl font-bold">Idea List</h1>
      ) : null}

      {ideaList.map((idea) => {
        return <IdeaCard {...idea} key={idea.key} />;
      })}
    </div>
  );
};
