import React from "react";
import { Sidebar } from "./Sidebar";

export const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>
        <h1>MainContent</h1>
      </main>
    </div>
  );
};
