'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MyNavbar = ({children, href , icon}) => {
    const pathname = usePathname()
    
    return (
        <Link href={href} className={`flex items-center gap-0 md:gap-1 ${href === pathname && 'bg-green px-2 py-1 rounded-sm' }`}>
            {icon} {children}
        </Link>
    );
};

export default MyNavbar;