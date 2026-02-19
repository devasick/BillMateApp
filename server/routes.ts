import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post(api.waitlist.join.path, async (req, res) => {
    try {
      const input = api.waitlist.join.input.parse(req.body);
      await storage.createWaitlistEntry(input);
      res.status(201).json({ message: "Successfully joined waitlist!" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      
      // Handle unique constraint violation for email
      if (err instanceof Error && err.message.includes('unique constraint')) {
        return res.status(400).json({
          message: "Email already on the waitlist",
          field: "email"
        });
      }
      
      throw err;
    }
  });

  return httpServer;
}
