import { useFetch } from '@/hooks';
import { User } from '@/types';

type Props = {
  render: (users: User[]) => React.ReactNode;
};

const URL = `https://jsonplaceholder.typicode.com/users`;

export const RenderUsers = ({ render }: Props) => {
  const { data } = useFetch<User[]>(URL);
  return (
    <div className="p-4 bg-card rounded shadow-md">{render(data ?? [])}</div>
  );
};
