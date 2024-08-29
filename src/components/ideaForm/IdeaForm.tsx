import { SubmitHandler, useForm } from 'react-hook-form';
import lightBulbImage from '../../assets/images/light_bulb_outline.svg';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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

export const IdeaForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(ideaValidationSchema),
    mode: 'onChange',
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <section className="bg-zinc-100 px-4 flexCol">
      <img
        src={lightBulbImage}
        alt="My SVG"
        className="mt-4 h-12 w-12 text-primaryBlue"
      />
      <p className="text-lg font-bold text-primaryBlue">Add Idea</p>

      <form onSubmit={handleSubmit(onSubmit)} className="my-4 gap-4 flexCol">
        <div className="w-full max-w-md flexCol">
          <input
            {...register('title', { required: true })}
            placeholder="Title"
            autoFocus
            className="h-10 rounded-lg border border-gray-400 px-2 outline-none flexCol focus:border-2 focus:border-primaryBlue"
          />

          <span className="min-h-4 text-xs italic text-red-500">
            {errors.title ? errors.title.message : null}
          </span>
        </div>

        <div className="w-full max-w-md flexCol">
          <textarea
            {...register('description', { required: true })}
            className="h-24 rounded-lg border border-gray-400 p-2 outline-none flexCol focus:border-2 focus:border-primaryBlue"
            placeholder="Description"
          />
          <span className="min-h-4 text-xs italic text-red-500">
            {errors.description ? errors.description.message : null}
          </span>
        </div>

        <div className="flexCol">
          <button
            type="submit"
            className="rounded-lg bg-primaryBlue px-8 py-2 font-bold text-white"
            value="Submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
