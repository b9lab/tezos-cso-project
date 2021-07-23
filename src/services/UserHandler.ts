import { Knex } from "knex";
import db from "../../database";
import User from "../models/User";

export default class UserHandler {
    userDao: Knex.QueryBuilder;

    constructor() {
        this.userDao = db('users');
    }
    
    getUser(id: number): Promise<User> {
        return this.userDao.where('id', id).first();
    }

    async updateUser(id: number, name: string | null, country: string | null, address: string | null): Promise<User> {
        var user: User;

        if (name != null || country != null || address != null) {
            user = await this.userDao.where('id', id).update({ name, country, address }).returning(['id', 'email', 'name', 'country', 'address']);
        } else {
            user = await this.getUser(id);
        }

        return user;
    }

}
