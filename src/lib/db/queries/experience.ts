import { db } from '../index';
import { workexperiences } from '../schema';

export async function getExperience() {
    if (!db) {
        return [
            {
                title: 'Senior Software Engineer / Technical Lead',
                company: 'Amdocs',
                duration: '2021 — Present',
                details: ['Architected distributed backend systems, event streaming with Apache Kafka, and production-grade resilient microservices.']
            }
        ];
    }
    try {
        const experience = await db.select().from(workexperiences);
        return experience;
    } catch (error) {
        console.warn('Database unavailable, returning fallback experience.');
        return [];
    }
}
