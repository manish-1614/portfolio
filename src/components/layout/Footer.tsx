export function Footer() {
    return (
        <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950 py-8 transition-colors">
            <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center justify-center gap-2">
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                    &copy; {new Date().getFullYear()} Manish Kumar Prajapati. Built with Next.js & Tailwind.
                </p>
            </div>
        </footer>
    );
}
