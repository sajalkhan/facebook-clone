import React, { useRef } from 'react';
import { handleFileInput } from 'helpers/imageUtils';

type ImagePreviewProps = {
  images: string[];
  postError: string | null;
  setError: (value: string) => void;
  setShowPrev: (value: boolean) => void;
  setImages: (value: string[]) => void;
};

export const ImagePreview: React.FC<ImagePreviewProps> = ({ images, setImages, setError, postError, setShowPrev }) => {
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleImages = async (e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'change') {
      const files = Array.from((e.target as HTMLInputElement).files || []);
      await handleFileInput(files, images, setImages, setError);
    } else if (e.type === 'drop') {
      const files = Array.from((e as React.DragEvent<HTMLDivElement>).dataTransfer?.files || []);
      await handleFileInput(files, images, setImages, setError);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    handleImages(e);
  };

  const getPreviewClassName = (length: number) => {
    switch (length) {
      case 1:
        return 'image-preview__preview-grid preview1';
      case 2:
        return 'image-preview__preview-grid preview2';
      case 3:
        return 'image-preview__preview-grid preview3';
      case 4:
        return 'image-preview__preview-grid preview4';
      case 5:
        return 'image-preview__preview-grid preview5';
      default:
        return length % 2 === 0
          ? 'image-preview__preview-grid preview6'
          : 'image-preview__preview-grid preview6 image-preview__preview-grid--singular';
    }
  };

  const previewClassName = getPreviewClassName(images.length);

  if (postError) return null;

  return (
    <div className="image-preview" onDragOver={handleDragOver} onDrop={handleDrop}>
      <div className="image-preview__img-wrapper">
        <input type="file" multiple hidden ref={imageInputRef} onChange={handleImages} />
        {images.length ? (
          <div className="image-preview__inside">
            <div className="image-preview__actions">
              <button className="hover1">
                <i className="edit_icon"></i>
                Edit
              </button>
              <button className="hover1" onClick={() => imageInputRef?.current?.click()}>
                <i className="addPhoto_icon"></i>
                Add Photos/Videos
              </button>
            </div>
            <div
              className="image-preview__close-preview-icon"
              onClick={() => {
                setImages([]);
                setShowPrev(false);
              }}
            >
              <i className="exit_icon"></i>
            </div>
            <div className={previewClassName}>
              {images.map((img, i) => (
                <img src={img} key={i} alt="" />
              ))}
            </div>
          </div>
        ) : (
          <div className="image-preview__placeholder">
            <div className="image-preview__placeholder-exit-icon" onClick={() => setShowPrev(false)}>
              <i className="exit_icon"></i>
            </div>
            <div className="image-preview__placeholder-add" onClick={() => imageInputRef?.current?.click()}>
              <div className="image-preview__placeholder-add-icon">
                <i className="addPhoto_icon"></i>
              </div>
              <span>Add Photos/Videos</span>
              <span>or drag and drop</span>
            </div>
          </div>
        )}

        <div className="image-preview__add-pics-inside">
          <div className="image-preview__add-phone-icon">
            <i className="phone_icon"></i>
          </div>
          <div className="image-preview__mobile-text">Add photos from your mobile device.</div>
          <span className="image-preview__add-phone-btn">Add</span>
        </div>
      </div>
    </div>
  );
};
