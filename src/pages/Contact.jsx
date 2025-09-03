export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <form className="space-y-4">
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Full Name" />
          <input type="email" className="w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Email" />
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Subject" />
          <textarea className="w-full rounded-lg border border-slate-300 px-3 py-2 min-h-32" placeholder="Your message" />
          <button className="rounded-lg bg-slate-900 text-white px-4 py-2">Send Message</button>
        </form>
        <div className="space-y-3 text-slate-700">
          <p><span className="font-medium">Head Office:</span> House 00, Road 00, Dhaka</p>
          <p><span className="font-medium">Phone:</span> +8801XXXXXXXXX</p>
          <p><span className="font-medium">Email:</span> info@samihaair.com</p>
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-64 rounded-xl border border-slate-200"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}


