import { Knex } from "knex";
import db from "../../database";
import User from "../models/User";

/**
 * Handles the user logic by interacting with the db
 */
export default class UserHandler {
    userDao: Knex.QueryBuilder;
    sessionDao: Knex.QueryBuilder;
    accountDao: Knex.QueryBuilder;

    constructor() {
        this.userDao = db('users');
        this.sessionDao = db('sessions');
        this.accountDao = db('accounts');
    }
    
    /**
     * Gets user's data
     */
    getUser(id: number): Promise<User> {
        console.log('[UserHandler] get user ' + id);
        return this.userDao.where('id', id).first();
    }

    /**
     * Updates user's data
     */
    async updateUser(id: number, name: string | null, country: string | null, address: string | null): Promise<User> {
        console.log('[UserHandler] update user ' + id);
        var user: User;

        if (name != null || country != null || address != null) {
            user = await this.userDao.where('id', id).update({ name, country, address }).returning(['id', 'email', 'name', 'country', 'address']);
        } else {
            user = await this.getUser(id);
        }

        return user;
    }

    /**
     * Deletes a user
     */
    deleteUser(id: number) {
        console.log('[UserHandler] delete user ' + id);
        return db.transaction(async trx => {
            console.log('[UserHandler] Started transaction');
            console.log('[UserHandler] deleting user sessions');
            await this.sessionDao.where('user_id', id).del().transacting(trx);
            console.log('[UserHandler] deleting user accounts');
            await this.accountDao.where('user_id', id).del().transacting(trx);
            console.log('[UserHandler] deleting user');
            await this.userDao.where('id', id).del().transacting(trx);
            console.log('[UserHandler] Ended transaction');
        });
    }

}
