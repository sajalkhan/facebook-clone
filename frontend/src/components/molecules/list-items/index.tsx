import { Text } from 'components/atoms/text';
import { mapModifiers } from 'libs/component';
import React from 'react';
import { Link } from 'react-router-dom';

export type listItemsProps = {
  items: {
    id: string;
    name: string;
  }[];
};

export const ListItems: React.FC<listItemsProps> = ({ items }) => {
  const componentClassName = mapModifiers('m-list-items');
  const className = `${componentClassName}`.trim();

  return (
    <div className={className}>
      {items?.map((item, indx: number) => (
        <div key={indx}>
          <Link to={`${item.id}`}>
            <Text colors="gray">{item.name}</Text>
          </Link>
        </div>
      ))}
    </div>
  );
};
