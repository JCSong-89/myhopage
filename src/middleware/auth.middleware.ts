import { Request } from "express";
import { isJSDocUnknownTag } from "typescript";
import {} from 'jsonwebtoken';

export default (req: Request) {
  const { token }  = req.headers.authorization;

  


}