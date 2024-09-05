import { IdeaCardList } from './components/IdeaCardList/IdeaCardList';
import { IdeaForm } from './components/ideaForm/IdeaForm';

const App = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <IdeaForm />
      <IdeaCardList />
    </main>
  );
};

export default App;
