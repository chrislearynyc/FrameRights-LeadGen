import Link from "next/link";

export function Footer() {
    return (
        <footer className="px-6 py-12 bg-white border-t border-slate-100">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="font-semibold text-slate-900">FrameRights</p>
                    <p className="text-sm text-slate-500 mt-1">Documentation-first licensing records for photographers.</p>
                </div>
                <div className="text-sm text-slate-400">
                    <p>We only use your email for FrameRights updates.</p>
                </div>
            </div>
        </footer>
    );
}
