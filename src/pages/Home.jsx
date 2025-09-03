import React from "react";
import { Link } from "react-router-dom";
import { Plane, Building2, Wallet, BookUser, Hotel, BriefcaseBusiness, PlaneTakeoff, ArrowRight, Star, Globe, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Card = ({ children, className = "" }) => (
  <div className={`backdrop-blur-md bg-white/80 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const SearchBar = () => (
  <div className="relative">
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-white/90 text-sm font-medium">From</label>
          <input className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="Departure city" />
        </div>
        <div className="space-y-2">
          <label className="text-white/90 text-sm font-medium">To</label>
          <input className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="Destination" />
        </div>
        <div className="space-y-2">
          <label className="text-white/90 text-sm font-medium">Service</label>
          <select className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50">
            <option>Flight</option>
            <option>Visa</option>
            <option>Hotel</option>
          </select>
        </div>
        <div className="flex items-end">
          <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl px-6 py-3 font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
            Search <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const categories = [
  { label: "Work Visa Jobs", to: "/work-visa", icon: BriefcaseBusiness, color: "from-purple-500 to-indigo-600" },
  { label: "Passport", to: "/passport", icon: BookUser, color: "from-blue-500 to-cyan-600" },
  { label: "Visa", to: "/visa", icon: Wallet, color: "from-emerald-500 to-teal-600" },
  { label: "Flights", to: "/flights", icon: Plane, color: "from-orange-500 to-red-600" },
  { label: "Hotels", to: "/hotels", icon: Hotel, color: "from-pink-500 to-rose-600" },
  { label: "Holidays", to: "/holidays", icon: Building2, color: "from-amber-500 to-yellow-600" },
  { label: "Umrah", to: "/umrah", icon: PlaneTakeoff, color: "from-violet-500 to-purple-600" }
];

export default function Home() {
  const features = [
    { icon: Shield, title: "Trusted Service", desc: "ISO certified agency" },
    { icon: Globe, title: "Global Network", desc: "150+ destinations" },
    { icon: Clock, title: "24/7 Support", desc: "Round the clock assistance" },
    { icon: Star, title: "5-Star Rated", desc: "98% customer satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-400/25 to-cyan-400/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Hero background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-gray-900/70 to-indigo-900/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-emerald-200 to-teal-300 bg-clip-text text-transparent leading-tight">
              Book_Fly
                <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Explore
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Seamless travel solutions for visas, flights, hotels, and work opportunities worldwide
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <SearchBar />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-12">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl mb-3">
                    <feature.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">{feature.title}</h3>
                  <p className="text-white/70 text-xs">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Explore Our Services
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Comprehensive travel and employment solutions tailored for your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {categories.map((category, idx) => (
              <motion.div
                key={category.to}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Link to={category.to}>
                  <Card className="group p-6 text-center hover:-translate-y-2 transition-all duration-300 hover:scale-105">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-gray-800 font-semibold text-sm mb-2">{category.label}</h3>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Carousel */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {[{
              title: "Popular Visa Destinations",
              items: ["Saudi Arabia","UAE","Qatar","Bahrain","Oman","Malaysia","Singapore","Thailand","UK","Canada"].map((t, i) => ({
                title: t,
                img: `https://picsum.photos/seed/visa${i}/400/260`
              })),
              cta: "Apply Now",
              gradient: "from-emerald-500 to-teal-600"
            },{
              title: "Premium Hotels",
              items: Array.from({length: 10}).map((_, i) => ({
                title: `Luxury Hotel ${i+1}`,
                img: `https://picsum.photos/seed/hotel${i}/500/360`
              })),
              cta: "Book Now",
              gradient: "from-blue-500 to-cyan-600"
            },{
              title: "Holiday Packages",
              items: Array.from({length: 10}).map((_, i) => ({
                title: `Dream Package ${i+1}`,
                img: `https://picsum.photos/seed/holiday${i}/600/360`
              })),
              cta: "Explore",
              gradient: "from-purple-500 to-pink-600"
            },{
              title: "Work Visa Opportunities",
              items: [
                { title: "Cleaner", img: "https://images.pexels.com/photos/6197124/pexels-photo-6197124.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Driver", img: "https://images.pexels.com/photos/1397751/pexels-photo-1397751.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Technician", img: "https://images.pexels.com/photos/2467235/pexels-photo-2467235.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Welder", img: "https://images.pexels.com/photos/2372275/pexels-photo-2372275.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Carpenter", img: "https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Plumber", img: "https://images.pexels.com/photos/5854193/pexels-photo-5854193.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Mason", img: "https://images.pexels.com/photos/5325639/pexels-photo-5325639.jpeg?auto=compress&cs=tinysrgb&w=800" },
              ],
              cta: "Apply",
              gradient: "from-orange-500 to-red-600"
            }].map((block, blockIdx) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, x: blockIdx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">{block.title}</h3>
                  <Link to="#" className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-2 transition-colors">
                    View all <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  spaceBetween={20}
                  slidesPerView={1}
                  breakpoints={{
                    480: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                    1280: { slidesPerView: 6 },
                  }}
                  className="!pb-2"
                >
                  {block.items.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <Card className="group overflow-hidden hover:scale-105 transition-all duration-300">
                        <div className="relative">
                          <img src={item.img} alt={item.title} className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-800 mb-3">{item.title}</h4>
                          <button className={`w-full bg-gradient-to-r ${block.gradient} text-white rounded-xl px-4 py-2 text-sm font-medium hover:shadow-lg transition-all duration-300`}>
                            {block.cta}
                          </button>
                        </div>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Visa CTA */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/work-visa">
              <Card className="group overflow-hidden hover:scale-[1.02] transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                  <div className="relative overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/5854199/pexels-photo-5854199.jpeg?auto=compress&cs=tinysrgb&w=1200"
                      alt="Work Visa"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-transparent"></div>
                  </div>
                  <div className="p-8 lg:p-12 bg-gradient-to-br from-white via-purple-50 to-pink-50 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                          Work Visa Jobs
                        </h2>
                        <p className="text-purple-600 font-semibold">High Demand Opportunities</p>
                        <p className="text-gray-600 leading-relaxed">
                          Discover lucrative career opportunities abroad in construction, hospitality, healthcare, and technical fields with competitive salaries and benefits.
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {["Cleaner","Driver","Technician","Welder","Carpenter","Plumber"].map((job) => (
                          <span key={job} className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200">
                            {job}
                          </span>
                        ))}
                      </div>
                      
                      <button className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        Explore Opportunities
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl sm:text-4xl font-bold text-white">
                  Samiha Air International
                </h3>
                <p className="text-xl text-white/80 leading-relaxed">
                  Your trusted partner for comprehensive travel and employment services. We provide end-to-end assistance for visa processing, flight bookings, hotel reservations, holiday packages, and international work placements.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "50K+", label: "Happy Travelers", color: "from-emerald-400 to-teal-400" },
                  { value: "10K+", label: "Visas Processed", color: "from-blue-400 to-cyan-400" },
                  { value: "98%", label: "Success Rate", color: "from-purple-400 to-pink-400" },
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                  >
                    <Card className="p-6 text-center group hover:scale-105 transition-all duration-300">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Card className="overflow-hidden group">
                <img
                  src="https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Company overview"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partner Airlines */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8">
              <p className="text-center text-sm uppercase tracking-wider text-gray-500 mb-8">Trusted Partners</p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 items-center">
                {["Emirates","Qatar Airways","Etihad","Saudi","Biman","AirAsia"].map((airline, idx) => (
                  <motion.div
                    key={airline}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-gray-400">✈</span>
                    </div>
                    <div className="text-gray-700 font-medium text-sm">{airline}</div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Latest Insights</h3>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Expert tips and guides to make your travel and work abroad experience seamless
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "How to choose the best flight deals",
                img: "https://images.pexels.com/photos/1098741/pexels-photo-1098741.jpeg?auto=compress&cs=tinysrgb&w=800",
                category: "Travel Tips"
              },
              {
                title: "GCC Work Visa: Complete Documentation Guide",
                img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
                category: "Work Abroad"
              },
              {
                title: "Top luxury hotels in Dubai for business travelers",
                img: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800",
                category: "Accommodation"
              },
            ].map((post, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Link to="#">
                  <Card className="group overflow-hidden hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <img src={post.img} alt={post.title} className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Discover expert insights and practical tips to enhance your travel experience and make informed decisions.
                      </p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <span className="text-xs text-gray-500">5 min read</span>
                        <ArrowRight className="h-4 w-4 text-emerald-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Let us help you turn your travel and career dreams into reality with our expert guidance and comprehensive services.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-2xl px-8 py-4 font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                Get Started Today
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 rounded-2xl px-8 py-4 font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 text-center bg-white/90">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Subscribe to our newsletter</h3>
              <p className="text-gray-600 mb-6">Get flight deals, visa updates and job alerts straight to your inbox.</p>
              <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

    </div>
  );
}