import { Types } from "mongoose";

export interface IProductFilter {
    name?:string;
    minPrice?:number;
    maxPrice?:number;
    categoryID?:string|Types.ObjectId;
}

export interface IProductQuery {
    name: { $regex: string, $options: string};
    price: { $gte?:number, $lte?: number};
    categoryID: Types.ObjectId | string;
}