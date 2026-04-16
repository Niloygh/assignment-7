import InstalledAppsProvider from '@/context/InstalledAppsProvider';
import React, { Children } from 'react';

const Providers = ({children}) => {
    return (
        <div>
            <InstalledAppsProvider>
                {children}
            </InstalledAppsProvider>
        </div>
    );
};

export default Providers;