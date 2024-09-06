import kidIdeaImage from '../../assets/images/kid_idea.png';
import whiteBinIcon from '../../assets/images/bin_white.png';
import editIcon from '../../assets/images/edit.png';
import { IdeaCardT } from '@/types/IdeaCardT';
import { useState } from 'react';
import { EditIdeaForm } from '../editIdeaForm/EditIdeaForm';

export const IdeaCard = ({ title, description, lastUpdated }: IdeaCardT) => {
  const [formIsVisible, setFormIsVisible] = useState(false);

  return (
    <div className="flex flex-col items-center overflow-hidden rounded-xl border border-gray-300 sm:w-full md:w-[800px]">
      <div className="relative h-full w-full bg-pink-gradient flexRow ">
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

      {!formIsVisible ? (
        <div className="relative w-full p-4">
          <img
            src={editIcon}
            alt="pen icon"
            className="absolute bottom-3 right-4 h-[35px] w-[35px] cursor-pointer"
            onClick={() => setFormIsVisible((prev) => !prev)}
          />

          <h1 className="font-bold">{title}</h1>

          <p className="">{description}</p>
          <p className="mt-6 text-xs text-gray-500">
            Last Updated: {lastUpdated}
          </p>
        </div>
      ) : null}

      {formIsVisible ? <EditIdeaForm /> : null}
    </div>
  );
};
