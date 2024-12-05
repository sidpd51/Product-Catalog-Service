import { Document, Types } from "mongoose";
import GenericRepository from "../../repository/implementations/GenericRepository";
import IGenericService from "../interfaces/IGenericService";

export default class GenericService<T extends Document> implements IGenericService<T> {
    protected _repository: GenericRepository<T>;

    constructor(repository: GenericRepository<T>) {
        this._repository = repository
    }

    async create(data: Partial<T>): Promise<T | null> {
        try {
            return await this._repository.create(data);
        } catch (error) {
            console.error("Error in create operation:", error);
            throw new Error("Service error while creating the document");
        }
    }

    async getAll(): Promise<T[]> {
        try {
            return await this._repository.getAll();
        } catch (error) {
            console.error("Error in getAll operation:", error);
            throw new Error("Service error while fetching all documents");
        }
    }

    async getById(id: Types.ObjectId | string): Promise<T | null> {
        try {
            return await this._repository.getById(id);
        } catch (error) {
            console.error("Error in getById operation:", error);
            throw new Error("Service error while fetching the document by ID");
        }
    }

    async update(id: Types.ObjectId | string, data: Partial<T>): Promise<T | null> {
        try {
            return await this._repository.update(id, data);
        } catch (error) {
            console.error("Error in update operation:", error);
            throw new Error("Service error while updating the document");
        }
    }

    async destroy(id: Types.ObjectId | string): Promise<boolean> {
        try {
            return await this._repository.destroy(id);
        } catch (error) {
            console.error("Error in destroy operation:", error);
            throw new Error("Service error while deleting the document");
        }
    }


}