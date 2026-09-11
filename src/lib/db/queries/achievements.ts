import { db } from '../index';
import { accomplishment, affiliated_badges, badges_list, blog, certificate, deeds, recognition } from '../schema';

export async function getCertificates() {
    if (!db) {
        return { certs: [], accs: [] };
    }
    try {
        const [certs, accs] = await Promise.all([
            db.select().from(certificate),
            db.select().from(accomplishment)
        ]);
        return { certs, accs };
    } catch (error) {
        return { certs: [], accs: [] };
    }
}

export async function getBadges() {
    if (!db) {
        return { affiliated: [], list: [] };
    }
    try {
        const [affiliated, list] = await Promise.all([
            db.select().from(affiliated_badges),
            db.select().from(badges_list)
        ]);
        return { affiliated, list };
    } catch (error) {
        return { affiliated: [], list: [] };
    }
}

export async function getBlogs() {
    if (!db) {
        return [
            {
                title: 'Building Smriti: Zero-Fabrication Retrieval and Resilience Cascades',
                page: 'dev.to',
                time: '2024',
                url: 'https://dev.to/manish_prajapati_cfaed027/smriti-what-if-you-could-talk-to-them-just-one-more-time-449p',
                description: 'A deep dive into deterministic emotional gating, in-process cosine similarity, and 503 backoff cascades.',
                iconname: 'SiDevdotto'
            },
            {
                title: "Distributed System Architecture: CQRS & Event Sourcing with Kafka",
                page: 'dev.to',
                time: '2024',
                url: 'https://dev.to/manish-1614/cqrs-the-design-pattern-thats-changing-the-game-and-how-you-can-use-it-too-jp8',
                description: 'Patterns for high-throughput transactional consistency across microservices.',
                iconname: 'SiApachekafka'
            },
            {
                title: 'Authentication Failure for IMAP and POP3 Using Client Credential Flow for OAuth2',
                page: 'Microsoft Tech Community',
                time: '2022',
                url: 'https://techcommunity.microsoft.com/discussions/microsoft-365/authentication-failure-for-imap-and-pop3-using-client-credential-flow-for-oauth2/3576825',
                description: 'Deep dive into OAuth2 client credential flow token lifecycles, service principal permissions, and protocol scope handling.',
                iconname: 'SiMicrosoft'
            }
        ];
    }
    try {
        const blogs = await db.select().from(blog);
        return blogs;
    } catch (error) {
        return [];
    }
}

export async function getCommunity() {
    if (!db) {
        return { deeds: [], recognition: [] };
    }
    try {
        const [deedsData, recognitionData] = await Promise.all([
            db.select().from(deeds),
            db.select().from(recognition)
        ]);
        return { deeds: deedsData, recognition: recognitionData };
    } catch (error) {
        return { deeds: [], recognition: [] };
    }
}
