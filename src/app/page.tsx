import TaskCard from '@/components/TaskCard';
import prisma from '@/libs/prisma';

const loadTasks = async () => {
  return await prisma.task.findMany();
};

export const dynamic = 'force-dynamicgit ';
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

const HomePage = async () => {
  const tasks = await loadTasks();

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
};

export default HomePage;
