import React from 'react';
import Image from 'next/image';

export default function Courses() {
  return (
    <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="md:col-span-2 lg:col-span-3 mt-4 text-green-500 text-center">
        {/* Conteúdo do topo (se necessário) */}
      </div>

      <div className="md:col-span-2 lg:col-span-3 mt-2 text-green-300 text-4xl text-center">
        <h2 id="cursos" className="text-white text-center font-Poppins text-4xl font-normal font-weight-600">
          EXPLORE OUR PROGRAM
        </h2>
      </div>

      <div className="flex gap-4">
        <div className="bg-[#4d4d4d] rounded-md pb-2 w-[224px] self-stretch rounded-[10px] bg-[#1F2125]">
          <a href="/curso_html.html">
            <Image src="/img/span.h2d-2c1f7555.svg" alt="Descrição da Imagem" width={46} height={46} />

            <div className="text-white text-center">
              <h3>Strength</h3>
              <p>&lsquo;'Embrace the essence of strength as we delve into its various dimensions—physical, mental, and emotional.'&rsquo;</p>
              <h4>Join Now <Image src="/img/Icon.svg" alt="Descrição da Imagem" width={16} height={16} /></h4>
            </div>
          </a>
        </div>
        <div className="bg-[#4d4d4d] rounded-md pb-2 w-[224px] self-stretch rounded-[10px] bg-[#1F2125]">
          <a href="/curso_css.html">
            <Image src="/img/span.h2d-f5945c58.svg" alt="Descrição da Imagem" width={46} height={46} />

            <div className="text-white text-center">
              <h3>Physical Fitness</h3>
              <p>&lsquo;'It encompasses a range of activities that improve health, strength, flexibility, and overall well-being.'&rsquo;</p>
              <h4>Join Now <Image src="/img/Icon.svg" alt="Descrição da Imagem" width={16} height={16} /></h4>
            </div>
          </a>
        </div>
        <div className="bg-[#4d4d4d] rounded-md pb-2 w-[224px] self-stretch rounded-[10px] bg-[#1F2125]">
          <a href="/curso_js.html">
            <Image src="/img/span.h2d-54bf5fec (1).svg" alt="Descrição da Imagem" width={46} height={46} />

            <div className="text-white text-center">
              <h3>Fat Loss</h3>
              <p>&lsquo;'Through a combination of workout routines and expert guidance, we'll empower you to reach your goals.&rsquo;'</p>
              <h4>Join Now <Image src="/img/Icon.svg" alt="Descrição da Imagem" width={16} height={16} /></h4>
            </div>
          </a>
        </div>
        <div className="bg-[#4d4d4d] rounded-md pb-2 w-[224px] self-stretch rounded-[10px] bg-[#1F2125]">
          <a href="/curso_html.html">
            <Image src="/img/span.h2d-9e0534cb.svg" alt="Descrição da Imagem" width={46} height={46} />

            <div className="text-white text-center">
              <h3>Weight Gain</h3>
              <p>&lsquo;'Designed for individuals, our program offers an effective approach to gaining weight in a sustainable manner.&rsquo;'</p>
              <h4>Join Now <Image src="/img/Icon.svg" alt="Descrição da Imagem" width={16} height={16} /></h4>
            </div>
          </a>
        </div>
      </div>

      <div className="md:col-span-2 lg:col-span-3 mt-2 text-green-300 text-4xl text-center">
        <h2 id="cursos" className="text-white text-center font-Poppins text-4xl font-normal font-weight-600">
          WHY JOIN US
        </h2>

        <p className="text-white">Our diverse membership base creates a friendly and supportive atmosphere, where you can make friends and stay motivated.</p>
        <Image src="/img/join.jpg.svg" alt="Descrição da Imagem" width={992} height={381} />
      </div>

      <div className="bg-[#4d4d4d] rounded-md pb-2 flex w-[928px] h-[172.5px] p-[32px] gap-[32px] flex-wrap">
        <a href="/curso_html.html">
          <Image src="/img/span.h2d-d05be9c1.svg" alt="Descrição da Imagem" width={52} height={52} />

          <div className="text-white text-center flex flex-row items-center">
            <h3>Personal Trainer</h3>
            <p>&lsquo;'Unlock your potential with our expert Personal Trainers.'&rsquo;</p>
            <Image src="/img/span.h2d-f2d1818.svg" alt="Descrição da Imagem" width={52} height={52} />
            
            <h3>Practice Sessions</h3>
            <p>&lsquo;'Elevate your fitness with practice sessions.&rsquo;'</p>
            <Image src="/img/span.h2d-1af18d67.svg" alt="Descrição da Imagem" width={52} height={52} />
            
            <h3>Good Management</h3>
            <p>&lsquo;'Supportive management for your fitness success.&rsquo;'</p>
          </div>
        </a>
      </div>
    </main>
  );
}
