<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Evaluación de impacto'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5
      .col-lg-4.order-lg-2
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1  
        p(data-aos="fade-left") La evaluación de impacto de un proyecto busca medir los resultados obtenidos en relación con los objetivos propuestos, utilizando indicadores clave que reflejen tanto la viabilidad como la sostenibilidad del proyecto. Este proceso permite tomar decisiones informadas para ajustes o futuras implementaciones.

        .bg-color-4.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-1 Indicadores de evaluación
              p.mb-0 Los indicadores clave empleados en la evaluación de impacto de un proyecto incluyen aspectos financieros y operativos que garantizan una visión integral de su desempeño. A continuación, se describe el cálculo del #[b Valor Actual Neto (VAN)] como herramienta principal.

    .bg-full-width.bg-color-2.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-lg-2
            h2.mb-4(data-aos="flip-up") Evaluación de impacto
            p.mb-4(data-aos="fade-right") En el documento se analizan los principios y métricas clave para la evaluación de proyectos, destacando el cálculo del Valor Actual Neto (VAN) y la Tasa Interna de Retorno (TIR) como herramientas fundamentales para determinar la viabilidad económica. También se abordan los criterios de eficiencia técnica y económica, así como el criterio de equidad, que busca garantizar una distribución justa de los beneficios y una participación inclusiva en la toma de decisiones. 

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Evaluación de impacto.

          .col-lg-5.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/3.png', alt='')

    p.mb-5(data-aos="fade-left") Estos criterios son fundamentales para diseñar proyectos sostenibles, inclusivos y efectivos, asegurando un impacto positivo a largo plazo en las comunidades y en los recursos empleados.

    .bg-full-width.bg-color-2
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Gestión de riesgos
            p.mb-4(data-aos="fade-right") Se invita a explorar el documento #[strong Gestión de riesgos], donde se analiza cómo identificar, clasificar y mitigar riesgos en proyectos y empresas. Además, se destacan estrategias específicas para cada tipo de riesgo, desde financieros hasta medioambientales, junto con sistemas de monitoreo e indicadores que permiten evaluar y ajustar proyectos de manera oportuna, asegurando su viabilidad y adaptación a contextos cambiantes.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Gestión de riesgos

          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/5.png', alt='')


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/SIh8qDT62D8?si=omnYGv6pIAtygS3H" target="_blank" rel="noopener noreferrer") Economías Creativas de Chile (2022, 30 mayo). ¿ Módulo 1: Formulación de proyectos culturales | Diseña tu proyecto cultural

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/LY7sc03jkbU?si=XqKUaJbTXHarCM71" target="_blank" rel="noopener noreferrer") Mariacanovirtual (2018, 04 Septiembre). Evaluación económica de un proyecto

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/l0kJdPrbD44?si=nDlVGrQJQN8zIdb3" target="_blank" rel="noopener noreferrer") Campus Virtual (2018, 3 septiembre) Formulación y evaluación de proyectos

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/116314" target="_blank" rel="noopener noreferrer") Cerezuela, B. & Ollé, C. (2018). Gestión de proyectos paso a paso: ( ed.). Editorial UOC.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/69169" target="_blank" rel="noopener noreferrer") Córdoba Padilla, M. (2011). Formulación y evaluación de proyectos: ( ed.). Ecoe Ediciones.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/250971" target="_blank" rel="noopener noreferrer") Malagón Barinas, J. (2019). Modelos, metodologías y sistemas de gestión de proyectos: (1 ed.). Editorial Universidad EAN.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/116949" target="_blank" rel="noopener noreferrer") Rodríguez Aranday, F. (2018). Formulación y evaluación de proyectos de inversión: una propuesta metodológica: ( ed.). Instituto Mexicano de Contadores Públicos.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/57720?page=16" target="_blank" rel="noopener noreferrer") Sapag, N. (2016). Proyectos de inversión: ( ed.). Editorial UOC.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/39414?page=6" target="_blank" rel="noopener noreferrer") Torres Hernández, Z. (2014). Administración de proyectos: ( ed.). Grupo Editorial Patria.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
