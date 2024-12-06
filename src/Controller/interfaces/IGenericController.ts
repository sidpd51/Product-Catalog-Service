import { Document } from "mongoose";
import { Request, Response } from "express";

export default interface IGenericController {
    create(req: Request, res: Response): Promise<void>;
    getAll(req: Request, res: Response): Promise<void>;
    getById(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    destroy(req: Request, res: Response): Promise<void>;
}