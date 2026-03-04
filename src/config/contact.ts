export interface ContactConfig {
    email: string;
    phone: string;
}

const email = process.env.CONTACT_EMAIL || "contact@yourbusiness.com";
const phone = process.env.CONTACT_PHONE || "+1 (555) 000-0000";

export const CONTACT_CONFIG: ContactConfig = {
    email,
    phone,
};
