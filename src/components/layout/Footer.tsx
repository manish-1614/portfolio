export function Footer() {
    return (
        <footer className="w-full border-t border-slate-800 bg-slate-950/50 py-8 mt-20">
            <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center justify-center gap-2">
                <p className="text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Manish Kumar Prajapati. Built with Next.js & Tailwind.
                </p>
            </div>
        </footer>
    );
}
