import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export default async function Home() {
  return (
    <div>
      <form
        className="mt-20"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button className="bg-gray-800 text-white">Logout</Button>
      </form>
    </div>
  );
}
