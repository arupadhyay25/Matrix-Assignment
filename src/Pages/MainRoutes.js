import React from "react";
import { Route, Routes } from "react-router-dom";
import TokenAddress from "./TokenAddress";
import PairAddress from "./PairAddress";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TokenAddress />} />
      <Route path="/pairaddress" element={<PairAddress />} />
    </Routes>
  );
};
