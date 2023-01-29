import * as Sentry from '@sentry/react';
import { useAddNewUser } from 'api/useAddNewUser';
import { useGetUsers } from 'api/useGetUsers';
import { Heading } from 'components/atoms/heading';
import { InputText } from 'components/molecules/input';
import { ListItems } from 'components/molecules/list-items';
import React from 'react';

interface errorBoundProps {
  error?: Error;
}

const ErrorBound: React.FC<errorBoundProps> = ({ error }) => {
  return <p>An error occured: {error?.message}</p>;
};

const RqUsers: React.FC = () => {
  const { mutate: addNewUser } = useAddNewUser();
  const { data } = useGetUsers();

  // if (isLoading) return <Loading />;
  // if (error instanceof Error) return <Heading tag="h4">{error.message}</Heading>;

  const handleSubmit = (e: React.FormEvent, name: string) => {
    e.preventDefault();
    addNewUser(name);
  };

  return (
    <div className="p-rq-users">
      <Heading>Reader data using RQ</Heading>

      <Sentry.ErrorBoundary fallback={({ error }) => <ErrorBound error={error} />}>
        <ListItems items={data} />
      </Sentry.ErrorBoundary>

      <InputText placeholder="Enter user name" onSubmit={handleSubmit} />
    </div>
  );
};
export default RqUsers;
