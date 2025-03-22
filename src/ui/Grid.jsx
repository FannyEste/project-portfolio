import "./Grid.css";

export const Grid = ({ children, background, sectionType }) => {
  return (
    <section className={`${background}-background section-wrapper`}>
      <div className={`grid-section ${sectionType ? sectionType : ""}`}>
        {children}
      </div>
    </section>
  );
};
