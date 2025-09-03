import { Link, NavLink } from "react-router-dom";
import { Menu, Plane, Hotel, Wallet, BookUser, BriefcaseBusiness, Home as HomeIcon, SquareGanttChart } from "lucide-react";

const navItems = [
  { to: "/passport", label: "Passport", icon: BookUser },
  { to: "/visa", label: "Visa", icon: Wallet },
  { to: "/flights", label: "Flight", icon: Plane },
  { to: "/hotels", label: "Hotels", icon: Hotel },
  { to: "/holidays", label: "Holiday", icon: SquareGanttChart },
  { to: "/umrah", label: "Umrah", icon: HomeIcon },
  { to: "/work-visa", label: "Work Visa Jobs", icon: BriefcaseBusiness },
  { to: "/contact", label: "Contact", icon: HomeIcon },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2">
              <img src="/vite.svg" alt="Logo" className="h-7 w-7" />
              <span className="text-xl font-semibold tracking-tight">Samiha Air</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="hidden sm:inline-flex items-center rounded-full border border-slate-300 px-3 sm:px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Login / Signup
            </Link>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 md:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}


