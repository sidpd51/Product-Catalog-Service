import { Types } from "mongoose";
import { IReview } from "../../model/reviewModel";
import IGenericService from "./IGenericService";

export default interface IReviewService extends IGenericService<IReview>{
    create(data: Partial<IReview>): Promise<IReview | null>;
    destroy(id: Types.ObjectId | string): Promise<boolean>;
}