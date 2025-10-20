export default function Index() {
  return (
    <div className="space-y-10 sm:space-y-12 lg:space-y-16">
      {/* HERO */}
      <section className="bg-background">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
            {/* IMAGINEA (din public/) */}
            <div className="order-1 md:order-none">
              <img
                src="/hero-1.jpg"
                alt="Grand Hotel Continental - exterior at night"
                className="w-full h-auto rounded-2xl object-cover aspect-[16/9] md:aspect-auto md:h-[520px]"
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* TEXTUL */}
            <div className="space-y-4 sm:space-y-5">
              <p className="text-xs sm:text-sm tracking-[0.18em] uppercase text-muted-foreground">
                Historic elegance meets modern luxury
              </p>
              <h1 className="leading-tight font-semibold text-[clamp(1.6rem,4.8vw,2.75rem)]">
                Your Sanctuary in the Heart of Bucharest
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-prose">
                Experience two centuries of refined hospitality on iconic Calea Victoriei...
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
                <a href="/booking" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto h-11 sm:h-12 px-5 sm:px-6 rounded-full font-medium bg-primary text-primary-foreground">
                    Book Your Stay
                  </button>
                </a>
                <a href="/apartments" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto h-11 sm:h-12 px-5 sm:px-6 rounded-full border border-primary/40">
                    Explore Our Rooms
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-2">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[clamp(1.25rem,3.2vw,2rem)] font-semibold mb-3">
            Discover Your Refined Escape
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl">
            Lovingly restored to preserve its timeless elegance...
          </p>
          <div className="mt-6">
            <a href="/about">
              <button className="h-11 sm:h-12 px-5 sm:px-6 rounded-full bg-primary text-primary-foreground">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
