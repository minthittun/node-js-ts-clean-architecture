import { Document } from 'mongoose';

interface IRepository<T extends Document> {
  add(entity: T): Promise<T>;
  getAll(): Promise<T[]>;
}

export default IRepository;
