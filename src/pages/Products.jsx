import React from "react";
import img from "./../assets/image/controlBox/cameraController.png";
import img2 from "./../assets/image/controlBox/detail.png";
import img3 from "./../assets/image/controlBox/detail2.png";
const Products = () => {
  return (
    <div className="p-10 xmd:p-14 text-[#403F3C] flex flex-col justify-center items-center gap-28 md:gap-24 xmd:gap-40 lg:gap-60 mt-7 xmd:mt-24">
      <div className="flex flex-col xmd:flex-row items-center xmd:items-start gap-3 xmd:gap-10">
        <div className="w-4/5 md:w-full">
          <img className="w-full" src={img} alt="제품 이미지" />
        </div>
        <div className="w-full md:w-3/4 flex flex-col items-center xmd:items-start gap-5 ">
          <div className="leading-7 break-keep text-center text-center md:text-center xmd:text-left text-lg md:text-xl font-[NanumSquare] mt-3">
            Multi Camera Sync Controller Unit은 하나의 pcb 회로기판으로 제작되어
            필요에 따라 두 파트로 분리되어 사용이 가능합니다. 왼쪽 파트는 DSLR
            카메라의 파워를 공급하는 모듈이고, 오른쪽 파트는 다수의 CSLR
            카메라들의 셔터 릴리스를 제어하는 모듈입니다.
          </div>
          <button className="w-2/4 border rounded-xl border-[#403F3C] p-3">
            <a
              className="font-[NanumSquare] font-bold text-xl"
              href="tel:010-7184-4833"
            >
              구입 문의
            </a>
          </button>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="w-full flex justify-center">
          <img className="w-full md:w-3/4" src={img3} alt="제품 이미지" />
        </div>
        <div className="text-lg md:text-xl m-auto mt-4 font-[NanumSquare] leading-12">
          15대 연결 시 3개의 모듈 사용
          <br />
          모듈 여러 개 연결 시 최대 300대까지 연동 가능
        </div>
      </div>
      <div className="flex flex-col xmd:flex-row items-center xmd:items-end gap-0 xmd:gap-24">
        <div className="w-full xmd:w-3/4">
          <img className="w-full" src={img2} alt="제품 이미지" />
        </div>
        <div className="flex flex-col justify-center mt-9 text-lg">
          <h2 className="text-xl font-bold mb-3 font-[NanumSquare] xmd:text-left">
            제품 규격
          </h2>
          <div className="flex xmd:flex-col items-start gap-2 mb-2">
            <p className="font-[NanumSquare]">크기</p>
            <p>: 240 x 240 mm</p>
          </div>
          <div className="flex xmd:flex-col items-start gap-2 font-[NanumSquare]">
            <p>전원 방식</p>
            <p>: power 9V</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
