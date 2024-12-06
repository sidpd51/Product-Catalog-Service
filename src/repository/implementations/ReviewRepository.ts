import { inject, injectable } from "inversify";
import { IReviewModel } from "../../model/reviewModel";
import IReviewRepository from "../interfaces/IReviewRepository";
import GenericRepository from "./GenericRepository";
import TYPES from "../../TYPES";
import { Model } from "mongoose";

@injectable()
export default class ReviewRepository extends GenericRepository<IReviewModel> implements IReviewRepository {
    constructor(@inject(TYPES.IReviewModel) model: Model<IReviewModel>) {
        super(model)
    }
}