import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trinity Worklink | Harrismith",
  description: "Find local work and trusted workers in Harrismith.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
