"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

const pfps = ["/pfp1.jpg", "/pfp2.jpg", "/pfp3.jpg", "/pfp4.jpg"];

export default function ProfilePicture() {
  const [pfp, setPfp] = useState<string | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- pfp is client-only randomness, can't run in render
    setPfp(pfps[Math.floor(Math.random() * pfps.length)]);
  }, []);

  return (
    <Avatar className="size-24 ring-2 ring-border transition-transform hover:scale-105">
      <AvatarImage src={pfp ?? undefined} alt="Aswin Lal M" />
      <AvatarFallback className="text-2xl font-semibold bg-accent text-accent-foreground">
        AL
      </AvatarFallback>
    </Avatar>
  );
}
