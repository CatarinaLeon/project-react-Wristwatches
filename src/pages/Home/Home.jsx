import SectionHero from "../../components/SectionHero/SectionHero";
import SectionFeaturedProduct from "../../components/SectionFeaturedProduct/SectionFeaturedProduct";
import SectionFeatures from "../../components/SectionFeatures/SectionFeatures";
import SectionTrending from "../../components/SectionTrending/SectionTrending";
import SectionCategories from "../../components/SectionCategories/SectionCategories";
import SectionBlog from "../../components/SectionBlog/SectionBlog";

export default function Home() {
  return (
    <>
      <SectionHero></SectionHero>
      <SectionFeaturedProduct></SectionFeaturedProduct>
      <SectionFeatures></SectionFeatures>
      <SectionTrending></SectionTrending>
      <SectionCategories></SectionCategories>
      <SectionBlog></SectionBlog>
    </>
  );
}
