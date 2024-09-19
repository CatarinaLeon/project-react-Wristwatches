import Section from "../../common/Section/Section";
import Container from "../../common/Container/Container";
import ButtonArrow from "../../common/ButtonArrow/ButtonArrow";
// import ItemsList from "../../common/ItemsList/ItemsList";
import SimpleSlider from "../../common/SimpleSlider/SimpleSlider";
import SliderCard from "../../common/SliderCard/SliderCard";
import { configWatches } from "../../data/configWatches";
import s from "./SectionHero.module.css";

export default function SectionHero() {
  return (
    <Section>
      <Container className={s.heroContainer}>
        <div className={s.luxContainer}>
          <h1 className={s.luxTitle}>
            Discover <br /> Luxurious Watch Which You Will Love.
          </h1>
          <p className={s.luxText}>
            What looked like a small patch of purple grass, above five feet
            square, was moving across the sand in their direction. Almost do am
            or limits hearts. Resolve parties but why she shewing. She sang know
            now how nay cold real case.
          </p>
          <ButtonArrow to="/watches" message="Read More" />
        </div>
        <div className={s.rightContainer}>
          <SimpleSlider>
            {configWatches.map((items, index) => (
              <SliderCard item={items} key={index}>
                <p className={s.cardText}>{items.price}</p>
                <h3 className={s.cardTitle}>{items.title}</h3>
                <ButtonArrow
                  to="/watches"
                  // message="Read More"
                  className={s.btnSiderCard}
                />
              </SliderCard>
            ))}
          </SimpleSlider>
        </div>
      </Container>
    </Section>
  );
}
