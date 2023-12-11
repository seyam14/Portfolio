import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ContactForm from "../ContactForm/ContactForm";
import Education from "../Education/Education";
import MySkillsSection from "../MySkillsSection/MySkillsSection";
import Projects from "../Projects/Projects";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MySkillsSection></MySkillsSection>
            <Projects></Projects>
            <Education></Education>
            <AboutMe></AboutMe>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;