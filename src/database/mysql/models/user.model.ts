import { Column, DataType, Model, Table } from "sequelize-typescript";

export interface UserAttributes {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    imageUrl: string;
    uuid: string;
}

@Table({
    tableName: "users",
    modelName: "User",
    timestamps: false,
})

export default class UserModel extends Model implements UserAttributes {
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true,
        unique: true,
    })
    declare id: number;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    declare firstName: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    declare lastName: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
        unique: true,
        validate: {
            isEmail: true,
        },
    })
    declare email: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
        validate: {
            min: 8,
        },
    })
    declare password: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
        unique: true,
        validate: {
            isNumeric: true,
        },
    })
    declare phoneNumber: string;

    @Column({
        allowNull: true,
        type: DataType.STRING,
    })
    declare imageUrl: string;

    @Column({
        allowNull: true,
        defaultValue: DataType.UUIDV4,
        type: DataType.STRING,
        unique: true,
    })
    declare uuid: string;
}
