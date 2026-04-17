'use client'

import React, { createContext, useState } from 'react';

export const InstallAppsContext = createContext()


const InstalledAppsProvider = ({ children }) => {

  const [notification,  setNotification] = useState([])
  const data = {
    notification,
    setNotification
  }

  return (
    <InstallAppsContext.Provider value={data}>{children}</InstallAppsContext.Provider>
  );
};

export default InstalledAppsProvider;