import { useFetch } from '@/hooks';
import { User } from '@/types';
import React from 'react';

const URL = `https://jsonplaceholder.typicode.com/users`;

interface WithUserDataProps {
  users: User[];
}

export const withUserData = <P extends object>(
  WrappedComponent: React.ComponentType<P & WithUserDataProps>,
) => {
  type WithUserDataComponentProps = Omit<P, keyof WithUserDataProps>;

  const WithUserDataComponent: React.FC<WithUserDataComponentProps> = (
    props,
  ) => {
    const { data: users, error, loading } = useFetch<User[]>(URL);

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error: {error}</p>;

    return <WrappedComponent {...(props as P)} users={users ?? []} />;
  };

  return WithUserDataComponent;
};
