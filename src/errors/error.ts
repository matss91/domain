interface AppError{
type:String,
message:String,
httpStatus?:Number
}

export interface InvalidDataError extends AppError{
type:"invalidData",
message:String,
httpStatus:400



}

export const createInvalidError=(message:String):InvalidDataError=>({
    type:"invalidData",
    message,
    httpStatus:400
})