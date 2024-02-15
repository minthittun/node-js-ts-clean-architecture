import { Request, Response } from 'express';
import { PersonUseCase } from '../../../infrastructure/use-cases/PersonUseCase';

export class PersonController {
  private personUseCase: PersonUseCase;

  constructor(personUseCase: PersonUseCase) {
    this.personUseCase = personUseCase;
  }

  async createPerson(req: Request, res: Response): Promise<void> {
    try {
      const { name, phone } = req.body;
      const newData = await this.personUseCase.createPerson(name, phone);
      const result = {
        status: 'OK',
        message: 'Successfully created',
        person: newData,
      };
      res.status(200).json(result);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ status: 'Error', message: 'Internal Server Error' });
    }
  }

  async getAllPersons(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.personUseCase.getAllPersons();
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ status: 'Error', message: 'Internal Server Error' });
    }
  }
}
