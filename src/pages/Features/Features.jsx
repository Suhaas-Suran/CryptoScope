import './Features.css';

const Features = () => {
  return (
    <div className="features">
      <section className="hero">
        <h1>Key Features of CryptoScope</h1>
        <article className="feature">
          <h3>1. Live Cryptocurrency Price Tracking</h3>
          <p>
            CryptoScope allows users to track the latest prices of top cryptocurrencies in real-time. From Bitcoin and Ethereum to lesser-known altcoins, the platform continuously updates market data.
          </p>
        </article>
        <article className="feature">
          <h3>2. Detailed Cryptocurrency Information</h3>
          <p>
            CryptoScope provides in-depth information about each cryptocurrency, including Market Cap, 24-Hour Volume, Price History, and Circulating Supply.
          </p>
        </article>
        <article className="feature">
          <h3>3. Real-Time Updates</h3>
          <p>
            Stay ahead of the market with CryptoScope’s live updates, so you can react quickly to price movements.
          </p>
        </article>
        <article className="feature">
          <h3>4. User-Friendly Interface</h3>
          <p>
            CryptoScope offers an intuitive and seamless design, ensuring a smooth experience even for beginners.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Features;
