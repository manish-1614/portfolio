import { pgTable, varchar, text, integer, numeric, serial } from 'drizzle-orm/pg-core';

export const accomplishment = pgTable('accomplishment', {
    id: serial('id').primaryKey(),
    type: varchar('type', { length: 100 }).notNull(),
    title: varchar('title', { length: 500 }).notNull(),
    author: varchar('author', { length: 255 }),
    url: varchar('url', { length: 1000 }).notNull(),
});

export const affiliated_badges = pgTable('affiliated_badges', {
    title: varchar('title', { length: 500 }).primaryKey(),
    url: varchar('url', { length: 1000 }).notNull(),
    imageurl: varchar('imageurl', { length: 1000 }).notNull(),
    date: varchar('date', { length: 100 }).notNull(),
});

export const badges_list = pgTable('badges_list', {
    title: varchar('title', { length: 500 }).primaryKey(),
    imageurl: varchar('imageurl', { length: 1000 }).notNull(),
    date: varchar('date', { length: 100 }).notNull(),
});

export const blog = pgTable('blog', {
    title: varchar('title', { length: 500 }).primaryKey(),
    page: varchar('page', { length: 255 }).notNull(),
    time: varchar('time', { length: 100 }).notNull(),
    url: varchar('url', { length: 1200 }).notNull(),
    description: text('description').notNull(),
    iconname: varchar('iconname', { length: 100 }).notNull(),
});

export const certificate = pgTable('certificate', {
    title: varchar('title', { length: 255 }).primaryKey(),
    url: varchar('url', { length: 1200 }).notNull(),
    thumbnail: varchar('thumbnail', { length: 1200 }).notNull(),
});

export const deeds = pgTable('deeds', {
    title: varchar('title', { length: 255 }).primaryKey(),
    imageurl: varchar('imageurl', { length: 1200 }).notNull(),
    description: text('description').notNull(),
});

export const education = pgTable('education', {
    name: varchar('name', { length: 255 }).primaryKey(),
    course: varchar('course', { length: 255 }).notNull(),
    duration: varchar('duration', { length: 255 }).notNull(),
    score: varchar('score', { length: 255 }).notNull(),
    work: text('work').array().notNull(),
});

export const links = pgTable('links', {
    text: varchar('text', { length: 255 }).primaryKey(),
    url: varchar('url', { length: 1500 }).notNull(),
    reacticon: varchar('reacticon', { length: 255 }).notNull(),
});

export const ratedskills = pgTable('ratedskills', {
    name: varchar('name', { length: 255 }).primaryKey(),
    rating: numeric('rating', { precision: 2, scale: 1 }).notNull(),
});

export const recognition = pgTable('recognition', {
    topic: varchar('topic', { length: 255 }).notNull(),
    title: varchar('title', { length: 400 }).primaryKey(),
    company: varchar('company', { length: 255 }).notNull(),
    time: varchar('time', { length: 255 }).notNull(),
    url: varchar('url', { length: 500 }).notNull(),
    description: varchar('description', { length: 1500 }).notNull(),
});

export const skillchips = pgTable('skillchips', {
    name: varchar('name', { length: 255 }).primaryKey(),
});

export const techstackicons = pgTable('techstackicons', {
    reacticon: varchar('reacticon', { length: 255 }).primaryKey(),
    label: varchar('label', { length: 100 }),
});

export const workexperiences = pgTable('workexperiences', {
    title: varchar('title', { length: 255 }).primaryKey(),
    company: varchar('company', { length: 255 }).notNull(),
    duration: varchar('duration', { length: 255 }).notNull(),
    details: varchar('details', { length: 1500 }).array().notNull(),
});
