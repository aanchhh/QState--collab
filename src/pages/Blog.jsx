import ButtonGradient from "../assets/svg/ButtonGradient";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import darkGradient from "../assets/dark-gradient.png";
import image from "../assets/background.jpg";

const Blog = () => {
  const handleReadMore = () => {
    alert("Navigating to blog post...");
  };
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] ">
        <div className="my-10 mx-32">
          <h1 className=" font-extrabold text-5xl mb-12 text-center text-neutral-800  bg-gradient-to-b from-neutral-100 via-neutral-100 to-neutral-500  text-transparent bg-clip-text">
            Welcome to our Blog!
          </h1>
          <div className="min-h-min grid grid-cols-3 mb-20 gap-5 items-center justify-center  ">
            <Card
              image={image}
              headline="Learn about LLMs and more"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
              onReadMore={handleReadMore}
            />
            <Card
              image={image}
              headline="Retrieval-Augmented Generation (RAG)"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
              onReadMore={handleReadMore}
            />
            <Card
              image={image}
              headline="Use of AI in the Financial Sector"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
              onReadMore={handleReadMore}
            />
            <Card
              image={image}
              headline="AI and Automation: Boon or Bane?"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
              onReadMore={handleReadMore}
            />
          </div>
          <Header />
          <Footer />
        </div>
        <ButtonGradient />
      </div>
    </>
  );
};

export default Blog;
