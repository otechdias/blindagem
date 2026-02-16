import Banner from "./components/Banner";
import NewQuestions from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ReviewsSection from "./components/ReviewSection";
import Section2 from "./components/Section2";
import SmallSection from "./components/SmallSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <Section2 />
      <SmallSection />
      <ReviewsSection />
      <NewQuestions />
      <Footer />
    </div>
  );
}
