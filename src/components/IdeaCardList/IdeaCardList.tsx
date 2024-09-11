import { useState } from 'react';
import { IdeaCard } from '../ideaCard/IdeaCard';
import { useSortedIdeas } from './hooks/useSortedIdeas';

export const IdeaCardList = () => {
  const [sortBy, setSortBy] = useState<'title' | 'date'>('date');

  const { ideaList } = useSortedIdeas({ sortBy });

  return (
    <section className="m-4 mb-24 flex flex-col gap-4">
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setSortBy('date')}
          className="rounded-lg bg-primaryBlue px-4 py-2 text-white"
        >
          Sort by Date
        </button>

        <button
          onClick={() => setSortBy('title')}
          className="rounded-lg bg-primaryBlue px-4 py-2 text-white"
        >
          Sort by Title
        </button>
      </div>

      {ideaList.length ? (
        <h1 className="text-center text-xl font-bold">Idea List</h1>
      ) : null}

      {ideaList.map((idea) => {
        return <IdeaCard {...idea} key={idea.id} />;
      })}
    </section>
  );
};
