"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeyFormUrlQuery } from "@/lib/url";

type Props = {
  route: string;
  placeholder: string;
  imgSrc?: string;
  otherClasses?: string;
};
const LocalSearch = ({ route, placeholder, imgSrc, otherClasses }: Props) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const router = useRouter();
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState(query);


  
  useEffect(() => {
    if (searchQuery) {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "query",
        value: searchQuery,
      });

      router.push(newUrl, { scroll: false });
    }else{
        if(pathname === route){
            const newUrl = removeKeyFormUrlQuery({
                params: searchParams.toString(),
                keysToRemove:["query"]
            })

            router.push(newUrl,{scroll:false})
        }
    }
  }, [pathname,route,router,searchQuery]);

  return (
    <div>
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder}
        className={`${otherClasses}`}
      ></Input>
    </div>
  );
};

export default LocalSearch;
