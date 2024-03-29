/*
  Notes Home Page
*/

import Note from "@/components/Note";
import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "NotesMaster - Notes",
};

export default async function NotesPage() {
  const { userId } = auth();

  //   if (!userId)
  //    throw Error("User ID undefined");

  if (!userId) {
    console.log("UserId not found, redirecting to sign-in");

    redirect("/sign-in");
  }

  const allNotes = await prisma.note.findMany({ where: { userId } });

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {allNotes.map((note) => (
        <Note note={note} key={note.id} />
      ))}

      {allNotes.length === 0 && (
        <div className="col-span-full text-center">{"No notes found"}</div>
      )}
    </div>
  );
}
