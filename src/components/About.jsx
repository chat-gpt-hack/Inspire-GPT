import "../styles/about.scss";

export default function About() {
  return (
    <section className="about">
      <div className="about-text">
        <h2>
          InspireBOT <a className="accent">3000</a> & the DTD Hackathon
        </h2>
        <figure>
          <img
            src="src\assets\img\donthedev.jpg"
            className="don-img"
            alt="Don the Developer"
          />
          <figcaption>Don the Developer</figcaption>
        </figure>
        <p>
          Our team of three developers participated in the recent AI-themed
          hackathon, where we created a motivational app using AI. <br />
          <br />
          To generate motivational quotes, we utilized OpenAI's API and
          integrated it with React, JavaScript, JSX, and SCSS. For our app, we
          used a dataset that included the names of famous athletes and their
          sports. Our AI algorithm, powered by ChatGPT's API, generated
          motivational quotes from the athletes in the dataset. We used the
          generated quote to search for images related to the athlete's sport
          using the Unsplash API and paired the quote with the image. <br />
          <br />
          To create our app, we utilized React components to create a clean and
          organized user interface. The app displayed a motivational quote along
          with an image related to the athlete's sport on the homepage. Users
          could refresh the page to see a new quote and image. Throughout the
          hackathon, we provided daily status updates in Discord, summarizing
          what we accomplished for that day. We also collaborated with other
          participants, sharing ideas and getting feedback to improve our app.
          <br />
          <br />
          At the end of the four weeks, we were proud of what we had
          accomplished. Our app was functional and demonstrated our ability to
          utilize multiple APIs and technologies to create a unique product. We
          were excited to see the motivational impact our app had on users and
          were proud to showcase it as part of the hackathon. <br />
          <br />
          Overall, the hackathon was a fantastic learning experience for us. We
          gained valuable experience working collaboratively as a team and
          learning how to overcome challenges. We also learned how to utilize AI
          and other technologies to create a functional and unique web app. We
          look forward to continuing to build on our skills and can't wait for
          the next opportunity to participate in a hackathon.
        </p>
        <div className="link-container">
          <a
            href="https://www.donthedeveloper.tv/blog/mini-hackathon-ai"
            target="_blank"
          >
            Learn more about the Hackathon
          </a>
        </div>
      </div>
    </section>
  );
}
