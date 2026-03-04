import { db } from '../index';
import { education } from '../schema';

export async function getEducation() {
    try {
        const edu = await db.select().from(education);
        return edu;
    } catch (error) {
        console.error('Error fetching education:', error);
        return [];
    }
}
