import "./PinicialMain.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function PinicialMain() {
  const [slidesPerView, setSlidesPerview] = useState(1);

  const data = [
    {
      id: "1",
      image:
        "../public/FlorCampoLogo.JPEG",
    },
    {
      id: "2",
      image:
      "../public/FlorCampo1.JPEG",
    },
    {
      id: "3",
      image:
      "../public/FlorCampo2.JPEG",
    },
  ];

  return (
    <main className="main__elegancy"> 
      <section className="section1">
        <div className="container__section1">
          <div className="container__info__section1">
            <h3 className="container__info__section1__h3">
              Gestão Simplificada, tudo em um só lugar
            </h3>
            <p>
              Simplifique a gestão do seu salão de beleza com nossa plataforma
              fácil de usar. Organize agendamentos, controle financeiro e
              fidelize clientes sem esforço.
            </p>
          </div>
          <img src="./imgMain1.png" alt="" className="img__section1" />
        </div>
      </section>

      <section className="section2">
        <div className="container__section2">
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            modules={[Navigation]} 
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.image} alt="Slider" className="slide__item" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="section3">
        <div className="container__section3">
          <img src="./imgMain3.png" alt="" className="img__section3" />
          <ul className="container__info__section3">
            <h2>Funcionalidades que transformam o seu negócio</h2>
            <p>
              Nosso sistema oferece tudo o que você precisa para gerenciar seu
              salão de beleza com eficiência e praticidade. Organize sua agenda
              com flexibilidade, controle o financeiro com relatórios
              detalhados, e envie automaticamente mensagens de confirmação e
              lembretes para seus clientes.
            </p>
          </ul>
        </div>
      </section>
    </main>
  );
}
