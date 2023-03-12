import { Schema, model, Document, Types } from 'mongoose';
import { ObjectId } from 'mongodb';

interface IDetails extends Document {
  bio?: string;
  otherName?: string;
  job?: string;
  workplace?: string;
  highSchool?: string;
  college?: string;
  currentCity?: string;
  hometown?: string;
  relationship?: 'Single' | 'In a relationship' | 'Married' | 'Divorced';
  instagram?: string;
}

interface ISearch extends Document {
  user: Types.ObjectId;
}

interface ISavedPost extends Document {
  post: Types.ObjectId;
  savedAt: Date;
}

export interface IUser extends Document {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  picture?: string;
  cover?: string;
  gender: string;
  bYear: number;
  bMonth: number;
  bDay: number;
  verified?: boolean;
  friends?: Types.ObjectId[];
  following?: Types.ObjectId[];
  followers?: Types.ObjectId[];
  requests?: Types.ObjectId[];
  search?: ISearch[];
  details?: IDetails;
  savedPosts?: ISavedPost[];
}

const userSchema = new Schema<IUser>(
  {
    first_name: {
      type: String,
      required: [true, 'first name is required'],
      trim: true,
      text: true
    },
    last_name: {
      type: String,
      required: [true, 'last name is required'],
      trim: true,
      text: true
    },
    username: {
      type: String,
      required: [true, 'username is required'],
      trim: true,
      text: true,
      unique: true
    },

    email: {
      type: String,
      required: [true, 'email is required'],
      trim: true
    },
    password: {
      type: String,
      required: [true, 'password is required']
    },
    picture: {
      type: String,
      trim: true,
      default: 'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png'
    },
    cover: {
      type: String,
      trim: true
    },
    gender: {
      type: String,
      required: [true, 'gender is required'],
      trim: true
    },
    bYear: {
      type: Number,
      required: true,
      trim: true
    },
    bMonth: {
      type: Number,
      required: true,
      trim: true
    },
    bDay: {
      type: Number,
      required: true,
      trim: true
    },
    verified: {
      type: Boolean,
      default: false
    },
    friends: {
      type: [ObjectId],
      default: []
    },
    following: {
      type: [ObjectId],
      default: []
    },
    followers: {
      type: [ObjectId],
      default: []
    },
    requests: {
      type: [ObjectId],
      default: []
    },
    search: [
      {
        user: {
          type: ObjectId,
          ref: 'User'
        }
      }
    ],
    details: {
      bio: {
        type: String
      },
      otherName: {
        type: String
      },
      job: {
        type: String
      },
      workplace: {
        type: String
      },
      highSchool: {
        type: String
      },
      college: {
        type: String
      },
      currentCity: {
        type: String
      },
      hometown: {
        type: String
      },
      relationship: {
        type: String,
        enum: ['Single', 'In a relationship', 'Married', 'Divorced']
      },
      instagram: {
        type: String
      }
    },
    savedPosts: [
      {
        post: {
          type: ObjectId,
          ref: 'Post'
        },
        savedAt: {
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

export default model('User', userSchema);
