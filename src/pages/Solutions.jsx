import React from "react";
import video from "./../assets/image/covid19/covid.mp4";

const Solutions = () => {
  return (
    <div className="p-0 md:p-20 text-[#403F3C] flex flex-col justify-start">
      <div className="flex flex-col items-end p-10 md:p-0">
        <h1 className="text-2xl font-bold p-7 font-[Gotham]">AR Covid 19</h1>
        <div className="w-full lg:w-3/6 leading-7 break-keep text-lg text-right mb-5 font-[NanumSquare]">
          코로나19 영향으로 인해 QR체크인 또는 출입명부 등이 일상화되었습니다.
          AR 코로나 19 서비스는 스마트폰으로 QR을 비추면, 증강현실로 보여지는
          사전문진표 질문에 따라 예, 아니오 화살표를 따라 이동하도록 유도하는
          비대면 자가 진단 서비스입니다. 스마트폰만 있으면 카메라 앱으로 QR을
          비추어 AR을 체험할 수 있습니다. 하이브리드 QR 외에도 사진이나 그림을
          AR 앵커로 활용하여, 3D로 모델링 한 콘텐츠나 전신 3D 스캔을 통해 구현된
          인체 모델을 AR로 띄워 다양한 콘텐츠로 확장할 수 있습니다.
        </div>
      </div>
      <div className="w-full lg:w-3/4 mt-5 mb-10">
        <video className="rounded" width="100%" autoPlay muted loop playsInline>
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
};

export default Solutions;
