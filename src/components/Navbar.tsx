  import React, { useContext } from "react";
import { Abril_Fatface as FontAbr } from "next/font/google";
import { cn } from "@/lib/utils";
import { Rocket } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { WorkSpaceContext } from "@/store/context";

type Props = {};

export const fontAbr = FontAbr({
  subsets: ["latin"],
  variable: "--font-abr",
  weight: "400",
});

const Navbar = (props: Props) => {
  const {
    state: { author } = {
      author: null,
    },
    dispatch,
  } = useContext(WorkSpaceContext);
  return (
    <div className="bg-slate-100 h-16 p-5 border border-b-slate-300 flex justify-between">
      <h2
        className={cn(
          fontAbr.variable,
          " flex text-slate-500 text-xl font-bold"
        )}
      >
        <Rocket className="mr-1" />
        CMS | Documentation Editor
      </h2>
      <div className="flex justify-center items-cente">
        <h2 className="text-green-500">
          <b>@{author?.userName}</b>
        </h2>
        <Avatar className="ml-2">
          <AvatarImage src="https://yt3.ggpht.com/yti/ANjgQV9o_GRiWFVn4Dzc7K5fcjVYk43mkZfXAZs2YTPhlOiSMsI=s88-c-k-c0x00ffffff-no-rj" />
          <AvatarFallback>DP</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
