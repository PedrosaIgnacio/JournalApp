import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { JournalScreen } from "../components/Journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/auth/*" element={<AuthRouter />} />
            <Route path="/" element={<JournalScreen />} />
            <Route path="*" element={<Navigate replace to="/auth/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
