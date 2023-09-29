import { useState } from "react";

const Video = () => {
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <section
      className={`mt-10 ${
        fullScreen ? "fixed top-0" : "flex"
      } justify-center items-center`}
    >
      {fullScreen ? (
        <div
          onClick={() => setFullScreen(false)}
          className="z-[998] fixed top-0 bg-black w-full h-full opacity-[.5]"
        />
      ) : (
        <></>
      )}
      <iframe
        className={fullScreen ? "fixed left-1/2 -translate-x-1/2 z-[999]" : ""}
        width={fullScreen ? "85%" : "1000"}
        height={fullScreen ? "800" : "600"}
        src="https://www.youtube.com/embed/LXb3EKWsInQ?si=pCXeE1bgGiu1BIqA&amp;controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default Video;
