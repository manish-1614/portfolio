import { db } from '../index';
import { workexperiences } from '../schema';
import { desc } from 'drizzle-orm';

export async function getExperience() {
    try {
        // Note: Since duration is a string, we might need a better sorting strategy
        // if records are not in order. For now, we'll fetch all.
        const experience = await db.select().from(workexperiences);
        return experience;
    } catch (error) {
        console.error('Error fetching work experience:', error);
        return [];
    }
}
