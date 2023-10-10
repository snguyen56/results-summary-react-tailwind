function App() {
  return (
    <main className="h-screen md:grid md:place-items-center">
      <div className="relative grid w-[46rem] grid-cols-2 shadow-lg md:rounded-3xl">
        <div className="rounded-b-3xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue text-center text-[18px] text-light-lavender md:rounded-3xl md:rounded-none">
          <h1 className=" font-bold">Your Result</h1>
          <div className="rounded-full bg-gradient-to-b from-violet-blue to-persian-blue/0">
            <p>
              <span className="block font-bold">76</span>
              of 100
            </p>
          </div>
          <p className="font-bold">Great</p>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <h2 className="font-bold">Summary</h2>
          <div>
            Reaction 80 / 100 Memory 92 / 100 Verbal 61 / 100 Visual 72 / 100
          </div>
          <button className="rounded-full bg-dark-gray-blue text-white">
            Continue
          </button>
        </div>
        <div className="absolute -bottom-4 text-center text-[11px]">
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
