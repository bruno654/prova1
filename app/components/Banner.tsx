export default function Banner() {
    return (
      <div>
        <div className="md:flex items-center flex-row-reverse">
          <div className="basis-1/2">
            <img src="/img/header.png.svg" alt="Descrição da Imagem" />
          </div>
          <div className="basis-1/2 text-center text-white">
            <h2 style={{ color: '#F9AC54', fontFamily: 'Poppins', fontSize: '16px', fontStyle: 'normal', lineHeight: 'normal' }}>
              BEST FITNESS IN THE TOWN
            </h2>
            <h3 style={{ fontFamily: 'Poppins', fontSize: '80px', fontStyle: 'normal', fontWeight: '700', lineHeight: '96px', color: '#FFF' }}>
              <span style={{ textShadow: '2px 2px 0 black' }}>MAKE</span> YOUR BODY SHAPE
            </h3>
            <div style={{ display: 'flex', width: '480px', paddingRight: '0px', flexDirection: 'column', alignItems: 'flex-start' }}>
              Unleash your potential and embark on a journey towards a stronger, fitter, and more confident you. Sign up for 'Make Your Body Shape' now and witness the incredible transformation your body is capable of!
            </div>
            <a
              className="text-white bg-[#F9AC54] px-2 py-[4px] rounded hover:bg-[blue] hover:text-white"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    );
  }
  