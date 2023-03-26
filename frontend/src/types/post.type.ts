interface IComment {
  comment: string;
  image: string;
  commentBy: string;
  commentAt: Date;
}

export type IPost = {
  type: 'profilePicture' | 'cover' | null;
  text?: string;
  images?: string[];
  user: string;
  background?: string;
  comments: IComment[];
  createdAt: Date;
  updatedAt: Date;
};
