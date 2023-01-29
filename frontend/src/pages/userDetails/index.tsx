import { useGetUserDetails } from 'api/useGetUserDetails';
import { Heading } from 'components/atoms/heading';
import { Loading } from 'components/atoms/loading';
import { Text } from 'components/atoms/text';
import React from 'react';
import { useParams } from 'react-router-dom';

const RqSuperHeros: React.FC = () => {
  const { userId } = useParams();
  const { data, isLoading, error } = useGetUserDetails(userId);

  if (isLoading) return <Loading />;
  if (error instanceof Error) return <Heading tag="h4">{error.message}</Heading>;

  return (
    <>
      <Heading align="center">RQ User Details</Heading>
      <div>
        <Text as="h4" align="center">
          Id: {data?.id}
        </Text>
        <Text as="p" align="center">
          Name: {data?.name}
        </Text>
        <Text as="a" href="https://www.google.com" target="_blank" weight="bold">
          Email: {data?.email}
        </Text>
        <Text as="p" align="center">
          Phone: {data?.phone}
        </Text>
      </div>
    </>
  );
};
export default RqSuperHeros;
