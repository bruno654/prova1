import React from 'react';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className="md:flex items-center flex-row-reverse">
      <div className="basis-1/2">
        <Image
          src="/img/header.png.svg"
          alt="Descrição da Imagem"
          width={350}
          height={556.81}
        />
      </div>
      <div className="basis-1/2 text-center text-white">
        <h2 className="text-[#F9AC54] text-xl font-normal text-white">
          BEST FITNESS IN THE TOWN
        </h2>
        <h3 className="font-bold text-6xl text-white mb-2">
          <span>&lsquo;MAKE YOUR BODY SHAPE&rsquo;</span>
        </h3>
        <div className="text-white text-lg mb-6">
          Unleash your potential and embark on a journey towards a stronger, fitter, and more confident you. Sign up for &lsquo;Make Your Body Shape&rsquo; now and witness the incredible transformation your body is capable of!
        </div>
        <a
          className="text-white bg-[#F9AC54] px-2 py-[4px] rounded hover:bg-blue hover:text-white"
          href="#"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
