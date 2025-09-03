import Card from "../components/Card.jsx";

export default function Umrah() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Umrah Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: "Visa", desc: "Fast processing" },
            { title: "Ticket", desc: "Best fares" },
            { title: "Hotel", desc: "Bundle & save" },
          ].map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 p-4">
              <div className="font-medium">{s.title}</div>
              <div className="text-sm text-slate-600">{s.desc}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}


