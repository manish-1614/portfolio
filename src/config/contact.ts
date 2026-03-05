export interface ContactConfig {
    email: string;
    phone: string;
}

const email = process.env.CONTACT_EMAIL || "mkprajapati@zohomail.in";
const phone = process.env.CONTACT_PHONE || "+91 8210134128";

export const CONTACT_CONFIG: ContactConfig = {
    email,
    phone,
};
