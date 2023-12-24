"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <>
        <div className="bg-black">Name : {session?.user?.name}</div>
        <div>Email : {session?.user?.email}</div>
        <div className="rounded-full border">
          <img
            src={session?.user?.image}
            width={30}
            height={30}
            className="rounded-md"
          />
        </div>
        <button
          type="button"
          onClick={() => {
            signOut();
          }}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <button type="button" onClick={() => signIn("github")}>
        Sign in with github
      </button>
      <button type="button" onClick={() => signIn("google")}>
        Sign in with google
      </button>
    </>
  );
}
