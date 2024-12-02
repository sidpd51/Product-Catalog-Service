import mongoose, { Document, Model, Types } from "mongoose";
import IGenericRepository from "../interfaces/IGenericRepository";

export default class GenericRepository<T extends Document> implements IGenericRepository<T> {
    private _model: Model<T>

    constructor(model: Model<T>) {
        this._model = model
    }

    async create(data: Partial<T>): Promise<T | null> {
        try {
            const document = await this._model.create(data);
            return document;
        } catch (error) {
            console.error("Error in create operation:", error);
            return null;
        }
    }

    async getAll(): Promise<T[]> {
        try {
            return await this._model.find();
        } catch (error) {
            console.error("Error in getAll operation:", error);
            return [];
        }
    }
    // Get a document by ID
    async getById(id: Types.ObjectId | string): Promise<T | null> {
        try {
            return await this._model.findById(id);
        } catch (error) {
            console.error("Error in getById operation:", error);
            return null;
        }
    }

    // Update a document by ID
    async update(
        id: Types.ObjectId | string,
        data: Partial<T>
    ): Promise<T | null> {
        try {
            return await this._model.findByIdAndUpdate(id, data, {
                new: true,
            });
        } catch (error) {
            console.error("Error in update operation:", error);
            return null;
        }
    }

    // Delete a document by ID
    async destroy(id: Types.ObjectId | string): Promise<boolean> {
        try {
            const result = await this._model.deleteOne({ _id: id });
            return result.deletedCount === 1;
        } catch (error) {
            console.error("Error in delete operation:", error);
            return false;
        }
    }
}