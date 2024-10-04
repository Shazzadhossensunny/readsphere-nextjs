
import AuthorSpotlight from "./components/home/AuthorSpotLight";
import CallToAction from "./components/home/CallToAction";
import FeaturedBooks from "./components/home/FeaturedBooks";
import GenreSection from "./components/home/GenreSection";
import HeroSection from "./components/home/HeroSection";
import RecentReviews from "./components/home/RecentReviews";
import TopRatedBooks from "./components/home/TopRatedBooks";

export default function Home() {
  const authorId = "OL23919A";
  return (
        <>
          <HeroSection />
          <FeaturedBooks />
          <div>
      <AuthorSpotlight authorId={authorId} />
    </div>
          <TopRatedBooks />
          <GenreSection />
          <RecentReviews />
          <CallToAction />

        </>
  );
}
