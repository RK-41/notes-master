import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) redirect("/notes");

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        {/* <Image src={logo} alt="NotesMaster" width={100} height={100} /> */}
        <Button>°°°</Button>
        <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          NotesMaster
        </span>
      </div>

      {/* <p className="max-w-prose text-center">
        An intelligent notes-taking app with AI integration, built with OpenAI,
        Pinecone, Next.js, Shadcn UI, Clerk, and more.
      </p> */}

      {/* <p className="max-w-prose text-center">
        A notes-taking app with Authentication, built with Next.js, Shadcn UI,
        Clerk, and more.
      </p> */}

      <br />

      <Button size="lg" asChild>
        <Link href="/sign-in">Open</Link>
      </Button>
    </main>
  );
}
