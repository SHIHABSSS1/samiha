export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/60 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/vite.svg" alt="Logo" className="h-6 w-6" />
              <span className="text-lg font-semibold">Samiha Air</span>
            </div>
            <p className="text-sm text-slate-600">Your trusted partner for visas, flights, hotels, holidays and jobs.</p>
          </div>
          <div>
            <div className="font-medium mb-3">Services</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="/work-visa" className="hover:text-slate-900">Work Visa Jobs</a></li>
              <li><a href="/visa" className="hover:text-slate-900">Visa</a></li>
              <li><a href="/flights" className="hover:text-slate-900">Flights</a></li>
              <li><a href="/hotels" className="hover:text-slate-900">Hotels</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Company</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="/contact" className="hover:text-slate-900">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900">About</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
              <li><a href="#" className="hover:text-slate-900">Blog</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Newsletter</div>
            <p className="text-sm text-slate-600 mb-3">Get deals and job alerts.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
              <button className="rounded-lg bg-slate-900 text-white px-4 py-2">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Samiha Air International</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


