import { useState } from 'react';
import { IdeaCard } from '../ideaCard/IdeaCard';
import { useSortedIdeas } from './hooks/useSortedIdeas';

export const IdeaCardList = () => {
  const [sortBy, setSortBy] = useState<'title' | 'date'>('date');

  const { ideaList } = useSortedIdeas({ sortBy });

  return (
    <section className="m-4 mb-24 flex w-full gap-4  p-4 flexCol">
      {ideaList.length ? (
        <div>
          <h1 className="mb-2 text-center text-xl font-bold">Idea List</h1>

          <div className="mb-4 flex justify-center gap-4">
            <button
              onClick={() => setSortBy('date')}
              className="rounded-lg bg-lightBlue  px-4 py-2 text-white"
            >
              Sort by Date
            </button>

            <button
              onClick={() => setSortBy('title')}
              className="rounded-lg bg-lightBlue px-4 py-2 text-white"
            >
              Sort by Title
            </button>
          </div>
        </div>
      ) : null}

      {ideaList.map((idea) => {
        return <IdeaCard {...idea} key={idea.id} />;
      })}
    </section>
  );
};
