import { db } from '../index';
import { ratedskills, skillchips, techstackicons } from '../schema';

export async function getSkills() {
    if (!db) {
        return {
            rated: [],
            chips: [
                { name: 'Distributed Systems', category: 'Backend' },
                { name: 'Event-Driven Architecture', category: 'Backend' },
                { name: 'Retrieval-Augmented Generation', category: 'AI Systems' },
                { name: 'Apache Kafka', category: 'Data & Streaming' },
                { name: 'PostgreSQL / Vector DBs', category: 'Data & Streaming' },
                { name: 'TypeScript / React / Next.js', category: 'Frontend Architecture' },
            ],
            icons: []
        };
    }
    try {
        const [rated, chips, icons] = await Promise.all([
            db.select().from(ratedskills),
            db.select().from(skillchips),
            db.select().from(techstackicons)
        ]);
        return { rated, chips, icons };
    } catch (error) {
        console.warn('Database unavailable, returning fallback skills.');
        return { rated: [], chips: [], icons: [] };
    }
}
