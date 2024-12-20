import { SessionProvider } from "next-auth/react";
// import APIKeyPage from "./page";
import React from 'react';
import dynamic from "next/dynamic";

const APIKeyPage = dynamic(() => import("./page"));

const APIKeyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
    <SessionProvider>
      <APIKeyPage />
    </SessionProvider>
    </main>
  );
}

export default APIKeyLayout;

