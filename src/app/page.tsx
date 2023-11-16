import TaskCard from '@/components/TaskCard';
import prisma from '@/libs/prisma';

const loadTasks = async () => {
  return await prisma.task.findMany();
};

const HomePage = async () => {
  const tasks = await loadTasks();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
};

export default HomePage;
