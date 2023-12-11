import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ContactForm from "../ContactForm/ContactForm";
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
            <ContactForm></ContactForm>
            <Resume></Resume>
        </div>
    );
};

export default Home;