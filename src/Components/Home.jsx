import React from "react";

function Home() {
  return (
    <>
      <div>
        <div className="h-screen">
          <div className="h-2/3 bg-gray-300 snap-start flex justify-center items-center text-4xl">
            Dummy Section
          </div>
          <div className="h-screen bg-gray-300 snap-start flex justify-center items-center text-4xl">
            Section 1
          </div>
          <div className="h-screen snap-start flex justify-center items-center  text-4xl">
            Section 2
          </div>
          <div className="h-screen snap-start flex justify-center items-center  text-4xl">
            Section 3
          </div>
          <div className="h-screen snap-start flex justify-center items-center text-4xl ">
            Section 4
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
