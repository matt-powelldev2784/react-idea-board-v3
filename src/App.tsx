import { IdeaCardList } from './components/IdeaCardList/IdeaCardList';
import { AddIdeaForm } from './components/addIdeaForm/AddIdeaForm';

const App = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <AddIdeaForm />
      <IdeaCardList />
    </main>
  );
};

export default App;
