import { db } from '../index';
import { ratedskills, skillchips, techstackicons } from '../schema';

export async function getSkills() {
    try {
        const [rated, chips, icons] = await Promise.all([
            db.select().from(ratedskills),
            db.select().from(skillchips),
            db.select().from(techstackicons)
        ]);
        return { rated, chips, icons };
    } catch (error) {
        console.error('Error fetching skills:', error);
        return { rated: [], chips: [], icons: [] };
    }
}
