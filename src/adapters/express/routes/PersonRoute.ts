import express from 'express';
import { PersonController } from '../controllers/PersonController';
import { PersonUseCase } from '../../../infrastructure/use-cases/PersonUseCase';
import { PersonRepository } from '../../../infrastructure/repositories/PersonRepository';

export const personRoutes = express.Router();

const personRepository = new PersonRepository();
const personUseCase = new PersonUseCase(personRepository);
const personController = new PersonController(personUseCase);

personRoutes.post('/create', async (req, res) => personController.createPerson(req, res));
personRoutes.get('/getAll', async (req, res) => personController.getAllPersons(req, res));
