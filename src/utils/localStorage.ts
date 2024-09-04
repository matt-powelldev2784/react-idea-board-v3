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
    storedIdea.key === idea.key ? idea : storedIdea,
  );
  localStorage.setItem('ideas', JSON.stringify(updatedIdeas));
};

export const removeIdeaFromStorage = (key: string) => {
  const ideas = getIdeasFromStorage();
  const filteredIdeas = ideas.filter((idea) => idea.key !== key);
  localStorage.setItem('ideas', JSON.stringify(filteredIdeas));
};
