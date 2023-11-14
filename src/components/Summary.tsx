type resultsData = {
  category: string;
  score: number;
  icon: string;
};

type Props = {
  data: resultsData[];
  dataBGColors: string[];
  dataColors: string[];
};

function Summary({ data, dataBGColors, dataColors }: Props) {
  return (
    <div className="flex flex-col px-[30px] py-[22px] md:flex md:flex-col md:px-[40px] md:py-[35px]">
      <h2 className=" px-[2px] pb-[20px] font-bold text-dark-gray-blue md:px-0 md:pb-[26px] md:text-[24px] ">
        Summary
      </h2>
      <div className="flex flex-col gap-[17px] text-base md:gap-[18px] md:text-[18px]">
        {data.map((data, index) => (
          <div
            className={`${dataBGColors[index]} ${dataColors[index]} flex items-center justify-between rounded-lg px-[16px] py-[16px] md:px-[16px] md:py-[15px] `}
          >
            <div className="flex gap-3">
              <img
                src={`${import.meta.env.BASE_URL}${data.icon}`}
                alt={data.category}
              />
              <h3 className=" font-semibold">{data.category}</h3>
            </div>
            <p className="font-bold text-dark-gray-blue/50">
              <span className="mr-1 text-dark-gray-blue">{data.score}</span> /
              100
            </p>
          </div>
        ))}
      </div>
      <button className="mt-6 rounded-full bg-dark-gray-blue from-light-slate-blue to-light-royal-blue p-[14px] font-bold text-white/90 hover:bg-gradient-to-b focus:bg-gradient-to-b md:mt-11">
        Continue
      </button>
    </div>
  );
}

export default Summary;
