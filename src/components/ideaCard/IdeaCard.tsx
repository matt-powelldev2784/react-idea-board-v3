import kidIdeaImage from '../../assets/images/kid_idea.png';

export const IdeaCard = () => {
  return (
    <div className="flex w-full max-w-[800px] flex-col items-center overflow-hidden rounded-xl border border-gray-300">
      <div className="h-full w-full bg-pink-gradient flexRow">
        <img src={kidIdeaImage} alt="kid_idea" className="h-40" />
      </div>
      <div className="p-4">
        <h1 className="font-bold">Idea Title</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p className="mt-2 text-xs">Last Updated 24/09/24 14:00</p>
      </div>
    </div>
  );
};
