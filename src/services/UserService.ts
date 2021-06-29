import { Knex } from "knex";
import db from "../../database";
import User from "../models/User";

export default class UserService {
    userDao: Knex.QueryBuilder;

    constructor() {
        this.userDao = db('users');
    }
    
    getUser(id: number): Promise<User> {
        return this.userDao.where('id', id).first();
    }

    async updateUser(id: number, name: string): Promise<User> {
        const user = await this.userDao.where('id', id).update({ name: name }).returning(['id','name']);
        return user[0];
    }

}
