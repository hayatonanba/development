import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const blogsTable = pgTable('blogs_table', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    content: text('content').notNull(),
    publishedAt: timestamp('published_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').$onUpdate(() => new Date())
})

export type SelectBlog = typeof blogsTable.$inferSelect;
export type InsertBlog = typeof blogsTable.$inferInsert;