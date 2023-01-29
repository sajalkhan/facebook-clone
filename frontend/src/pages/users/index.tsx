import { Heading } from 'components/atoms/heading';
import { useGetUsers } from 'libs/Hooks/useGetUsers';
import React, { Fragment } from 'react';

const Users: React.FC = () => {
  const user = useGetUsers();

  return (
    <div className="p-users">
      <Heading tag="h3">Traditional Render Data</Heading>

      {user?.map((item, indx: number) => (
        <Fragment key={indx}>
          <p className="p-users__name">{item.name}</p>
          <p className="p-users__email">{item.email}</p>
        </Fragment>
      ))}
    </div>
  );
};

export default Users;
