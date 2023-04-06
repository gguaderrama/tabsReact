import React, { useState } from "react";
import "./index.css";

const FirstTab = () => {
  return (
    <div className="panel active">
      <p className="text-justify">
      Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. He has been featured in comic books, television shows, films, video games, novels, and plays.
      </p>
    </div>
  );
};

const SecondTab = () => {
  return (
    <div className="panel active">
      <p>
      Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963), and received his own title in Iron Man #1 (May 1968). In 1963, the character founded the Avengers superhero team with Thor, Ant-Man, Wasp and the Hulk.
      </p>
    </div>
  );
};

const ThirdTab = () => {
  return (
    <div className="panel active">
      <p>
      Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 18th film in the Marvel Cinematic Universe (MCU). The film was directed by Ryan Coogler, who co-wrote the screenplay with Joe Robert Cole, and it stars Chadwick Boseman as T'Challa / Black Panther alongside Michael B. Jordan, Lupita Nyong'o, Danai Gurira, Martin Freeman, Daniel Kaluuya, Letitia Wright, Winston Duke, Sterling K. Brown, Angela Bassett, Forest Whitaker, and Andy Serkis. 
      </p>
    </div>
  );
};

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("first-tab");
  const checkTab = (index, className) =>
    currentTab === index ? className : "";

  const toggleTab = () => {
    switch (currentTab) {
      case "first-tab":
        return <FirstTab />;

      case "second-tab":
        return <SecondTab />;
      case "third-tab":
        return <ThirdTab />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className="tabs">
        <button
          className={`tab ${checkTab("first-tab", "active")}`}
          onClick={() => setCurrentTab("first-tab")}
        >
          SpiderMan
        </button>
        <button
          className={`tab ${checkTab("second-tab", "active")}`}
          onClick={() => setCurrentTab("second-tab")}
        >
          Iron Man
        </button>
        <button
          className={`tab ${checkTab("third-tab", "active")}`}
          onClick={() => setCurrentTab("third-tab")}
        >
          Pantera Negra
        </button>
      </div>
      <div className="panels">{toggleTab()}</div>
    </>
  );
};

export default Tabs;
