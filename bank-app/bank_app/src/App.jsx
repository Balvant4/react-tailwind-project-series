import styles from "./style";
import {
  Navbar,
  Billing,
  Business,
  Carddeal,
  Client,
  Cta,
  Footer,
  Hero,
  Stats,
  Testimonials,
} from "./components";

const App = () => {
  return (
    <div className=" bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingx} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <Carddeal />
          <Testimonials />
          <Client />
          <Cta />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
