import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing">
      <section className="hero">
        <h1>CryptoScope Pricing</h1>
        <p>
          CryptoScope offers a free version that includes all essential features. Whether you're just getting started or looking for a more in-depth experience, CryptoScope has a solution that fits your needs.
        </p>
      </section>
      <section className="pricing-plans">
        <div className="plan">
          <h3>Free Plan</h3>
          <p>Track live cryptocurrency prices, basic information, and price history.</p>
          <span>$0</span>
        </div>
        <div className="plan">
          <h3>Pro Plan</h3>
          <p>Unlock advanced analytics, real-time notifications, and more data features.</p>
          <span>Soon to be released</span>
        </div>
        <div className="plan">
          <h3>Enterprise Plan</h3>
          <p>For large organizations needing custom solutions and dedicated support.</p>
          <span>Soon to be released</span>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
