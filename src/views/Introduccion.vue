<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .py-4.px-5.bg-color-1(data-aos="fade-right")
          p.mb-0 La unidad 3 recibe el nombre de #[strong "Formulación de proyectos y evaluación de impacto”] y tiene como resultado de aprendizaje #[strong "Formula proyectos completos y evalúa su viabilidad e impacto, considerando los riesgos y los sistemas de monitoreo y seguimiento.”] En esta unidad lleva a los estudiantes a consolidar y aplicar sus conocimientos en la formulación completa de proyectos, desarrollando habilidades que les permitan evaluar su viabilidad e impacto desde una perspectiva integral.

      .col-lg-6
        figure
          img(src="@/assets/curso/intro/1.svg", alt="", data-aos="zoom-in")

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Durante el desarrollo de la unidad, se abordarán aspectos como la evaluación de impacto, la gestión de riesgos, y la implementación de sistemas de monitoreo y seguimiento. Para lograrlo, los estudiantes explorarán el uso de indicadores y métricas que les permitirán medir los resultados y el éxito del proyecto en relación con los objetivos propuestos.

        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los sistemas de monitoreo y seguimiento aseguran la supervisión continua del avance del proyecto y facilitan el ajuste oportuno de los planes cuando sea necesario. Los estudiantes aprenderán a implementar herramientas que les permitan realizar un seguimiento eficiente del progreso y del cumplimiento de los objetivos, garantizando la transparencia y la responsabilidad en cada fase del proyecto.
      

</template>
