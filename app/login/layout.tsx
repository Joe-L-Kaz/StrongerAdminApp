export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="w-full h-full justify-center items-center flex bg-zinc-50 font-sans dark:bg-black">
            {children}
        </div>
    );
}