import { IdeaCard } from './components/ideaCard/IdeaCard';
import { IdeaForm } from './components/ideaForm/IdeaForm';

const App = () => {
  return (
    <main className="flex flex-col justify-center">
      <IdeaForm />
      <IdeaCard />
    </main>
  );
};

export default App;
