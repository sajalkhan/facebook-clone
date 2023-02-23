import React from 'react';
import { ArrowRight, Plus } from 'assets/svg';

export type StoriesProps = {
  userStories: {
    image: string;
    profile_name: string;
    profile_picture: string;
  }[];
};

const DEFAULT_IMAGE = process.env.REACT_APP_DEFAULT_IMAGE;

export const Stories: React.FC<StoriesProps> = ({ userStories }) => {
  return (
    <div className="stories">
      <div className="stories__create">
        <img src={DEFAULT_IMAGE} alt="" className="stories__create-img" />
        <div className="stories__create-icon">
          <Plus color="#fff" />
        </div>
        <div className="stories__create-text">Create Story</div>
      </div>

      {userStories.map(({ image, profile_name, profile_picture }, indx: number) => (
        <div className="stories__user_story" key={indx}>
          <img src={image} alt="" className="stories__user_story-img" />
          <div className="stories__user_story-profile-pic">
            <img src={profile_picture} alt="" />
          </div>
          <div className="stories__user_story-profile-name">{profile_name}</div>
        </div>
      ))}

      <div className="stories__white-circle">
        <ArrowRight color="#65676b" />
      </div>
    </div>
  );
};
