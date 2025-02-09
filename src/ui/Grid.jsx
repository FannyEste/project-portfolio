import "./Grid.css";

export const Grid = ({ children, background, sectionType }) => {
    return (
        <section className={`grid-section ${background}-background ${sectionType ? sectionType : ""}`}>
            {children}
        </section>
    );
};