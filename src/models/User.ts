import Adapters, { TypeORMUserModel } from "next-auth/adapters";

export default class User extends (<any>Adapters.TypeORM.Models.User.model) {
    constructor(
        name: string,
        email: string,
        image: string,
        emailVerified: Date | undefined,
        country?: string, 
        address?: string
    ) {
        super(name, email, image, emailVerified);
        this.country = country;
        this.address = address;
    }
}
  
type UserSchema = {
    name: string;
    target: typeof TypeORMUserModel;
    columns: {};
};
  
export const UserSchema: UserSchema = {
    name: "User",
    target: User,
    columns: {
        ...Adapters.TypeORM.Models.User.schema.columns,
        country: {
            type: "varchar",
            nullable: true,
        },
        address: {
            type: "varchar",
            nullable: true,
        },
    },
};