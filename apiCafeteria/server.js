import { fastify } from 'fastify';
import cors from '@fastify/cors';
import { DatabaseCafeteria } from './database-postgres.js'; 

const server = fastify();
const databasePostgres = new DatabaseCafeteria(); 

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
});

server.post('/cafeterias', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createCafeteria(body); 
    return reply.status(201).send();
});

server.get('/cafeterias', async () => {
    const cafeterias = await databasePostgres.listCafeterias(); 
    return cafeterias;
});

server.put('/cafeterias/:id', async (request, reply) => {
    const cafeteriaID = request.params.id; 
    await databasePostgres.updateCafeteria(cafeteriaID, body);

    return reply.status(204).send();
});

server.delete('/cafeterias/:id', async (request, reply) => {
    const cafeteriaID = request.params.id;
    await databasePostgres.deleteCafeteria(cafeteriaID); 

    return reply.status(204).send();
});

server.listen({
    port: 3333
});
