import { Schema, Document, model, Types } from 'mongoose';

interface ICode extends Document {
  code: number;
  user: Types.ObjectId;
}

const codeSchema = new Schema<ICode>({
  code: {
    type: Number,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

export default model<ICode>('Code', codeSchema);
