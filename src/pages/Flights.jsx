import Card from "../components/Card.jsx";

export default function Flights() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Book Flights</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <select className="rounded-lg border border-slate-300 px-3 py-2 md:col-span-2">
            <option>From Airport</option>
            <option>DAC - Dhaka</option>
            <option>DXB - Dubai</option>
            <option>JED - Jeddah</option>
          </select>
          <select className="rounded-lg border border-slate-300 px-3 py-2 md:col-span-2">
            <option>To Airport</option>
            <option>DAC - Dhaka</option>
            <option>DXB - Dubai</option>
            <option>JED - Jeddah</option>
          </select>
          <input type="date" className="rounded-lg border border-slate-300 px-3 py-2" />
        </div>
        <div className="mt-4">
          <button className="rounded-lg bg-slate-900 text-white px-4 py-2">Search Flights</button>
        </div>
      </Card>
    </div>
  );
}


