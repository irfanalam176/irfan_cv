import type { Metadata } from "next";
import "./globals.scss";


export const metadata: Metadata = {
  title: "Irfan Alam | Software Engineer | Developer Portfolio",
  description: "Explore the professional portfolio and CV of Irfan Alam, a skilled software engineer with expertise in web development, programming, and software design. Learn more about his projects, experience, and skills.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
