import React from 'react';

export const AppContext = React.createContext({});
export const AppHookContext = React.createContext({});
export const AppHookProvider = AppHookContext.Provider;
export default AppContext.Provider;