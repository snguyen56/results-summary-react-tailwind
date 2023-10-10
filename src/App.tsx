function App() {
  return (
    <main className="md:grid md:place-items-center h-screen">
      <div className="md:grid grid-cols-2">
        <div>
          <h1>Your Result</h1>
          <p>
            <span>76</span>
            of 100
          </p>
          <p>Great</p>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div>
          <h2>Summary</h2>
          <div>
            Reaction 80 / 100 Memory 92 / 100 Verbal 61 / 100 Visual 72 / 100
          </div>
          <button>Continue</button>
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
