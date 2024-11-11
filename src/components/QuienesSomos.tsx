import video from "../assets/images/youtubePortada.png";

export const QuienesSomos = () => {
  return (
    <section id="quienes_somos" className="lg:h-screen sm:h-1/4 somosBackground">
      <h2 className="somos__Titulo text-center mb-8">¿Qué es Visor Urbano?</h2>
      <div className="flex justify-center">
        <video 
          controls
          preload="true"
          poster={video.src}
          autoPlay
          web-share='true'
          picture-in-picture='true'
          className='somos__Video'>
          <source src="https://www.youtube.com/watch?v=CR6C86CtG1w" type='video/mp4'/>
        </video>
      </div>
    </section>
  );
};