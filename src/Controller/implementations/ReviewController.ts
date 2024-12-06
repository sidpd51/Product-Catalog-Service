import { inject, injectable } from "inversify";
import { IReviewModel } from "../../model/reviewModel";
import IGenericController from "../interfaces/IGenericController";
import GenericController from "./GenericController";
import TYPES from "../../TYPES";
import IReviewService from "../../service/interfaces/IReviewService";

@injectable()
export default class ReviewController extends GenericController<IReviewModel> implements IGenericController {
    constructor(@inject(TYPES.IReviewService) service: IReviewService) {
        super(service)
    }
}