import video from "../assets/images/youtubePortada.png";

export const QuienesSomos = () => {
  return (
    <section id="quienes_somos" className="lg:h-screen sm:h-1/4 somosBackground">
      <h3 className="somos__Titulo text-center">¿Qué es Visor Urbano?</h3>
      <iframe
        src="https://www.youtube.com/embed/CR6C86CtG1w?si=a6TOi1lH-o_4AAob"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <video 
        controls
        preload="true"
        poster='../assets/images/youtubePortada.png'
        autoPlay
        web-share='true'
        picture-in-picture='true'>
        <source src="https://www.youtube.com/watch?v=CR6C86CtG1w" type='video/mp4'/>
      </video>
    </section>
  );
};
