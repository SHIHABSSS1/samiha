import { useState } from "react";
import Card from "../components/Card.jsx";

const tabs = ["New Issue", "Re-issue", "Date Change", "Name Change", "Address Change"];

export default function Passport() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl font-semibold mb-6">Passport Services</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`rounded-full px-4 py-2 text-sm font-medium border ${
              active === t ? "bg-slate-900 text-white" : "border-slate-300 hover:bg-slate-50"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">{active}</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <form className="space-y-4">
              <input className="w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Full Name" />
              <input className="w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Passport No (if any)" />
              <input type="date" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
              <button className="rounded-lg bg-slate-900 text-white px-4 py-2">Submit</button>
            </form>
          </div>
          <div className="text-sm text-slate-600">
            <p className="mb-2 font-medium">Instructions</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Provide accurate personal details</li>
              <li>Upload documents in original scan quality</li>
              <li>Processing may take 5-7 business days</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}


