export const Badge = () => {
  return (
    <section id="home" className="lg:h-screen sm:h-1/4 badgeBackground">
      <div className="grid grid-cols-3 grid-flow-col">
        <div className="col-span-2 badge__Container">
          <h2 className="badge__Titulo">
            <strong>Impulsamos</strong> la transformación<br/>digital de las <strong>ciudades<br/> del futuro</strong>
          </h2>
          <p className="badge__Contenido">
            Somos una plataforma que permite la emisión de licencias de negocio y de
            construcción totalmente en línea
          </p>
        </div>
      </div>
    </section>
  );
};
