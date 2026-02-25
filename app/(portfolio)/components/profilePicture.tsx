"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

export default function ProfilePicture() {
    const pfps = [ "/pfp1.jpg", "/pfp2.jpg", "/pfp3.jpg", "/pfp4.jpg" ];
    const [ pfp, setPfp ] = useState<string | null>(null);

    // function to get a random integer between 0 and max - 1
    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    useEffect(() => {
        const randomIndex = getRandomInt(pfps.length);
        setPfp(pfps[ randomIndex ]);

        return () => {
            setPfp(null);
        }
    }, []);

    return (
        <Avatar className="size-24 ring-2 ring-border">
            <AvatarImage src={pfp || "none"} alt="Aswin Lal M" />
            <AvatarFallback className="text-2xl font-semibold bg-accent text-accent-foreground">
                AL
            </AvatarFallback>
        </Avatar>
    );
}