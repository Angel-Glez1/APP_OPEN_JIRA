import mongose, { Model, Schema } from 'mongoose';
import { Entry } from '../interfaces';

export interface IEntry extends Entry {}

const entrySchema = new Schema({
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Number,
        default: Date.now()
    },
    status: {
        type: String,
        enum: {
            values: ['pending', 'in-progress', 'finished'],
            message: '{VALUE} no es un estado permitido'
        }
    },
});

/**
 * Hay que verificar si next ya creo el modelo, y si es asi ocupamos esa instacia y si no le indicamos que la cree.
 */
const EntryModel: Model<IEntry> = mongose.models.Entry || mongose.model('Entry', entrySchema);

export default EntryModel;