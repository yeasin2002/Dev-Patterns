import { User } from '@/types';
import { RenderUsers } from './RenderUsers';

export const RenderProps = () => {
  return (
    <RenderUsers
      render={(user: User[]) => {
        return (
          <div>
            {user.map((user) => (
              <div key={user.id} className="p-4 bg-card rounded shadow-md">
                <p className="font-bold">{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
              </div>
            ))}
          </div>
        );
      }}
    />
  );
};
