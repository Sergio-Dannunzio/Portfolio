import ProfileCard from "../components/ProfileCard";
import ProjectsCard from "../components/ProjectsCard";

const Home = () => {
  return (
    <>
        <div>
            <ProfileCard></ProfileCard>
            <div className="my-8">
              <ProjectsCard></ProjectsCard>
            </div>
        </div>

    </>
  );
};

export default Home;
