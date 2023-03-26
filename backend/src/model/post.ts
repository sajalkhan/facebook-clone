import { Schema, model, Document } from 'mongoose';
import { ObjectId } from 'mongodb';

interface IComment {
  comment: string;
  image: string;
  commentBy: ObjectId;
  commentAt: Date;
}

export interface IPost extends Document {
  type: 'profilePicture' | 'cover' | null;
  text?: string;
  images?: [
    {
      url: string;
    }
  ];
  user: ObjectId;
  background?: string;
  comments: IComment[];
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new Schema<IPost>(
  {
    type: {
      type: String,
      enum: ['profilePicture', 'cover', null],
      default: null
    },
    text: {
      type: String
    },
    images: {
      type: [{}]
    },
    user: {
      type: ObjectId,
      ref: 'User',
      required: true
    },
    background: {
      type: String
    },
    comments: [
      {
        comment: {
          type: String
        },
        image: {
          type: String
        },
        commentBy: {
          type: ObjectId,
          ref: 'User'
        },
        commentAt: {
          type: Date,
          default: new Date()
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

export default model<IPost>('Post', postSchema);
