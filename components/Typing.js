import { Typewriter } from "react-simple-typewriter";

const Typing = () => (
  <p>
    <Typewriter
      words={[
        "React Developer",
        "Mobile Developer",
        "Backend Developer",
        "Fullstack Developer",
      ]}
      loop={3}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </p>
);

export default Typing;
