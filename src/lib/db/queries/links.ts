import { db } from '../index';
import { links } from '../schema';

export async function getLinks() {
    if (!db) {
        return [
            { text: 'GitHub', url: 'https://github.com/manish-1614', reacticon: 'FaGithub' },
            { text: 'LinkedIn', url: 'https://linkedin.com/in/manish-1614', reacticon: 'FaLinkedin' },
            { text: 'Email', url: 'mailto:mkprajapati@zohomail.in', reacticon: 'FaEnvelope' },
        ];
    }
    try {
        const allLinks = await db.select().from(links);
        return allLinks;
    } catch (error) {
        return [
            { text: 'GitHub', url: 'https://github.com/manish-1614', reacticon: 'FaGithub' },
            { text: 'LinkedIn', url: 'https://linkedin.com/in/manish-1614', reacticon: 'FaLinkedin' },
            { text: 'Email', url: 'mailto:mkprajapati@zohomail.in', reacticon: 'FaEnvelope' },
        ];
    }
}
