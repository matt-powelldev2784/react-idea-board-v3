import kidIdeaImage from '../../assets/images/kid_idea.png';
import whiteBinIcon from '../../assets/images/bin_white.png';
import editIcon from '../../assets/images/edit.png';
import { IdeaCardT } from '@/types/IdeaCardT';
import { useState } from 'react';
import * as Yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateIdeaInStorage } from '@/utils/localStorage';
import { format } from 'date-fns';

type Inputs = {
  title: string;
  description: string;
};

export const ideaValidationSchema = Yup.object({
  title: Yup.string()
    .required('Title is required')
    .max(20, 'Title must be 20 characters or less'),
  description: Yup.string()
    .required('Description is required')
    .max(140, 'Description must be 140 characters or less'),
});

export const IdeaCard = ({
  title,
  description,
  lastUpdated,
  id,
}: IdeaCardT) => {
  const [formIsVisible, setFormIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(ideaValidationSchema),
    mode: 'onChange',
    defaultValues: {
      title: title,
      description: description,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newIdea: IdeaCardT = {
      ...data,
      id: id,
      lastUpdated: format(new Date(), 'dd-MM-yy HH:mm:ss'),
    };
    updateIdeaInStorage(newIdea);
    setFormIsVisible((prev) => !prev);
  };

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

      {formIsVisible ? (
        <form onSubmit={handleSubmit(onSubmit)} className="my-4 flexCol">
          <p className="mb-4 text-lg font-bold text-primaryBlue">Update Idea</p>

          <input
            {...register('title', { required: true })}
            placeholder="Title"
            autoFocus
            className="h-10 max-w-md rounded-lg border border-gray-400 px-2 outline-none flexCol focus:border focus:border-primaryBlue"
          />
          <span className="mb-4 min-h-4 text-xs italic text-red-500">
            {errors.title ? errors.title.message : null}
          </span>

          <textarea
            {...register('description', { required: true })}
            className="h-24 max-w-md rounded-lg border border-gray-400 p-2 outline-none flexCol focus:border focus:border-primaryBlue"
            placeholder="Description"
          />
          <span className="mb-4 min-h-4 text-xs italic text-red-500">
            {errors.description ? errors.description.message : null}
          </span>

          <div className="justify-between gap-2 flexRow">
            <button
              className="mb-2 rounded-lg bg-zinc-400 px-8 py-2 font-bold text-white"
              onClick={() => setFormIsVisible((prev) => !prev)}
            >
              Reset
            </button>

            <button
              type="submit"
              className="mb-2 rounded-lg bg-primaryBlue px-8 py-2 font-bold text-white"
              value="Submit"
            >
              Submit
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
};
