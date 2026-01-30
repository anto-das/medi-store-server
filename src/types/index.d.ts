import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        name: string;
        email: string;
        emailVerified: boolean;
        role: string;
      };
    }
  }
}

// name: 'anto',
//   email: 'antodasahir@gmail.com',
//   emailVerified: true,
//   image: null,
//   createdAt: 2026-01-30T08:28:55.420Z,
//   updatedAt: 2026-01-30T08:28:55.420Z,
//   role: 'CUSTOMER',
//   id: 'KzMC5rdBgDoROYxD91AJhmtWij5lKBCc'
