import { db } from '../index';
import { accomplishment, affiliated_badges, badges_list, blog, certificate, deeds, recognition } from '../schema';

export async function getCertificates() {
    try {
        const [certs, accs] = await Promise.all([
            db.select().from(certificate),
            db.select().from(accomplishment)
        ]);
        return { certs, accs };
    } catch (error) {
        console.error('Error fetching certificates:', error);
        return { certs: [], accs: [] };
    }
}

export async function getBadges() {
    try {
        const [affiliated, list] = await Promise.all([
            db.select().from(affiliated_badges),
            db.select().from(badges_list)
        ]);
        return { affiliated, list };
    } catch (error) {
        console.error('Error fetching badges:', error);
        return { affiliated: [], list: [] };
    }
}

export async function getBlogs() {
    try {
        const blogs = await db.select().from(blog);
        return blogs;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return [];
    }
}

export async function getCommunity() {
    try {
        const [deedsData, recognitionData] = await Promise.all([
            db.select().from(deeds),
            db.select().from(recognition)
        ]);
        return { deeds: deedsData, recognition: recognitionData };
    } catch (error) {
        console.error('Error fetching community data:', error);
        return { deeds: [], recognition: [] };
    }
}
