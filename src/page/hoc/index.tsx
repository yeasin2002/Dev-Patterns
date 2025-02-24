import { User } from '@/types';
import { withUserData } from './withUser';

const HocExampleApp = ({ users }: { users: User[] }) => {
  return (
    <div>
      <h1>User with HOC</h1>

      <div className="grid grid-cols-1 gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 bg-card rounded shadow-md">
            <p className="font-bold">{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const HocExample = withUserData(HocExampleApp);
