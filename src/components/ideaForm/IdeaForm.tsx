import { SubmitHandler, useForm } from 'react-hook-form';

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
    <form onSubmit={handleSubmit(onSubmit)} className="flexCol sm:mx-2">
      <div className="w-full max-w-md flexCol">
        <label className="">Title</label>
        <input
          {...register('title', { required: true })}
          className="h-10 rounded-lg border border-gray-400 flexCol"
        />
        {errors.title && (
          <span className="text-xs italic text-red-500">
            This field is required
          </span>
        )}
      </div>

      <div className="w-full max-w-md flexCol">
        <label className="">Description</label>
        <input
          {...register('description', { required: true })}
          className="h-10 rounded-lg border border-gray-400 flexCol"
        />
        {errors.description && (
          <span className="text-xs italic text-red-500">
            This field is required
          </span>
        )}
      </div>

      <div className="m-2 flexCol">
        <button
          type="submit"
          className="m-4 rounded-lg bg-primaryBlue px-8 py-2 font-bold text-white"
          value="Submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
