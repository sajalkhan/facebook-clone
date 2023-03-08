import Dots from 'assets/svg/dots';
import Feeling from 'assets/svg/feeling';
import Photo from 'assets/svg/photo';

export const AddToYourPost = () => {
  return (
    <div className="add-to-your-post">
      <div className="add-to-your-post__text">Add to your post</div>
      <div className="add-to-your-post__icon">
        <Photo color="#45bd62" />
      </div>
      <div className="add-to-your-post__icon">
        <i className="tag_icon"></i>
      </div>
      <div className="add-to-your-post__icon">
        <Feeling color="#f7b928" />
      </div>
      <div className="add-to-your-post__icon">
        <i className="maps_icon"></i>
      </div>
      <div className="add-to-your-post__icon">
        <i className="microphone_icon"></i>
      </div>
      <div className="add-to-your-post__icon">
        <Dots color="#65676b" />
      </div>
    </div>
  );
};
