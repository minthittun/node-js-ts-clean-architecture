import { Person } from "../../data/models/Person";
import { PersonRepository } from "../repositories/PersonRepository";

export class PersonUseCase {

  constructor(private personRepository: PersonRepository) {}

  async createPerson(name: string, phone: string): Promise<Person> {
    const person: Person = {
      name,
      phone
    };
    return this.personRepository.add(person);
  }

  async getAllPersons(): Promise<Person[]> {
    return this.personRepository.getAll();
  }

}
