import { SubmitHandler, useForm } from 'react-hook-form';
import lightBulbImage from '../../assets/images/light_bulb_outline.svg';

type Inputs = {
  title: string;
  description: string;
};

export const IdeaForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <section className="bg-zinc-100 px-4 flexCol">
      <img
        src={lightBulbImage}
        alt="My SVG"
        className="mt-4 h-12 w-12 text-primaryBlue"
      />
      <p className="text-lg font-bold text-primaryBlue">Add Idea</p>

      <form onSubmit={handleSubmit(onSubmit)} className="my-6 gap-4 flexCol">
        <div className="w-full max-w-md flexCol">
          <input
            {...register('title', { required: true })}
            placeholder="Title"
            autoFocus
            className="h-10 rounded-lg border border-gray-400 px-2 outline-none flexCol focus:border-2 focus:border-primaryBlue"
          />
          {errors.title && (
            <span className="text-xs italic text-red-500">
              This field is required
            </span>
          )}
        </div>

        <div className="w-full max-w-md flexCol">
          <textarea
            {...register('description', { required: true })}
            className="h-20 rounded-lg border border-gray-400 p-2 outline-none flexCol focus:border-2 focus:border-primaryBlue"
            placeholder="Description"
          />
          {errors.description && (
            <span className="text-xs italic text-red-500">
              This field is required
            </span>
          )}
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
