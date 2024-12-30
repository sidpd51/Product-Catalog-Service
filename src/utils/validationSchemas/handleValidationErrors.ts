import { NextFunction, Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";

const handleValidationErrors = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ validationError: errors.array() });
        return;
    }
    next();
};

export default handleValidationErrors;