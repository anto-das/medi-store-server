import { NextFunction, Request, Response } from "express";
import { UserRole } from "../types";

function auth(...roles:UserRole[]){
    return async(req:Request,res:Response,next:NextFunction)=>{
        
    }
}

export default auth