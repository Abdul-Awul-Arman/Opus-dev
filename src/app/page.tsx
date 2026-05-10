import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Other sections can be added here */}
      <section className="py-20 container-wide">
        <h2 className="mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-8 bg-white rounded-3xl border border-surface-border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="mb-4 text-2xl font-bold">Strategy {i}</h3>
              <p className="text-text-secondary leading-relaxed">
                Empowering your business with data-driven insights and premium execution.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
