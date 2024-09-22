import { sql } from './db.js';

export class DatabaseCafeteria {
    async createCafeteria(cafeteria) {
        const id = cafeteria.id(); 
        const nome = cafeteria.nome;
        const local = cafeteria.local;
        const descricao = cafeteria.descricao;

        await sql`insert into cafeterias (id, nome, local, descricao)
        values (${id}, ${nome}, ${local}, ${descricao})`; 
    }

    async listCafeterias() {
        const cafeterias = await sql`select * from cafeterias`;
        return cafeterias;
    }
  
    async updateCafeteria(id, cafeteria) {
        const nome = cafeteria.nome;
        const local = cafeteria.local;
        const descricao = cafeteria.descricao;

        await sql`update cafeterias set 
            nome = ${nome},
            local = ${local},
            descricao = ${descricao}
            where id = ${id}`;
    }
  
    async deleteCafeteria(id) {
        await sql`delete from cafeterias where id = ${id}`;
    }
}
