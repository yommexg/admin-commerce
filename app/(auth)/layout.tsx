import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yommex Auth Page",
  description: "Authentication Page for yommex store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-full">{children}</div>
  );
}
