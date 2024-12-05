import { Types } from "mongoose";
import { IReviewModel } from "../../model/reviewModel";
import IGenericService from "./IGenericService";

export default interface IReviewService extends IGenericService<IReviewModel>{
    create(data: Partial<IReviewModel>): Promise<IReviewModel | null>;
    destroy(id: Types.ObjectId | string): Promise<boolean>;
}