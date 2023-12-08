import Link from 'next/link';
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
// import prisma from "@/app/libs/prisma";
// import React from 'react';
import Image from 'next/image';


export default function Home() {
    return (
      <main className="bg-[#172554] h-screen w-screen">
        <div className="w-screen flex flex-col">
          <h1 className="text-4xl text-teal-100 font-bold my-0 text-center w-screen pt-20">Wecome to Quiz App</h1>
          <Link href='/quiz' className="flex justify-center">
            <button className="text-2xl w-screen text-center text-white bg-[#334155] w-fit px-40 py-2 mt-6 rounded hover:bg-sky-700">Start Quiz</button>
          </Link>
        </div>
      </main>
    );
  }

// const getCurrentUser = async () => {
//   try {
//     const session = await getServerSession(authOptions);
//     if (!session?.user?.email) return;
//     const currentUser = await prisma.user.findUnique({
//       where: { email: session.user.email }
//     });
//     if (!currentUser) return;
//     return currentUser;
//   } catch (e: any) {
//     // simply ignores if no user is logged in
//     return;
//   }
// };

// export default async function Home() {
//     const user = await getCurrentUser();
  
//     if (!user) 
//       return (
//         <>
//           <h3>You are currently not logged in!</h3>
//           <Link href="/auth/login">Login to my account</Link>
//         </>
//       );
  
//     return (
//       <>
//         <Image
//           style={{ borderRadius: "50%" }}
//           src={user.image || "default.jpg"}
//           width={100}
//           height={100}
//           alt="Profile Image"
//         />
//         <h3>Name: {user.name}</h3>
//         <p>Email: {user.email}</p>
//       </>
//     );
//   }