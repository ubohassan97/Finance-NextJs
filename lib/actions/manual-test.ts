"use server";

import { createTransaction } from "./transaction.actions";


export async function addSampleTransaction() {
  try {
    await createTransaction({
      name: "Coffee Purchase ☕",
      amount: "150",
      senderId: "682a651e001d9d5e4818",            // ← استبدلها بالقيمة الحقيقية من Appwrite
      senderBankId: "682b23ca00369a415f0c",        // ← من Bank Document
      receiverId: "682a651e001d9d5e4818",          // ← أو نفس الـ senderId لو تجربة فقط
      receiverBankId: "682a65770004d318305a",
      email: "sample@example.com",
    });

    console.log("✅ Sample transaction created successfully.");
  } catch (error) {
    console.error("❌ Failed to create sample transaction:", error);
  }
}
