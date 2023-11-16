'use client';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const NewPage = () => {
  const { handleSubmit, register } = useForm();
  const router = useRouter();
  const onSubmit = handleSubmit(async (data) => {
    const res = await axios.post('/api/tasks', data);
    router.push('/');
    router.refresh();
  });

  return (
    <section className="h-screen flex items-center justify-center">
      <form onSubmit={onSubmit}>
        <label htmlFor="title" className="font-bold text-xs">
          Write your title:
        </label>
        <input
          id="title"
          type="text"
          placeholder="Write a title"
          className="px-3 py-1 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-300 focus:border-sky-300 text-black block mb-2"
          {...register('title')}
        />
        <label htmlFor="description" className="font-bold text-xs">
          Write your description:
        </label>
        <textarea
          id="description"
          placeholder="Write a description"
          className="px-3 py-1 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-300 focus:border-sky-300 text-black block mb-2 w-full"
          {...register('description')}
        ></textarea>
        <button type="submit" className="bg-green-700 px-3 py-2 rounded-lg">
          Create
        </button>
      </form>
    </section>
  );
};

export default NewPage;
