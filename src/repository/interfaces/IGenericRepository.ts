import { Types } from "mongoose";

export default interface IGenericRepository<T> {
    create(data: Partial<T>): Promise<T | null>;
    getAll(): Promise<T[]>;
    update(id: Types.ObjectId | string,data: Partial<T>): Promise<T | null>;
    destroy(id: Types.ObjectId | string): Promise<boolean>;
}