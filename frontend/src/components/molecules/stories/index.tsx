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
      <div className="create_story_card">
        <img src={DEFAULT_IMAGE} alt="" className="create_story_img" />
        <div className="plus_story">
          <Plus color="#fff" />
        </div>
        <div className="story_create_text">Create Story</div>
      </div>

      {userStories.map(({ image, profile_name, profile_picture }, indx: number) => (
        <div className="story" key={indx}>
          <img src={image} alt="" className="story_img" />
          <div className="story_profile_pic">
            <img src={profile_picture} alt="" />
          </div>
          <div className="story_profile_name">{profile_name}</div>
        </div>
      ))}

      <div className="white_circle">
        <ArrowRight color="#65676b" />
      </div>
    </div>
  );
};
