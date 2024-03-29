import { Schema } from 'mongoose';

const EnteredAreaSchema = new Schema({
  deviceId: { type: Number, required: true },
  userId: { type: String, required: true },
  error: Boolean,
});

EnteredAreaSchema.index({ userId: 1, deviceId: -1 });

export default EnteredAreaSchema;
