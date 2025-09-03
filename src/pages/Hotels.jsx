import Card from "../components/Card.jsx";

const hotels = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  name: `Hotel ${i + 1}`,
  price: 80 + i * 10,
  img: `https://picsum.photos/seed/h${i}/400/300`,
}));

export default function Hotels() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {hotels.map((h) => (
          <Card key={h.id} className="overflow-hidden">
            <img src={h.img} alt={h.name} className="h-40 w-full object-cover" />
            <div className="p-4">
              <div className="font-medium">{h.name}</div>
              <div className="text-slate-600 text-sm mb-3">From ${h.price}/night</div>
              <button className="rounded-lg bg-slate-900 text-white px-4 py-2 text-sm">Book</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}


