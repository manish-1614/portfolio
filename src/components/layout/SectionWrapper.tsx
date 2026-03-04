import { ReactNode } from 'react';

interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

export function SectionWrapper({ children, id, className = '' }: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`min-h-[80vh] px-6 py-20 max-w-6xl mx-auto flex flex-col justify-center ${className}`}
        >
            {children}
        </section>
    );
}
