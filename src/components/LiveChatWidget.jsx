import { useState } from "react";

export default function LiveChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-3 sm:right-4 bottom-4 z-50">
      {open && (
        <div className="mb-3 w-80 max-w-[92vw] rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900 text-white">
            <div className="text-sm font-medium">Live Chat</div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white">×</button>
          </div>
          <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
            <div className="text-xs text-slate-600">Hi! How can we help you today?</div>
            <div className="flex items-center gap-2">
              <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Type your message..." />
              <button className="rounded-lg bg-slate-900 text-white px-3 py-2 text-xs">Send</button>
            </div>
            <div className="text-[11px] text-slate-500">Note: This is a demo widget.</div>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-3 shadow-lg hover:shadow-xl transition-shadow"
        aria-expanded={open}
      >
        <span className="text-sm font-medium">Live Chat</span>
      </button>
    </div>
  );
}


