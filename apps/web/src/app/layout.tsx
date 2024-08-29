import { Metadata } from "next";
import "../assets/globals.css";
// import "@package/ui/styles.css";

export const metadata: Metadata = {
    title: "Web",
    description: "Web app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="retro">
            <body>{children}</body>
        </html>
    );
}
