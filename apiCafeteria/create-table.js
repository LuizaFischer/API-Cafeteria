import { sql } from './db.js';

sql`
  CREATE TABLE cafeterias (
      id text PRIMARY KEY,
      nome character varying(255),
      local character varying(255),
      descricao character varying(255)
  );
`.then(() => {
  console.log('Tabela Criada com Sucesso!');
}).catch(err => {
  console.error('Erro ao criar tabela:', err);
});
