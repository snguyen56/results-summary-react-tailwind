import data from "../data.json";

function App() {
  return (
    <main className="h-screen md:grid md:place-items-center">
      <div className="relative grid w-[46rem] grid-cols-2 text-[18px] shadow-lg  md:rounded-3xl">
        <div className=" flex flex-col items-center justify-between rounded-b-3xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue p-4 text-center text-light-lavender md:rounded-3xl">
          <h1 className=" font-bold">Your Result</h1>
          <div className="grid aspect-square w-44 place-items-center rounded-full bg-gradient-to-b from-violet-blue to-persian-blue/0">
            <p>
              <span className="block text-[2rem] font-bold">76</span>
              of 100
            </p>
          </div>
          <p className="font-bold">Great</p>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-8 p-8">
          <h2 className="font-bold">Summary</h2>
          <div className="flex flex-col gap-4">
            {/* Reaction 80 / 100 Memory 92 / 100 Verbal 61 / 100 Visual 72 / 100 */}
            {data.map((data) => (
              <div className="flex justify-between rounded-lg bg-light-red/5 p-2">
                <div className="flex gap-4">
                  <img src={data.icon} alt={data.category} />
                  <h3>{data.category}</h3>
                </div>
                <p className="font-bold text-dark-gray-blue/50">
                  <span className="text-dark-gray-blue">{data.score}</span> /
                  100
                </p>
              </div>
            ))}
          </div>
          <button className="rounded-full bg-dark-gray-blue p-2 text-white">
            Continue
          </button>
        </div>
        <div className="absolute -bottom-4 w-1/2 text-center text-[11px] md:w-full">
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
        </div>
      </div>
    </main>
  );
}

export default App;
