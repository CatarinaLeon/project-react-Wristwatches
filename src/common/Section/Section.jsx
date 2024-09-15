import s from "./Section.module.css";

export default function Section({ children, className }) {
  return (
    <section className={`${s.section} ${`${className} ${className}`}`}>
      {children}
    </section>
  );
}
