import { randomUUID } from 'node:crypto';
import { Database } from "./database.js";
import { buildRoutePath } from './utils/build-route-path.js';

const database = new Database();

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/users'),
    handler: (request, response) => {
      const { search } = request.query;

      const users = database.select('users',
        search ? {
          name: search,
          email: search,
        } : undefined
      );

      return response.end(JSON.stringify(users));
    }
  },
  {
    method: 'POST',
    path: buildRoutePath('/users'),
    handler: (request, response) => {
      const { name, email } = request.body;

      const user = {
        id: randomUUID(),
        name,
        email
      };

      database.insert('users', user)

      return response.writeHead(201).end();
    }
  },
  {
    method: 'PUT',
    path: buildRoutePath('/users/:id'),
    handler: (request, response) => {
      const { name, email } = request.body;
      const { id } = request.params;

      database.update('users', id, {
        name,
        email,
      })

      return response.writeHead(204).end();
    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/users/:id'),
    handler: (request, response) => {
      const { id } = request.params;

      database.delete('users', id)

      return response.writeHead(204).end();
    }
  },
]