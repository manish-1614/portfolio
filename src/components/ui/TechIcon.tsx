import * as Si from 'react-icons/si';
import * as Fa from 'react-icons/fa';
import * as Tb from 'react-icons/tb';
import * as Ai from 'react-icons/ai';

interface TechIconProps {
    reacticon: string;
    size?: number;
    label?: string;
    className?: string;
}

export function TechIcon({ reacticon, size = 32, label, className = '' }: TechIconProps) {
    const [prefix, iconName] = reacticon.split('/');

    let IconComponent: any = null;

    if (prefix === 'si') {
        IconComponent = (Si as any)[iconName];
    } else if (prefix === 'fa') {
        IconComponent = (Fa as any)[iconName];
    } else if (prefix === 'tb') {
        IconComponent = (Tb as any)[iconName];
    } else if (prefix === 'ai') {
        IconComponent = (Ai as any)[iconName];
    }

    if (!IconComponent) return null;

    return (
        <div className={`flex flex-col items-center gap-2 ${className}`}>
            <IconComponent size={size} className="text-slate-400 hover:text-blue-400 transition-colors" />
            {label && <span className="text-xs text-slate-500 font-medium whitespace-nowrap">{label}</span>}
        </div>
    );
}
