"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function createMessage(formData: FormData): Promise<void> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !phone || !email || !message) {
    throw new Error("All fields are required");
  }

  if (!email.includes("@")) {
    throw new Error("Please enter a valid email address");
  }

  if (phone.length < 10) {
    throw new Error("Please enter a valid phone number");
  }

  await prisma.message.create({
    data: {
      name,
      phone,
      email,
      message,
    },
  });

  revalidatePath("/messages");

  redirect("/messages?success=1");
}