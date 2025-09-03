import Card from "../components/Card.jsx";

const jobs = [
  { title: "Indoor/Outdoor Cleaner", img: "https://images.pexels.com/photos/6197124/pexels-photo-6197124.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Coffee shop / Restaurant worker", img: "https://images.pexels.com/photos/3801446/pexels-photo-3801446.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Warehouse", img: "https://images.pexels.com/photos/4483774/pexels-photo-4483774.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Drivers", img: "https://images.pexels.com/photos/1397751/pexels-photo-1397751.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Operators", img: "https://images.pexels.com/photos/4484072/pexels-photo-4484072.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Technicians", img: "https://images.pexels.com/photos/2467235/pexels-photo-2467235.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Welders", img: "https://images.pexels.com/photos/2372275/pexels-photo-2372275.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Carpenters (Staring / Finishing)", img: "https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Steel fixer", img: "https://images.pexels.com/photos/5854199/pexels-photo-5854199.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Plumber", img: "https://images.pexels.com/photos/5854193/pexels-photo-5854193.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Mason", img: "https://images.pexels.com/photos/5325639/pexels-photo-5325639.jpeg?auto=compress&cs=tinysrgb&w=800" },
];

const countries = ["Saudi Arabia", "UAE", "Qatar", "Bahrain", "Oman"];

export default function WorkVisa() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <Card className="p-6 ring-1 ring-amber-400/40 bg-gradient-to-br from-amber-50 to-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Work Visa Jobs</h3>
            <p className="text-slate-600 text-sm">High demand roles with competitive salary</p>
          </div>
          <div className="flex items-center gap-2">
            <select className="rounded-lg border border-slate-300 px-3 py-2">
              {countries.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <button className="rounded-lg bg-slate-900 text-white px-4 py-2">Filter</button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((j, idx) => (
          <Card key={j.title} className="overflow-hidden">
            <img src={j.img} alt={j.title} className="h-40 w-full object-cover" />
            <div className="p-5">
              <div className="font-medium">{j.title}</div>
              <div className="text-sm text-slate-600">Country: {countries[idx % countries.length]}</div>
              <div className="text-sm text-slate-600 mb-3">Salary: ${400 + idx * 25} - ${600 + idx * 30}</div>
              <div className="flex items-center gap-2">
                <button className="rounded-lg bg-slate-900 text-white px-4 py-2 text-sm">Book now</button>
                <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm">Details</button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}


