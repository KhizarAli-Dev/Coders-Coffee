import React from "react";
import coffeeCover from "../../assets/images/coffeeCover.jpg";

const coverStyle = {
  backgroundImage: `url(${coffeeCover})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

function MobileApp() {
  return (
    <>
      <div className="w-full p-6 mt-20 flex justify-center items-center">
        <div
          style={coverStyle}
          className="md:w-[80%] h-[370px] rounded-lg flex justify-center items-center"
        >

            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-semibold text-darkGray">
                Download our Mobile App
                </h1>
                <p className="text-primary mt-4">
                Our mobile app is available for both Android and iOS devices. Download now to get started!
                </p>
                <div className="flex space-x-4 mt-4">
                <button className="bg-primary text-white p-1 md:p-2 md:px-4 rounded-md">
                    Download for Android
                </button>
                <button className="bg-secondary text-white p-1 md:p-2 md:px-4 rounded-md">
                    Download for iOS
                </button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default MobileApp;
