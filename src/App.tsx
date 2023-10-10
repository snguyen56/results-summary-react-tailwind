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
      <div className="relative text-[18px] md:grid md:h-[512px] md:w-[46rem] md:grid-cols-2 md:rounded-[2rem] md:shadow-xl">
        <div className="flex flex-col items-center gap-4 rounded-b-[2rem] bg-gradient-to-b from-light-slate-blue to-light-royal-blue p-4 pt-1 text-center text-light-lavender md:rounded-[2rem] md:p-8">
          <h1 className="font-bold md:text-[24px]">Your Result</h1>
          <div className="my-4 grid aspect-square w-[8.5rem] place-items-center rounded-full bg-gradient-to-b from-violet-blue to-persian-blue/0 md:w-[12.5rem]">
            <p>
              <span className="block text-5xl text-[3rem] font-bold text-white md:text-[72px]">
                76
              </span>
              of 100
            </p>
          </div>
          <p className="text-3xl text-[32px] font-bold text-white">Great</p>
          <p className="px-6 leading-tight">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-4 px-8 py-4 md:p-10">
          <h2 className="font-bold text-dark-gray-blue md:text-[24px]">
            Summary
          </h2>
          <div className="flex flex-col gap-4">
            {/* Reaction 80 / 100 Memory 92 / 100 Verbal 61 / 100 Visual 72 / 100 */}
            {data.map((data, index) => (
              <div
                className={`${dataBGColors[index]} ${dataColors[index]} flex items-center justify-between rounded-lg p-[14px]`}
              >
                <div className="flex gap-4">
                  <img src={data.icon} alt={data.category} />
                  <h3 className="text-[18px] font-semibold">{data.category}</h3>
                </div>
                <p className="font-bold text-dark-gray-blue/50">
                  <span className="text-dark-gray-blue">{data.score}</span> /
                  100
                </p>
              </div>
            ))}
          </div>
          <button className="mt-4 rounded-full bg-dark-gray-blue p-4 text-white">
            Continue
          </button>
        </div>
        {/* <div className="absolute bottom-4 w-full text-center text-[11px] md:-bottom-4 ">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="text-attribution"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="#" className="text-attribution">
            Your Name Here
          </a>
          .
        </div> */}
      </div>
    </main>
  );
}

export default App;
