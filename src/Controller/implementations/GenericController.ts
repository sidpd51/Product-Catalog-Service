import GenericService from "../../service/implementations/GenericService";
import { Document } from "mongoose";
import { Request, Response } from "express";
import IGenericController from "../interfaces/IGenericController";
import IGenericService from "../../service/interfaces/IGenericService";

export default class GenericController<T extends Document> implements IGenericController {
    private _service: IGenericService<T>;

    constructor(service: IGenericService<T>) {
        this._service = service

        this.getAll = this.getAll.bind(this);
        this.create = this.create.bind(this);
        this.getById = this.getById.bind(this);
        this.update = this.update.bind(this);
        this.destroy = this.destroy.bind(this);
    }


    async create(req: Request, res: Response): Promise<void> {
        try {
            const newDocument = await this._service.create(req.body);
            res.status(201).json(newDocument);
        } catch (error) {
            res.status(500).json({ message: "Error creating document", error });
        }
    }


    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const documents = await this._service.getAll();
            res.status(201).json(documents);
        } catch (error) {
            res.status(500).json({ message: "Error fetching documents", error });
        }
    }


    async getById(req: Request, res: Response): Promise<void> {
        try {
            const document = await this._service.getById(req.params.id);
            if (document) {
                res.status(200).json(document);
            } else {
                res.status(404).json({ message: "Document not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error fetching document", error });
        }
    }


    async update(req: Request, res: Response): Promise<void> {
        try {
            const updatedDocument = await this._service.update(req.params.id, req.body);
            if (updatedDocument) {
                res.status(200).json(updatedDocument);
            } else {
                res.status(404).json({ message: "Document not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error updating document", error });
        }
    }


    async destroy(req: Request, res: Response): Promise<void> {
        try {
            const isDeleted = await this._service.destroy(req.params.id);
            if (isDeleted) {
                res.status(200).json({ message: "Document deleted successfully" });
            } else {
                res.status(404).json({ message: "Document not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error deleting document", error });
        }
    }

}