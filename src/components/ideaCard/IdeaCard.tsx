import kidIdeaImage from '../../assets/images/kid_idea.png';
import whiteBinIcon from '../../assets/images/bin_white.png';
import editIcon from '../../assets/images/edit.png';

export const IdeaCard = () => {
  return (
    <div className="flex w-full max-w-[800px] flex-col items-center overflow-hidden rounded-xl border border-gray-300">
      <div className="relative h-full w-full bg-pink-gradient flexRow">
        <img
          src={kidIdeaImage}
          alt="child with light bulb"
          className="max-w-[250px] object-contain"
        />
        <img
          src={whiteBinIcon}
          alt="white bin icon"
          className="absolute right-4 top-3 h-[27px] w-[20px] cursor-pointer"
        />
      </div>

      <div className="relative p-4">
        <img
          src={editIcon}
          alt="pen icon"
          className="absolute bottom-3 right-4 h-[35px] w-[35px] cursor-pointer"
        />

        <h1 className="font-bold">Idea Title</h1>

        <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p className="mt-6 text-xs">Last Updated 24/09/24 14:00</p>
      </div>
    </div>
  );
};
