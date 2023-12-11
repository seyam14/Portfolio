import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import MySkillsSection from "../MySkillsSection/MySkillsSection";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MySkillsSection></MySkillsSection>
            <Projects></Projects>
            <AboutMe></AboutMe>
            <Resume></Resume>
        </div>
    );
};

export default Home;