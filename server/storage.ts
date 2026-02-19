import { db } from "./db";
import { waitlist, type InsertWaitlist, type Waitlist } from "@shared/schema";

export interface IStorage {
  createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist>;
}

export class DatabaseStorage implements IStorage {
  async createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist> {
    const [newEntry] = await db.insert(waitlist).values(entry).returning();
    return newEntry;
  }
}

export const storage = new DatabaseStorage();
