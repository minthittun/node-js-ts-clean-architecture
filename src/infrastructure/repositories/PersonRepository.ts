import mongoose, { Schema, Document } from 'mongoose';
import { Person } from '../../data/models/Person';
import IRepository from './IRepository';

interface IPersonDocument extends Document, Person {}

const PersonSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true }
});

const PersonModel = mongoose.model<IPersonDocument>('Person', PersonSchema);

export class PersonRepository implements IRepository<IPersonDocument> {

  async add(person: Person): Promise<IPersonDocument> {
    const newPerson = new PersonModel(person);
    return await newPerson.save();
  }

  async getAll(): Promise<IPersonDocument[]> {
    const persons = await PersonModel.find();
    return persons;
  }
  
}