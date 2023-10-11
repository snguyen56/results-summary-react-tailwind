function Results() {
  return (
    <div className="flex min-h-[356px] flex-col items-center justify-around rounded-b-[2rem] bg-gradient-to-b from-light-slate-blue to-light-royal-blue p-[12px] text-center text-light-lavender/90 md:justify-between md:rounded-[2rem] md:py-[35px]">
      <h1 className="mb-1 font-bold md:mb-[16px] md:text-[24px]">
        Your Result
      </h1>
      <div className="grid aspect-square w-[140px] place-items-center rounded-full bg-gradient-to-b from-violet-blue to-persian-blue/0 md:w-[200px]">
        <p className="mt-1 pt-1 text-base font-bold text-light-lavender/50 md:text-[18px]">
          <span className="block text-[56px] font-bold leading-tight text-white md:text-[72px] md:leading-[1.1]">
            76
          </span>
          of 100
        </p>
      </div>
      <div className="mb-5">
        <p className="text-[24px] font-bold leading-loose text-white md:mb-1 md:text-[32px]">
          Great
        </p>
        <p className="px-8 text-base leading-tight md:px-10 md:text-[18px]">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}

export default Results;
