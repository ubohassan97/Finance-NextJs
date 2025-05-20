"use client";

import { addSampleTransaction } from "@/lib/actions/manual-test";
import React from "react";

export default function TestPage() {
  return (
    <button
      onClick={() => {
        addSampleTransaction();
      }}
    >
      Add Sample Transaction
    </button>
  );
}
