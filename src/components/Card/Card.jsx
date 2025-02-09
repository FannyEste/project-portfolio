import "./Card.css";
import TextBox from "../TextBox/TextBox"; 
import Icon from "../Icon/Icon"; 
import livedemoIcon from "../../assets/livedemo.svg"; 
import githubIcon from "../../assets/github.svg";
import docIcon from "../../assets/Doc.svg";
import Button from "../Button/Button";


export const Card = ({ borderColor, imageSource, cardTitle, cardDescription, sectionType, icons = [], liveDemo, repoLink, date }) => {
    return (
        <article className={`card ${sectionType}`}>
            
            <div className="card-image">
                <img src={imageSource} className={`bordered-image ${borderColor}`} alt="Project Visual" />
            </div>

            <div className="card-content">
                {/* 🔹 Move Date Above the Title */}
                {date && (
                    <div className="date-container p"> {/* ✅ Adds `.p` class to match text style */}
                        <Icon text={date} className="p" /> {/* ✅ Ensures text follows `.p` style */}
                    </div>
                )}

                <TextBox text={cardTitle} textType="h3" sectionType={sectionType} />
                <TextBox text={cardDescription} textType="p" sectionType={sectionType} />  

                {/* 🔹 Tech Icons Below Description */}
                {icons.length > 0 && (
                    <div className="icon-container p">
                        {icons.map((icon, index) => (
                            <Icon key={index} text={icon} />
                        ))}
                    </div>
                )}

                {/* 🔹 Conditional Button Rendering */}
                <div className="button-container">
                    {sectionType === "projects" ? (
                        <Button 
                            buttons={[
                                { text: "Live demo", icon: <img src={livedemoIcon} alt="Live Demo" className="svg-icon" />, link: liveDemo },
                                { text: "View the code", icon: <img src={githubIcon} alt="GitHub" className="svg-icon" />, link: repoLink }
                            ]}
                        />
                    ) : (
                        <Button 
                            buttons={[
                                { text: "Read article", icon: <img src={docIcon} alt="Read Article" className="svg-icon" />, link: "#" }
                            ]}
                        />
                    )}
                </div>
            </div>
        </article>
    );
};