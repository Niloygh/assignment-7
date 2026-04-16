'use client'

import React, { createContext } from 'react';

export const InstallAppsContext = createContext()


const InstalledAppsProvider = ({children}) => {

    const data = [
  {
    "id": 1,
    "type": "Call",
    "icon": "phone",
    "description": "Industry conference meetup",
    "date": "2026-01-28"
  },
  {
    "id": 2,
    "type": "Text",
    "icon": "chat",
    "description": "Asked for career advice",
    "date": "2026-01-28"
  },
  {
    "id": 3,
    "type": "Video",
    "icon": "video",
    "description": "Asked for career advice",
    "date": "2026-01-28"
  }
]
    
    return (
        <InstallAppsContext.Provider value={data}>{children}</InstallAppsContext.Provider>
    );
};

export default InstalledAppsProvider;