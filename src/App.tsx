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
      <div className="md:grid md:grid-cols-2 md:shadow-2xl md:shadow-pale-blue md:rounded-[2rem] md:w-[46rem] md:h-[512px]">
        <div className="flex flex-col justify-around items-center md:justify-between min-h-[356px] bg-gradient-to-b from-light-slate-blue to-light-royal-blue text-center text-light-lavender/90 rounded-b-[2rem] md:rounded-[2rem] p-[12px] md:py-[35px]">
          <h1 className="md:text-[24px] font-bold mb-1 md:mb-[16px]">
            Your Result
          </h1>
          <div className="grid place-items-center rounded-full bg-gradient-to-b from-violet-blue to-persian-blue/0 w-[140px] md:w-[200px] aspect-square">
            <p className="text-base md:text-[18px] font-bold pt-1 mt-1 text-light-lavender/50">
              <span className="text-white block text-[56px] md:text-[72px] leading-tight md:leading-[1.1] font-bold">
                76
              </span>
              of 100
            </p>
          </div>
          <div className="mb-5">
            <p className="text-white text-[24px] md:text-[32px] font-bold leading-loose md:mb-1">
              Great
            </p>
            <p className="text-base md:text-[18px] px-8 md:px-10 leading-tight">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className="md:px-[40px] md:py-[35px] py-[22px] px-[30px] md:flex md:flex-col flex flex-col">
          <h2 className=" md:text-[24px] text-dark-gray-blue font-bold md:pb-[26px] pb-[20px] px-[2px] md:px-0 ">
            Summary
          </h2>
          <div className="flex flex-col gap-[17px] md:gap-[18px] text-base md:text-[18px]">
            {data.map((data, index) => (
              <div
                className={`${dataBGColors[index]} ${dataColors[index]} flex items-center justify-between rounded-lg px-[16px] py-[16px] md:px-[16px] md:py-[15px] `}
              >
                <div className="flex gap-3">
                  <img src={data.icon} alt={data.category} />
                  <h3 className=" font-semibold">{data.category}</h3>
                </div>
                <p className="font-bold text-dark-gray-blue/50">
                  <span className="text-dark-gray-blue mr-1">{data.score}</span>{" "}
                  / 100
                </p>
              </div>
            ))}
          </div>
          <button className="rounded-full bg-dark-gray-blue p-[14px] mt-6 md:mt-11 text-white/90 font-bold hover:bg-gradient-to-b focus:bg-gradient-to-b from-light-slate-blue to-light-royal-blue">
            Continue
          </button>
        </div>
      </div>
      <div className="text-center text-[11px] absolute w-full bottom-2 md:bottom-44">
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
