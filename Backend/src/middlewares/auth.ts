// src/middleware/auth.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    export interface Request {
      user?: { id: string; role: string } & JwtPayload;
    }
  }
}

const JWT_SECRET = process.env.JWT_SECRET || "supersecret"; // use env var!

// Authentication: check token
export function auth(req: Request, res: Response, next: NextFunction) {
  try {
    // token can be in cookie or Bearer header
    const token = req.cookies?.token || req.headers["authorization"]?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "No token provided" });

    const decoded = jwt.verify(token, JWT_SECRET) as { id: string; role: string };
    req.user = decoded; // { id, role }
    next();
  } catch (err) {
    res.status(403).json({ error: "Invalid or expired token" });
  }
}

// Authorization: check role(s)
export function authorize(roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return res.status(401).json({ error: "Not authenticated" });

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Forbidden: insufficient rights" });
    }
    next();
  };
}
