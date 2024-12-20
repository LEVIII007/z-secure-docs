import SignIn from "@/components/signin-button";
import {auth, signIn, signOut} from "../../../auth";

export default async function Profile() {
    const session = await auth();
    console.log(session);
  return (
    <div>
      <h1>Profile</h1>
      
      <SignIn />
    </div>
  );
}