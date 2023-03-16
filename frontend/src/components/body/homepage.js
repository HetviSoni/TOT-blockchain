import Boy from "./boy";
import Container from "./container";
import './homepage.css';
import Header from "../header/header";

const HomePage = () => {
    return (
        <section>
            <Header />
            <div className="home">
                <Boy classname="img" fade={true} />
                <Container className="home--content" />
            </div>
        </section>
    )
}
export default HomePage;