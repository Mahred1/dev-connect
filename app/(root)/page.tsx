import { auth, signOut } from "@/auth";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export default async function Home() {
  
  return (
    <div className="mt-20" >
      <LocalSearch
      route="/" placeholder="search"  />
    </div>
  );
}
