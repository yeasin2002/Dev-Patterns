import { User } from '@/types';
import { UsersContainer } from './Users';

export const FunctionChildren = () => {
  return (
    <UsersContainer>
      {(users: User[]) => (
        <div className="grid grid-cols-1 gap-4">
          {users.map((user) => (
            <div key={user.id} className="p-4 bg-card rounded shadow-md">
              <p className="font-bold">{user.name}</p>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          ))}
        </div>
      )}
    </UsersContainer>
  );
};
