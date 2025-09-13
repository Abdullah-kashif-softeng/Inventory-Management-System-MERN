import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export type RequestWithUser = Request & {
  user: { id: string; role: string } & JwtPayload;
};


// Narrow the type so TS knows user is always there after calling this


type AuthenticatedRequest = Request & { user: { id: string; role: string } };

export function assertHasUser(req: Request): asserts req is AuthenticatedRequest {
  if (!req.user) {
    throw new Error("Request object without user found unexpectedly");
  }
}
