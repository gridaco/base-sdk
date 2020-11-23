import { ServiceError } from "./error";

export interface ServiceResponse<T> {
    message: string
    success: boolean
    errors?: ServiceError[]
    data?: T
}