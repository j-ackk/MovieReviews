import mongoose from 'mongoose';

/**
 * Create a schema and model for info related to a customer. There will be 3 fields. Name which is
 * a string, movie which is a string and email which is a string and is also required. 
 */

const infosSchema = new mongoose.Schema({
    name: String,
    movie: String,
    email: {
        type: String,
        required: true
    }
});

const Infos = mongoose.model('Infos', infosSchema, 'Infos');

export default Infos;