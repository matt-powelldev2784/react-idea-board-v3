import { SubmitHandler, useForm } from 'react-hook-form';
import lightBulbImage from '../../assets/images/light_bulb_outline.svg';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addIdeaToStorage } from '@/utils/localStorage';
import { IdeaCardT } from '@/types/IdeaCardT';
import { format } from 'date-fns';
import { useIdeaContext } from '@/context/IdeaContext';

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

export const AddIdeaForm = () => {
  const { setIdeasNeedUpdateCounter } = useIdeaContext();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: yupResolver(ideaValidationSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newIdea: IdeaCardT = {
      ...data,
      id: Date.now().toString(),
      lastUpdated: format(new Date(), 'dd-MM-yy HH:mm:ss'),
    };
    addIdeaToStorage(newIdea);
    setIdeasNeedUpdateCounter((prev: number) => prev + 1);
    reset(); // reset form after submission
  };

  //watch the value of the description field, variable is used to count the number of characters
  const description = watch('description', '');

  return (
    <section className="bg-zinc-100 px-4 flexCol">
      <img
        src={lightBulbImage}
        alt="light bulb icon"
        className="mt-4 h-12 w-12 text-primaryBlue"
      />
      <p className="text-lg font-bold text-primaryBlue">Add Idea</p>

      <form onSubmit={handleSubmit(onSubmit)} className="my-4 flexCol">
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
        <span className="mb-4 min-h-4 text-center text-xs italic text-red-500">
          {errors.description ? errors.description.message : null}
        </span>
        {description.length > 120 ? (
          <p className="absolute top-[162px] text-xs text-red-500">
            Character count: {description.length}
          </p>
        ) : null}

        <button
          type="submit"
          className="mb-2 rounded-lg bg-primaryBlue px-8 py-2 font-bold text-white"
          value="Submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
