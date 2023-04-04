import main from "../assets/image/covid19/main.png";
import main2 from "../assets/image/controlBox/cameraController.png";

const Main = () => {
  return (
    <main className="p-3">
      <div className="mt-10 lg:mt-40 font-[Gotham] text-[#403F3C] text-2xl lg:text-5xl text-right p-3 leading-12">
        <span className="font-bold font-[Gotham]">AR Covid 19 : </span>
        <br />
        the Covid-19 advance questionnaire
        <br />
        with Augmented Reality
        <br />
      </div>
      <div className="mt-4 flex justify-end items-start lg:mt-10 ">
        <div className="text-[2.8vw] leading-tight pr-10 text-right mt-3 break-keep text-[#403F3C] font-[NanumSquare] md:text-xl">
          전염병 등이 유행하는 상황에서 비대면으로 스마트폰의 웹을 통해 증상에
          대한 질문과 해당 답변에 대한 이동 동선을 제시해 주는
          <br /> <span className="font-bold">AR 솔루션</span>
        </div>
        <img className="w-3/5 mt-3" src={main} alt="covid 19" />
      </div>
      <div className="mt-10 font-[Gotham] text-[#403F3C] text-2xl text-left p-3 font-bold lg:text-5xl lg:mt-40">
        Multi Camera Sync Controller
      </div>
      <div className="mt-5 flex justify-start items-start lg:mt-10 mb-20">
        <img className="w-3/6 mt-0" src={main2} alt="covid 19" />
        <div className=" text-[2.8vw] leading-tight font-[NanumSquare] mb-3 mt-2 leading-12 pl-10 text-left break-keep text-[#403F3C] md:text-xl">
          포토그래메트리 3D 스캔을 위한
          <span className="font-bold"> 카메라 연동 컨트롤 유닛</span>
          <br />
          <br /> 하나의 유닛으로 총 6대의 DSLR 카메라를 연계할 수 있습니다.
          오른쪽 하단부의 전원을 연결하면 6대의 카메라의 전원을 하나의
          유닛으로부터 연동하여 부가적인 케이블이나 제어장치가 필요하지
          않습니다.
        </div>
      </div>
    </main>
  );
};

export default Main;
