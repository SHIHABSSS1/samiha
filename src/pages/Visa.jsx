import Card from "../components/Card.jsx";

const sections = [
  { title: "Work Permit / Employment Visa", highlight: true, items: ["Saudi Arabia", "UAE", "Qatar", "Bahrain"] },
  { title: "Tourist Visa", items: ["Thailand", "Malaysia", "Singapore", "UAE"] },
  { title: "Student Visa", items: ["UK", "Canada", "Australia", "Germany"] },
  { title: "Business Visa", items: ["China", "India", "Turkey", "USA"] },
];

export default function Visa() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      {sections.map((s) => (
        <Card key={s.title} className={`p-6 ${s.highlight ? "ring-1 ring-green-500/30" : ""}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            {s.highlight && (
              <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 text-xs font-medium px-2 py-1">Recommended</span>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {s.items.map((it) => (
              <button key={it} className="rounded-lg border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50">{it}</button>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}


