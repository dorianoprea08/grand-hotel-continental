type Room = { id: string; name: string; desc: string; image: string };

// Exemplu simplu – înlocuiește cu datele tale
const rooms: Room[] = [
  { id: "1", name: "Classic Room", desc: "Timeless comfort & style", image: "/rooms/room-1.jpg" },
  { id: "2", name: "Deluxe Suite", desc: "Spacious elegance", image: "/rooms/room-2.jpg" },
  { id: "3", name: "Executive Suite", desc: "Refined luxury", image: "/rooms/room-3.jpg" },
];

export default function Apartments() {
  return (
    <section className="py-10 sm:py-12 lg:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="heading-2 mb-6 sm:mb-8">Discover Our Rooms</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {rooms.map((room) => (
            <article key={room.id} className="rounded-2xl overflow-hidden border">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-auto object-cover aspect-[16/9]"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-semibold">{room.name}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{room.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
