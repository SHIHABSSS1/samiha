import Card from "../components/Card.jsx";

const packages = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  name: `Holiday Package ${i + 1}`,
  price: 299 + i * 50,
  img: `https://picsum.photos/seed/p${i}/600/400`,
}));

export default function Holidays() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {packages.map((p) => (
          <Card key={p.id} className="overflow-hidden">
            <img src={p.img} alt={p.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <div className="font-medium">{p.name}</div>
              <div className="text-slate-600 text-sm mb-3">From ${p.price}</div>
              <button className="rounded-lg bg-slate-900 text-white px-4 py-2 text-sm">View</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}


