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
    <main className="md:grid md:place-items-center h-screen">
      <div className="md:grid md:grid-cols-2 md:shadow-2xl md:rounded-[2rem]  md:w-[46rem] md:h-[512px]">
        <div className="min-h-[356px] bg-gradient-to-b from-light-slate-blue to-light-royal-blue text-center text-light-lavender rounded-b-[2rem] md:rounded-[2rem] md:py-[35px]">
          <h1 className="md:text-[24px] font-bold">Your Result</h1>
          <p>
            <span className="text-white block">76</span>
            of 100
          </p>
          <p className="text-white">Great</p>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="md:px-[40px] md:py-[35px] py-[22px] px-[30px] md:flex md:flex-col flex flex-col">
          <h2 className="text-[18px] md:text-[24px] text-dark-gray-blue font-bold md:pb-[24px] pb-[20px] px-[2px] md:px-0">
            Summary
          </h2>
          <div className="flex flex-col gap-4">
            {/* Reaction 80 / 100 Memory 92 / 100 Verbal 61 / 100 Visual 72 / 100 */}
            {data.map((data, index) => (
              <div
                className={`${dataBGColors[index]} ${dataColors[index]} flex items-center justify-between rounded-lg px-[14px] py-[16px] md:px-[16px] md:py-[15px] `}
              >
                <div className="flex gap-3">
                  <img src={data.icon} alt={data.category} />
                  <h3 className="md:text-[18px] font-semibold">
                    {data.category}
                  </h3>
                </div>
                <p className="font-bold text-dark-gray-blue/50 md:text-[18px]">
                  <span className="text-dark-gray-blue mr-1">{data.score}</span>{" "}
                  / 100
                </p>
              </div>
            ))}
          </div>
          <button className="rounded-full bg-dark-gray-blue p-[14px] mt-6 md:mt-10 text-white/90 text-[18px] font-bold">
            Continue
          </button>
        </div>
      </div>
      {/* <div className="text-center text-[11px]">
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
    </main>
  );
}

export default App;
