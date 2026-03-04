import { db } from '../index';
import { links } from '../schema';

export async function getLinks() {
    try {
        const allLinks = await db.select().from(links);
        return allLinks;
    } catch (error) {
        // Log and re-throw to allow higher-level error boundaries or catch blocks to handle it
        console.error('Error fetching links:', error);
        throw new Error('Critical failure: Could not fetch navigation/social links from database');
    }
}
