import { Documentation } from "@/app/components/documentation/Documentation";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Featurs | SiEducational",
};

export default function Page() {
    return (
        <>
            <Documentation />
        </>
    );
};
