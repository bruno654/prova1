export default function Courses() {
    return (
        <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-3 mt-4 text-green-500 text-center">
               
            </div>
            <div className=" md:col-span-2 lg:col-span-3 mt-2 text-green-300 text-4xl text-center ">
            <h2 id="cursos" style={{ color: '#FFF', textAlign: 'center', fontFamily: 'Poppins', fontSize: '36px', fontStyle: 'normal', fontWeight: '600', lineHeight: 'normal' }}>
          EXPLORE OUR PROGRAM
        </h2>
               
            </div>
        <div className="flex gap-4">


            <div className="bg-[#4d4d4d] rounded-md pb-2" style={{ width: '224px', alignSelf: 'stretch', borderRadius: '10px', background: '#1F2125' }}>
                 <a href="/curso_html.html">
                    <img className="hover:scale-105" src="/img/span.h2d-2c1f7555.svg" alt="" />
                    <div className="text-white text-center">
                    <h3>Strength</h3>
                    <p>Embrace the essence of strength as we delve into its various dimensions physical, mental, and emotional.</p>
                    <h4>Join Now  <img className="hover:scale-105" src="/img/Icon.svg" alt="" /> </h4>
                    </div>
                </a>
            </div>

            <div className="bg-[#4d4d4d] rounded-md pb-2" style={{ width: '224px', alignSelf: 'stretch', borderRadius: '10px', background: '#1F2125' }}>
                <a href="/curso_css.html">
                    <img src="/img/span.h2d-f5945c58.svg" alt="" />
                    <div className="text-white text-center">
                    <h3>Physical Fitness</h3>
                    <p>It encompasses a range of activities that improve health, strength, flexibility, and overall well-being.</p>
                    <h4>Join Now  <img className="hover:scale-105" src="/img/Icon.svg" alt="" /> </h4>
                    </div>
                </a>
            </div>
            <div className="bg-[#4d4d4d] rounded-md pb-2" style={{ width: '224px', alignSelf: 'stretch', borderRadius: '10px', background: '#1F2125' }}>
                <a href="/curso_js.html">
                    <img src="/img/span.h2d-54bf5fec (1).svg" alt="" />
                    <div className="text-white text-center">
                    <h3>Fat Lose</h3>
                    <p>Through a combination of workout routines and expert guidance, we'll empower you to reach your goals.</p>
                    <h4>Join Now  <img className="hover:scale-105" src="/img/Icon.svg" alt="" /> </h4>
                    </div>
                </a>
            </div>
            <div className="bg-[#4d4d4d] rounded-md pb-2" style={{ width: '224px', alignSelf: 'stretch', borderRadius: '10px', background: '#1F2125' }}>
                <a href="/curso_html.html">
                    <img src="/img/span.h2d-9e0534cb.svg" alt="" />
                    <div className="text-white text-center">
                    <h3>Weight Gain</h3>
                    <p>Designed for individuals, our program offers an effective approach to gaining weight in a sustainable manner.</p>
                    <h4>Join Now  <img className="hover:scale-105" src="/img/Icon.svg" alt="" /> </h4>
                    </div>
                </a>
            </div>
        </div>



        {/* Imagem "join.jpg" com os estilos desejados */}
      <div style={{
        height: '381px',
        flexShrink: 0,
        alignSelf: 'stretch',
        borderRadius: '10px',
        background: 'url(/path-to-image), lightgray 0px 0px / 100% 100% no-repeat',
      }}>
        <img src="/img/join.jpg.svg" alt="" />
      </div>







            <div className="bg-[#4d4d4d] rounded-md pb-2">
                <a href="/curso_html.html">
                    <img src="/img/span.h2d-d05be9c1.svg" alt="" />
                    <div className="text-white text-center">
                        <h3>Personal Trainer</h3>
                        <p>Unlock your potential
                            with our expert Personal
                            Trainers.</p>
                    <img src="/img/span.h2d-f2d1818.svg" alt="" />
                        <h3>Practice Sessions</h3>
                        <p>Elevate your fitness with
                            practice sessions.</p>
                    <img src="/img/span.h2d-1af18d67.svg" alt="" />
                        <h3>Good Management</h3>
                        <p>Supportive
                            management, for your
                                fitness success.</p>
                        
                        

                    </div>
                </a>
            </div>
            
        </main>

    )
}