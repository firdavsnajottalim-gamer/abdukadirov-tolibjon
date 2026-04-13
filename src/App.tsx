/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Smartphone, 
  Battery, 
  Cpu, 
  ShieldCheck, 
  Wrench, 
  Zap, 
  Camera, 
  Wifi, 
  Volume2,
  PhoneCall,
  MapPin,
  Clock
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Tolib Sassucha sen nega ishlatyabsan",
    description: "Tolib Sassucha sen nega ishlatyabsan",
    price: "Tolib Sassucha sen nega ishlatyabsan",
    icon: <Smartphone className="w-8 h-8 text-blue-400" />,
  },
  {
    id: 2,
    title: "Tolib Sassucha sen nega ishlatyabsan",
    description: "Tolib Sassucha sen nega ishlatyabsan",
    price: "Tolib Sassucha sen nega ishlatyabsan",
    icon: <Battery className="w-8 h-8 text-green-400" />,
  },
  {
    id: 3,
    title: "Tolib Sassucha sen nega ishlatyabsan",
    description: "Tolib Sassucha sen nega ishlatyabsan",
    price: "Tolib Sassucha sen nega ishlatyabsan",
    icon: <Cpu className="w-8 h-8 text-purple-400" />,
  },
  {
    id: 4,
    title: "Tolib Sassucha sen nega ishlatyabsan",
    description: "Tolib Sassucha sen nega ishlatyabsan",
    price: "Tolib Sassucha sen nega ishlatyabsan",
    icon: <ShieldCheck className="w-8 h-8 text-yellow-400" />,
  },
  {
    id: 5,
    title: "Tolib Sassucha sen nega ishlatyabsan",
    description: "Tolib Sassucha sen nega ishlatyabsan",
    price: "Tolib Sassucha sen nega ishlatyabsan",
    icon: <Camera className="w-8 h-8 text-pink-400" />,
  },
  {
    id: 6,
    title: "Tolib Sassucha sen nega ishlatyabsan",
    description: "Tolib Sassucha sen nega ishlatyabsan",
    price: "Tolib Sassucha sen nega ishlatyabsan",
    icon: <Zap className="w-8 h-8 text-orange-400" />,
  },
  {
    id: 7,
    title: "Tolib Sassucha sen nega ishlatyabsan",
    description: "Tolib Sassucha sen nega ishlatyabsan",
    price: "Tolib Sassucha sen nega ishlatyabsan",
    icon: <Volume2 className="w-8 h-8 text-cyan-400" />,
  },
  {
    id: 8,
    title: "Tolib Sassucha sen nega ishlatyabsan",
    description: "Tolib Sassucha sen nega ishlatyabsan",
    price: "Tolib Sassucha sen nega ishlatyabsan",
    icon: <Wifi className="w-8 h-8 text-indigo-400" />,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30 relative overflow-x-hidden">
      {/* Floating Giant Message */}
      <div className="fixed inset-0 pointer-events-none z-[100] flex items-center justify-center overflow-hidden">
        <motion.h2 
          animate={{ 
            color: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff", "#ff0000"],
            scale: [1, 1.1, 1],
            rotate: [-5, 5, -5]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="text-4xl md:text-8xl font-black text-center uppercase tracking-tighter px-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]"
        >
          halimi seni tolib sassucha yana ishlatdingmi
        </motion.h2>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">Tolib <span className="text-blue-500">Sassucha sen nega ishlatyabsan</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Tolib Sassucha sen nega ishlatyabsan</a>
            <a href="#about" className="hover:text-white transition-colors">Tolib Sassucha sen nega ishlatyabsan</a>
            <a href="#contact" className="hover:text-white transition-colors">Tolib Sassucha sen nega ishlatyabsan</a>
          </nav>
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
            Tolib Sassucha sen nega ishlatyabsan
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Tolib <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Sassucha sen nega ishlatyabsan
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Tolib Sassucha sen nega ishlatyabsan Tolib Sassucha sen nega ishlatyabsan
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all hover:scale-105 active:scale-95">
                Tolib Sassucha sen nega ishlatyabsan
              </button>
              <button className="w-full sm:w-auto border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/5 transition-all">
                Tolib Sassucha sen nega ishlatyabsan
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Tolib Sassucha sen nega ishlatyabsan</h2>
              <p className="text-gray-500">Tolib Sassucha sen nega ishlatyabsan Tolib Sassucha sen nega ishlatyabsan</p>
            </div>
            <div className="text-blue-500 font-medium cursor-pointer hover:underline">
              Tolib Sassucha sen nega ishlatyabsan →
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-black border border-white/5 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-blue-500/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-gray-400 text-xs uppercase tracking-widest font-semibold">Tolib Sassucha sen nega ishlatyabsan</span>
                  <span className="text-lg font-bold text-blue-400">{service.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Tolib Sassucha sen nega ishlatyabsan</h2>
                <p className="text-blue-100 text-lg mb-10">
                  Tolib Sassucha sen nega ishlatyabsan Tolib Sassucha sen nega ishlatyabsan
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <PhoneCall className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Tolib Sassucha sen nega ishlatyabsan</p>
                      <p className="font-bold text-xl">Tolib Sassucha sen nega ishlatyabsan</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Tolib Sassucha sen nega ishlatyabsan</p>
                      <p className="font-bold text-xl">Tolib Sassucha sen nega ishlatyabsan</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Tolib Sassucha sen nega ishlatyabsan</p>
                      <p className="font-bold text-xl">Tolib Sassucha sen nega ishlatyabsan</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Tolib Sassucha sen nega ishlatyabsan</label>
                    <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="Tolib Sassucha sen nega ishlatyabsan" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Tolib Sassucha sen nega ishlatyabsan</label>
                    <input type="tel" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="Tolib Sassucha sen nega ishlatyabsan" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Tolib Sassucha sen nega ishlatyabsan</label>
                    <textarea className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 h-32" placeholder="Tolib Sassucha sen nega ishlatyabsan"></textarea>
                  </div>
                  <button className="w-full bg-white text-blue-600 font-bold py-4 rounded-xl hover:bg-blue-50 transition-colors">
                    Tolib Sassucha sen nega ishlatyabsan
                  </button>
                </form>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© 2026 Tolib Sassucha sen nega ishlatyabsan. Barcha huquqlar himoyalangan.</p>
      </footer>
    </div>
  );
}
