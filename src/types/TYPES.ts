const TYPES = {
    IGenericRepository: Symbol.for("IGenericRepository"),
    IProductRepository: Symbol.for("IProductRepository"),
    ICategoryRepository: Symbol.for("ICategoryRepository"),
    IReviewRepository: Symbol.for("IReviewRepository"),
    IGenericService: Symbol.for("IGenericService"),
    IProductService: Symbol.for("IProductService"),
    ICategoryService: Symbol.for("ICategoryService"),
    IReviewService: Symbol.for("IReviewService"),
    IProductController: Symbol.for("IProductController"),
    ICategoryController: Symbol.for("ICategoryController"),
    IReviewController: Symbol.for("IReviewController"),
}

export default TYPES
