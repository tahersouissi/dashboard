import { useSession, signIn, signOut } from "next-auth/react"
import Nav from"components/Nav";
import { Children } from "react";

export default function Layout({children}) {
  const { data: session } = useSession();
  if(!session){

    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
       <div className="text-center w-full">
         <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg">
          Login with google</button></div>
      </div>
    );

  }

  return (
    <div className="bg-blue-900 min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mr-2 mb-2 mt-2 rounded-lg p-4 ">{children}</div>
    </div>

  );

}
