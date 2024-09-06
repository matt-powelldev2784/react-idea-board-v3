import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addIdeaToStorage } from '@/utils/localStorage';
import { IdeaCardT } from '@/types/IdeaCardT';
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

export const EditIdeaForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(ideaValidationSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newIdea: IdeaCardT = {
      ...data,
      key: Date.now().toString(),
      lastUpdated: format(new Date(), 'dd-MM-yy HH:mm'),
    };
    addIdeaToStorage(newIdea);
  };

  return (
    <section className="px-4 flexCol">
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
        <span className="mb-4 min-h-4 text-xs italic text-red-500">
          {errors.description ? errors.description.message : null}
        </span>

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
