"use client";

import Link from "next/link";
import { Button } from "@mui/material";
import { UserButton, useUser } from "@clerk/nextjs";
import React from "react";

export default function Navbar() {
    const { user, isLoaded } = useUser();
    return (
        <div className="fixed top-0 inset-x-0 h-fit border-b border-zinc-300 z-[10] py-4">
            <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
                {/* logo */}
                <Link href="/" className="flex gap-2 items-center">
                    <p className="hidden text-black-700 text-4xl font-medium md:block">
                        HUBS
                    </p>
                </Link>
                <div className="space-x-2">
                    {!isLoaded || !user ? (
                        <>
                            <Button variant="contained" href="/sign-in">
                                Sign In
                            </Button>
                            <Button variant="outlined" href="/sign-up">
                                Sign Up
                            </Button>
                        </>
                    ) : (
                        <>
                            <UserButton afterSignOutUrl="/" />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
