import { db } from '../index';
import { education } from '../schema';

export async function getEducation() {
    if (!db) {
        return [
            {
                name: 'Engineering Graduate',
                course: 'Computer Science & Engineering',
                duration: '2017 — 2021',
                score: 'First Class with Distinction',
                work: ['Specialized in Distributed Computing and Database Internals.']
            }
        ];
    }
    try {
        const edu = await db.select().from(education);
        return edu;
    } catch (error) {
        console.warn('Database unavailable, returning fallback education.');
        return [];
    }
}
