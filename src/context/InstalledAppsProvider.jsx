'use client'

import React, { createContext, useState } from 'react';

export const InstallAppsContext = createContext()


const InstalledAppsProvider = ({ children }) => {

  const [timeline,  setTimeline] = useState([])
  const data = {
    timeline,
    setTimeline
  }

  return (
    <InstallAppsContext.Provider value={data}>{children}</InstallAppsContext.Provider>
  );
};

export default InstalledAppsProvider;