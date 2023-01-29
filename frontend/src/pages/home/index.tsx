/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAlbumsByClick } from 'api/useGetAlbums';
import { Button } from 'components/atoms/button';
import { Heading } from 'components/atoms/heading';
import { Loading } from 'components/atoms/loading';
import React, { Fragment, useEffect } from 'react';

const Home: React.FC = () => {
  const { data, isLoading, error, refetch, fetchNextPage, hasNextPage } = useGetAlbumsByClick();

  useEffect(() => {
    let fetching = false;
    const onScroll = async (event: any) => {
      const { scrollHeight, scrollTop, clientHeight } = event.target.scrollingElement;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };

    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  if (isLoading) return <Loading />;
  if (error instanceof Error) return <Heading tag="h4">{error.message}</Heading>;

  return (
    <div className="p-home">
      <Heading>Fetch data with button click only</Heading>
      <Button modifiers="third" size="medium" onClick={() => refetch()}>
        Fetch Data
      </Button>

      <div className="p-home__content">
        {data?.pages.map((group, i) => (
          <Fragment key={i}>
            {group.data.map((item: any) => (
              <p key={item.id}>{item.title}</p>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Home;
