import { Document, Types } from "mongoose";

export default interface IGenericService<T extends Document> {
    create(data: Partial<T>): Promise<T | null>;
    getAll(): Promise<T[]>;
    getById(id: Types.ObjectId | string): Promise<T | null>;
    update(id: Types.ObjectId | string, data: Partial<T>): Promise<T | null>;
    destroy(id: Types.ObjectId | string): Promise<boolean>;
}