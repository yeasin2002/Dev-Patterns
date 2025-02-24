import { useFetch } from '@/hooks';
import { User } from '@/types';

type Props = {
  children: (users: User[]) => React.ReactNode;
};
const URL = `https://jsonplaceholder.typicode.com/users`;

export const UsersContainer = ({ children }: Props) => {
  const { data } = useFetch<User[]>(URL);
  return (
    <div className="p-4 bg-card rounded shadow-md">{children(data ?? [])}</div>
  );
};
