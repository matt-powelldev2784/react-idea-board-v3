import { IdeaCardT } from '@/types/IdeaCardT';

export const addIdeaToStorage = (idea: IdeaCardT) => {
  const ideas = getIdeasFromStorage();
  ideas.push(idea);
  localStorage.setItem('ideas', JSON.stringify(ideas));
};

export const getIdeasFromStorage = (): IdeaCardT[] => {
  const ideas = localStorage.getItem('ideas');
  const parsedIdeas = ideas ? JSON.parse(ideas) : [];
  return parsedIdeas;
};

export const updateIdeaInStorage = (idea: IdeaCardT) => {
  const ideas = getIdeasFromStorage();
  const updatedIdeas = ideas.map((storedIdea) =>
    storedIdea.id === idea.id ? idea : storedIdea,
  );
  localStorage.setItem('ideas', JSON.stringify(updatedIdeas));
};

export const removeIdeaFromStorage = (id: string) => {
  const ideas = getIdeasFromStorage();
  const filteredIdeas = ideas.filter((idea) => idea.id !== id);
  localStorage.setItem('ideas', JSON.stringify(filteredIdeas));
};
