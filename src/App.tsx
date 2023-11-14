import Results from "./components/Results";
import Summary from "./components/Summary";
import data from "../data.json";

const dataBGColors = [
  "bg-light-red/5",
  "bg-orangey-yellow/5",
  "bg-green-teal/5",
  "bg-cobalt-blue/5",
];
const dataColors = [
  "text-light-red",
  "text-orangey-yellow",
  "text-green-teal",
  "text-cobalt-blue",
];

function App() {
  return (
    <main className="h-screen md:grid md:place-items-center">
      <div className="md:grid md:h-[512px] md:w-[46rem] md:grid-cols-2 md:rounded-[2rem] md:shadow-2xl md:shadow-pale-blue">
        <Results />
        <Summary
          data={data}
          dataBGColors={dataBGColors}
          dataColors={dataColors}
        />
      </div>
      <div className="absolute bottom-2 w-full text-center text-[11px] md:bottom-44">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-attribution"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/snguyen56"
          target="_blank"
          className="text-attribution"
        >
          Steven Nguyen
        </a>
        .
      </div>
    </main>
  );
}

export default App;
