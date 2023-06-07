import "./globals.css";

export const metadata = {
  title: "Tareas TODOCA AI",
  description: "Hecho con Amor por TODOCA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f5f6f8]">{children}</body>
    </html>
  );
}
