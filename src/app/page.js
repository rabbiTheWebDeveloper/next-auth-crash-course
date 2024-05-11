import { auth } from "@/auth";
import { doSignIn, doSignout } from "./action";
import Image from "next/image";


export default async function Home() {
  const session=await auth();
  console.log(session)
  return (
    <section>
      {
        !session && <p>Not signed in</p>
      }
      <h1>Hello World</h1>

      <pre>{JSON.stringify(session, null, 2)}</pre>
      {
        session?.user && <p>hello {session.user.name}</p>
      }
      <div className="rounded-full ">
        <img  src={session?.user?.image} alt="Vercel Logo" width={72} height={16} />
      </div>
      <div className="flex gap-2">
      <form action={doSignIn}>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Google Signin</button>

      </form>
      <form action={doSignout}>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>

      </form>
      </div>
  
    </section>
  );
}
