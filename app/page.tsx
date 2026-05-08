import DestinationCard from "@/components/DestinationCard";

export default function Home() {

  const destinations =[
    {
      city: "Beijing",
      description: "Home of the Great Wall and the Forbidden City."
    },
    {
      city: "Shangai",
      description: "A modern city with a famous waterfront called the Bund."
    },
    {
      city: "Chengdu",
      description: "Known for giant pandas and spicy food."
    },
    {
      city: "Xian",
      description: "Where you can see the famous Terracotta Army."
    }
  ];

  return (
    <>
      <main>
        <section id="about">
          <h2>About China</h2>
          <p>
            China is one of the oldest civilizations in the world with over 5,000 years of history. It is a huge country with many different landscapes, cultures and languages. I have always wanted to visit China because of its history and food.
          </p>
        </section>

        <section id="destinations">
          <h2>Top Destinations</h2>
          
          <div className="destination-grid">
            {destinations.map((destination) => (
              <DestinationCard 
                key={destination.city}
                city={destination.city}
                description={destination.description}
              />
            ))}
          </div>

        </section>

      <section id="food">
        <h2>Chinese Food</h2>
        <p>Chinese food is very popular all over the world. Some dishes I want to try are:</p>
        <ul>
          <li>Peking Duck</li>
          <li>Dumplings (Dim Sum)</li>
          <li>Fried Rice</li>
          <li>Hot Pot</li>
        </ul>
      </section>

      <section id="tips">
        <h2>Travel Tips</h2>
        <p>If you are planning to visit China, here are a few things to keep in mind:</p>
        <ul>
          <li>You will need a visa before you travel.</li>
          <li>The currency is the Chinese Yuan (CNY).</li>
          <li>The best time to visit is spring or autumn.</li>
          <li>Google and social media are blocked, so bring a VPN.</li>
        </ul>
      </section>
      </main>
    </>
  );
}