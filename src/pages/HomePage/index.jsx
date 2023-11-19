import FlexWrapper from "@components/FlexWrapper";
import Intro from "@components/Intro";
import PageAnimation from "@components/PageAnimation";

const HomePage = () => {
  return (
    <PageAnimation>
      <FlexWrapper>
        <Intro />
      </FlexWrapper>
    </PageAnimation>
  );
};

export default HomePage;
