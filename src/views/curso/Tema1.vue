<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Elaboración de una propuesta de proyecto completa'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-5.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema1/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") Para la gestión de proyectos, la elaboración de una propuesta completa es un elemento esencial que transforma una idea inicial en un plan estructurado y viable. Este proceso permite definir objetivos, establecer estrategias y garantizar que los recursos y esfuerzos estén alineados hacia el logro de metas específicas. Una propuesta bien diseñada actúa como un mapa detallado que guía al equipo de trabajo desde la concepción hasta la implementación y evaluación del proyecto.


    .row.mb-5
      .col-lg-5.order-lg-2
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-7.order-lg-1
        p(data-aos="fade-left").mb-4 El desarrollo de una propuesta abarca diversas etapas, entre ellas: la identificación de necesidades, el análisis de viabilidad, la planificación estratégica y la planificación de recursos. Cada etapa desempeña un papel clave para asegurar que el proyecto sea sostenible, rentable y se ajuste a las expectativas de las partes interesadas.

        .bg-color-2.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Para ejemplificar este proceso, se presentará un caso práctico que aborda desde la definición del problema hasta la evaluación del impacto del proyecto. En este caso, se desarrollará una iniciativa centrada en el lanzamiento de una panadería especializada en productos saludables y libres de alérgenos. Este ejemplo servirá como referencia para comprender los componentes fundamentales de una propuesta de proyecto integral y su aplicación en un contexto real.


    .row.mb-5
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/4.svg", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8

        .bg-color-white.shadow-soft.p-4.mb-4
          .row.justify-content-around.align-items-center
            .col-md-auto
              img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Estructura general de la metodología de la Evaluación de Proyectos
                  p.mb-0 Antes de continuar, le invito a ver el siguiente video, donde podrán identificar la estructura general de un proyecto, de esta manera podrán apropiar exitosamente la lectura posterior de la cartilla. 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/jsubJtLMjJw?si=_z77lTTDh8b0cd-6" target="_blank")
                    span Ver video
                    i.fas.fa-arrow-right

        .bg-color-3.p-4(data-aos="fade-left").mb-4
          p.mb-0 Ejemplo para estructurar la elaboración de un proyecto de inversión caso puntual #[strong "SanoDelight: Panadería Saludable"]. Aquí tienes los pasos cronológicos con un ejemplo práctico:

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Descripción del problema

    .row.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in").mb-4.mt-lg-0
      .col-lg-7
        p(data-aos="fade-right") En los últimos años, se ha evidenciado un crecimiento notable en la demanda de alimentos saludables, particularmente de productos que cumplan con requisitos específicos como ser sin gluten, sin levadura, sin azúcar y sin lácteos. Este aumento responde a factores como una mayor prevalencia de diagnósticos de intolerancias alimenticias y enfermedades crónicas (diabetes, obesidad) y una creciente conciencia sobre la relación entre la alimentación y el bienestar. Sin embargo, las opciones disponibles para este segmento de mercado son limitadas, especialmente en productos de panadería, lo que representa un desafío significativo para los consumidores que buscan opciones seguras y saludables.


    .row.justify-content-center.align-items-center.bg-h80-p10.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left")
            h3 Planteamiento del problema
            p.mb-0 ¿Cómo satisfacer la creciente demanda de productos de panadería saludables y sin alérgenos en un mercado donde la oferta actual no responde a las necesidades de los consumidores, asegurando altos estándares de calidad y accesibilidad?
          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema1/6.svg', style="max-width:486px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Estudio de mercado

    p(data-aos="fade-right") El análisis del mercado se centra en comprender las necesidades de los consumidores y evaluar las oportunidades para diferenciar a SanoDelight dentro del sector de alimentos saludables.


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-1.png")
            .col-lg-7.order-lg-1
              h3 Análisis de demanda
              p La demanda de productos saludables, especialmente los libres de alérgenos, ha crecido de manera significativa en los últimos años. Esto se debe al incremento de personas diagnosticadas con condiciones como intolerancia al gluten, intolerancia a la lactosa y diabetes, así como al interés de muchos consumidores en adoptar un estilo de vida más saludable. Este segmento busca productos que no solo sean seguros desde un punto de vista nutricional, sino también sabrosos y accesibles.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-2.png")
            .col-lg-7.order-lg-1
              h3 Análisis de oferta
              p El mercado actual presenta una oferta limitada de productos de panadería que cumplan con los estándares requeridos por este tipo de consumidores. Si bien existen panaderías artesanales y algunos productos especializados en supermercados, la mayoría de estas opciones son importadas, costosas y, en muchos casos, no están diseñadas para un público masivo. Esto abre una oportunidad para que SanoDelight se posicione como una opción confiable y accesible.

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5

        #t_1_3.titulo-segundo(data-aos="flip-up")
          h2 #[span 1.3] Segmentación del mercado
        
        p(data-aos="fade-right") SanoDelight se dirigirá a los siguientes grupos:


        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6
            .bg-color-5.p-4(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Consumidores con restricciones alimenticias
                  p.mb-0 Personas con alergias, intolerancias (gluten, lactosa) o que necesitan opciones sin azúcar.
          .col-lg-6
            .bg-color-5.p-4(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Consumidores conscientes de su salud
                  p.mb-0 Individuos interesados en opciones naturales, sin procesar y compatibles con su estilo de vida.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6
            .bg-color-5.p-4(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Consumidores veganos y orgánicos
                  p.mb-0 Personas que buscan alternativas basadas en plantas, libres de productos animales y ecológicas.
          .col-lg-6
            .bg-color-5.p-4(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Segmento premium
                  p.mb-0 Consumidores dispuestos a pagar más por productos de alta calidad y beneficios adicionales.


    p(data-aos="fade-right") La estrategia de comercialización incluirá múltiples canales de distribución:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-color-2.p-4(data-aos="fade-left")
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-7
              .px-5
                ol.lista-ol--cuadro(data-aos="fade-up")
                  li 
                    .lista-ol--cuadro__vineta
                      span 1
                    | Tienda física: punto de venta directo para la experiencia del cliente.
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Tienda en línea: plataforma para pedidos y entregas, ampliando la cobertura.
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Redes sociales: promoción y captación de clientes a través de campañas digitales.
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    | Distribución en tiendas y supermercados selectos: alianzas con establecimientos enfocados en alimentos saludables.
                  li 
                    .lista-ol--cuadro__vineta
                      span 5
                    | Servicio de entrega a domicilio: conveniencia para los clientes con limitaciones de movilidad.
            .col-lg-4
              figure
                img(src="@/assets/curso/tema1/11.svg", style="max-width: 300px").mx-auto


    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Objetivo general

    p(data-aos="fade-right") Desarrollar una panadería especializada en productos saludables y libres de alérgenos bajo la marca SanoDelight, satisfaciendo las necesidades de consumidores con restricciones alimenticias y promoviendo un estilo de vida saludable.

    p(data-aos="fade-right") #[strong Los objetivos específicos como:]


    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/12.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Desarrollo de productos
                p.mb-0 Crear una línea de panadería sin gluten, levadura, azúcar y lácteos con ingredientes naturales.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/13.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Estrategias de marketing
                p.mb-0 Implementar campañas en redes sociales y otras plataformas digitales para atraer a clientes.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/14.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Garantía de calidad
                p.mb-0 Establecer protocolos estrictos de seguridad alimentaria y prevención de contaminación cruzada.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            #t_1_5.titulo-segundo(data-aos="flip-up")
              h2 #[span 1.5] Justificación

            .bg-color-3.p-4(data-aos="fade-left").mb-5
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema1/15.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 El proyecto responde a la creciente necesidad de opciones alimenticias inclusivas y saludables. Además, ofrece una oportunidad de negocio rentable al atender un mercado desatendido, generando empleo y fortaleciendo el compromiso con la comunidad.


            #t_1_6.titulo-segundo(data-aos="flip-up")
              h2 #[span 1.6] Análisis de viabilidad

            p(data-aos="fade-right") El análisis de viabilidad asegura que SanoDelight  opere eficientemente y cumpla con los estándares más altos en la producción de alimentos saludables:

          .col-lg-4
            figure
              img(src="@/assets/curso/tema1/16.svg", alt="").mb-4.mb-lg-0

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/17.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") El enfoque colaborativo tiene múltiples beneficios en la resolución de conflictos:

        AcordionA(tipo="b")
          .div(titulo="Infraestructura y maquinaria")
            p Equipos especializados que previenen la contaminación cruzada y facilitan la producción sin alérgenos.

          .div(titulo="Cumplimiento normativo")
            p Certificaciones HACCP y NSF para garantizar la seguridad y calidad de los productos.

          .div(titulo="Escalabilidad")
            p Evaluación de capacidad de producción para satisfacer la demanda actual y futura.

          .div(titulo="Protocolos de higiene")
            p Estrategias de limpieza y mantenimiento para mantener condiciones óptimas en la operación.

    h2.mb-4(data-aos="flip-up") Viabilidad económica
    .bg-full-width.bg-color-2.mb-lg-5
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center
          .col-lg-8
            
            p.mb-4(data-aos="fade-right") Se invita a leer el documento sobre #[b Viabilidad económica], que presenta un análisis detallado de la inversión inicial, los costos proyectados y los ingresos estimados al primer año de operación. Se incluye un estado de resultados proyectado que refleja una utilidad neta de $6,020 USD y un balance general que evidencia una sólida estructura financiera con activos por $31,000 USD. Este análisis permite evaluar la rentabilidad y sostenibilidad del proyecto, proporcionando herramientas clave para la toma de decisiones estratégicas.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Viabilidad económica.

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/18.png', alt='')


    h2.mb-4(data-aos="flip-up") Viabilidad legal

    p(data-aos="fade-right") Para garantizar la operatividad del proyecto y cumplir con los estándares de calidad, SanoDelight se centrará en los siguientes elementos:


    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-11.col-md-4.col-xl-5.pe-xl-8
            figure.mb-4.mb-md-0
              img(src='@/assets/curso/tema1/19.png', alt='Texto que describa la imagen')
          .col-11.col-md-8.col-xl-7
            SlyderF(columnas="col-12 col-lg-6")
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  img(src='@/assets/curso/tema1/20.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Licencia sanitaria
                  p.text-center Obtención de una licencia que certifique las condiciones de higiene y seguridad alimentaria del establecimiento.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  img(src='@/assets/curso/tema1/21.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Permiso de funcionamiento
                  p.text-center Autorización local que garantice la operación del negocio en conformidad con las normativas municipales.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  img(src='@/assets/curso/tema1/22.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Etiquetado de productos
                  p.text-center Desarrollo de etiquetas claras con ingredientes, información nutricional y advertencias sobre alérgenos.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  img(src='@/assets/curso/tema1/23.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Certificaciones
                  p.text-center Certificaciones de terceros, como sin gluten u orgánico, para garantizar la calidad y confianza del producto.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  img(src='@/assets/curso/tema1/24.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Contratación de personal
                  p.text-center Contratos laborales en cumplimiento con las normativas locales, incluyendo formación en higiene y seguridad.

    p(data-aos="fade-right").mb-5 Estos elementos aseguran que SanoDelight  opere dentro del marco legal, protegiendo tanto a los consumidores como a la empresa.


    h2.mb-4(data-aos="flip-up").mb-4 Viabilidad ambiental

    p(data-aos="fade-right").mb-4 Para mitigar el impacto ambiental y promover la sostenibilidad, SanoDelight implementará las siguientes medidas:


    ul.lista-ul--color.color-dark.mb-5
      li.mb-0
        i.fas.fa-arrow-circle-right
        | #[b Gestión de residuos orgánicos:] Implementación de un sistema de compostaje para reutilizar desechos de producción en fertilización.
      li.mb-0
        i.fas.fa-arrow-circle-right
        | #[b Empaques biodegradables:] Uso de materiales biodegradables o reciclables para reducir residuos plásticos.
      li.mb-0
        i.fas.fa-arrow-circle-right
        | #[b Reciclaje de desechos no orgánicos:] Colaboración con empresas locales para garantizar la correcta disposición de materiales reciclables.
      li.mb-0
        i.fas.fa-arrow-circle-right
        | #[b Eficiencia energética:] Adquisición de equipos de alta eficiencia para minimizar el consumo de electricidad.
      li.mb-0
        i.fas.fa-arrow-circle-right
        | #[b Energías renovables:] Instalación de paneles solares para reducir la dependencia de fuentes de energía no renovables.
      li.mb-0
        i.fas.fa-arrow-circle-right
        | #[b Ingredientes orgánicos y sostenibles:] Compra de insumos de proveedores responsables, certificados como orgánicos o de comercio justo.


    h2.mb-4(data-aos="flip-up").mb-4 Viabilidad administrativa

    .bg-full-width.bg-color-4.mb-lg-5
      .px-4.px-md-5.py-4.py-lg-5

        p(data-aos="fade-right") La estructura administrativa garantizará una operación eficiente y organizada, con un enfoque en la calidad y el crecimiento sostenible:

        ul.lista-ul--color.color-dark.mb-4
          li.mb-0
            i.fas.fa-arrow-circle-right
            | #[b Estructura organizacional:] Definición de roles claros para optimizar la operatividad, desde la producción hasta la gestión comercial.
          li.mb-0
            i.fas.fa-arrow-circle-right
            | #[b Selección de personal:] Contratación de personal con experiencia en panadería saludable y formación continua en seguridad alimentaria.
          li.mb-0
            i.fas.fa-arrow-circle-right
            | #[b Sistemas de control:] Implementación de sistemas de gestión para monitorear la producción, la calidad y las finanzas del negocio.
          li.mb-0
            i.fas.fa-arrow-circle-right
            | #[b Planes de formación continua:] Programas de capacitación periódica para mantener a los empleados actualizados en tendencias y normativas.
          li.mb-0
            i.fas.fa-arrow-circle-right
            | #[b Elementos corporativos:] Creación de políticas internas que garanticen la transparencia y el cumplimiento de objetivos estratégicos.
    



    //- .row.justify-content-center.align-items-center.mb-5
    //-   .col-lg-9

    //-     .bg-color-white.shadow-soft.py-4.px-lg-5
    //-       .row.justify-content-around.align-items-center
    //-         .col-md-auto
    //-           img(src="@/assets/template/bg-icono-pdf.svg", style="width: 90px;")
    //-         .col
    //-           .row.justify-content-between.align-items-center
    //-             .col.mb-3.mb-sm-0
    //-               h3.mb-1 Análisis de viabilidad
    //-               p En el documento se abordan las estrategias de viabilidad ambiental y administrativa para SanoDelight, centradas en la sostenibilidad y la eficiencia operativa.
    //-             .col-sm-auto
    //-               a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")
    //-                 span Ver más
    //-                 i.fas.fa-arrow-right

    #t_1_7.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.7] Monitoreo y mejora

    p(data-aos="fade-right") Se establecerá un sistema de evaluación continua para medir el desempeño en todas las áreas, garantizando un enfoque en la mejora constante y la adaptabilidad a las necesidades del mercado.

    p(data-aos="fade-right") A continuación, se visualiza la estructura organizacional, con los cargos respectivos. 

    .titulo-figura.mb-2
      h5(data-aos="fade-right") Figura 1.
      span Estructura organizacional SanoDelight

    .bg-color-info.px-4.py-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8
          figure
            img(src="@/assets/curso/tema1/figura1.svg", alt="").mx-auto


    .bg-color-2.p-4.mb-5
      p(data-aos="fade-right").mb-0 La empresa contará con un organigrama claro que define roles y responsabilidades, asegurando una comunicación entre los diferentes niveles jerárquicos y operativos.


    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/25.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") El enfoque colaborativo tiene múltiples beneficios en la resolución de conflictos:

        AcordionA(tipo="b")
          .div(titulo="Contratación del personal")
            p Se priorizará personal con experiencia en panadería, especialmente en la producción de productos saludables, conocimientos en atención al cliente y gestión administrativa. Además, se buscarán individuos que compartan los valores de sostenibilidad y calidad que promueve la empresa.

          .div(titulo="Programas de formación continua")
            p Se implementarán programas para el personal, enfocados en áreas como: producción de alimentos, atención al cliente y normativas de higiene y seguridad alimentaria, entre otros.

          .div(titulo="Definición de elementos corporativos")
            p Los elementos corporativos de SanoDelight están diseñados para comunicar su propuesta de valor como una panadería saludable, innovadora y responsable con el medio ambiente.

          .div(titulo="Nombre de la empresa")
            p SanoDelight: Combina las palabras “sano” y #[em delight] (deleite, en inglés), lo que resalta la propuesta de valor: productos saludables sin comprometer el sabor ni la experiencia del consumidor. El nombre es memorable y transmite un enfoque positivo hacia la salud y el disfrute.

          .div(titulo="Logotipo")
            p El logotipo reflejará los valores fundamentales de la marca, como salud, frescura, calidad y sostenibilidad. Usará colores naturales y frescos (verde para lo orgánico y saludable) y tonos cálidos (representativos de la panadería y tradición). El diseño será simple, moderno y versátil para distintos medios (etiquetas, empaques, redes sociales, etc.).

    p(data-aos="fade-left") El enfoque colaborativo tiene múltiples beneficios en la resolución de conflictos:


    .row.align-items-start.mb-5
      .col-lg-8

        AcordionA(tipo="b")
          .div(titulo="Colores Corporativos")
            p Los colores corporativos de #[b SanoDelight] serán seleccionados para transmitir frescura, salud y confianza. Algunos colores clave incluirán:
            p.ps-4 - #[b Verde:] Representa la salud, lo orgánico, lo natural y lo fresco, alineándose con los valores de la panadería.
            p.ps-4 - #[b Beige o marrón claro:] Evoca la calidez del pan recién horneado y la tradición, además de ser un color asociado con la tierra y la sostenibilidad.
            p.ps-4 - #[b Blanco:] Simboliza pureza, higiene y transparencia, reflejando los estándares de calidad en la producción de los productos
          .div(titulo="Misión")
            p Ofrecer productos de panadería saludables, deliciosos y accesibles, elaborados con ingredientes orgánicos y sin alérgenos, para satisfacer las necesidades de nuestros clientes y contribuir a un estilo de vida saludable.

          .div(titulo="Visión")
            p Ser la panadería líder en productos saludables en la región, destacándose por la innovación, la sostenibilidad y el compromiso con la salud de nuestros clientes.

          .div(titulo="Valores")
            ul.lista-ul--color.color-dark.mb-4
              li.mb-0
                i.fas.fa-arrow-circle-right
                | #[b Salud y bienestar:] Compromiso con la creación de productos que promuevan un estilo de vida saludable.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | #[b Sostenibilidad:] Uso de ingredientes orgánicos y sostenibles, y prácticas de producción respetuosas con el medio ambiente.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | #[b Calidad:] Enfoque en la calidad de los productos y el servicio al cliente.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | #[b Innovación:] Búsqueda constante de nuevas fórmulas y productos que se ajusten a las necesidades cambiantes de los consumidores.
            

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/26.png", alt="").mb-4.mb-lg-0

    .row.mb-5
      .col-lg-7
        p(data-aos="fade-right").mb-4 A continuación, se presenta el siguiente podcast, enfocado en el monitoreo y control dentro del proyecto SanoDelight. Este episodio explora cómo los indicadores de desempeño permiten evaluar el progreso, optimizar las estrategias y garantizar tanto la satisfacción del cliente como la calidad de los productos. Se abordan tres áreas clave: ventas, satisfacción del cliente y calidad, detallando las métricas que guían el éxito del proyecto.

        .bg-color-4.mb-4
          .p-4.p-md-5
            TarjetaAudio.color-primario.bg-color-white.mb-3(
              texto="Monitoreo y control"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )

      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/28.svg", data-aos="zoom-in").mt-4.mt-lg-0

    #t_1_8.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.8] Planificación del Proyecto

    .bg-full-width.bg-color-2.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/27.png', alt='')
          .col-lg-8

            p.mb-4(data-aos="fade-right") En el documento se detalla el plan para la apertura de SanoDelight, un proyecto que se desarrollará en un plazo de 6 meses mediante un cronograma visualizado con un diagrama de Gantt. Las etapas clave incluyen el desarrollo del producto, desde la selección de ingredientes hasta los ajustes finales de las recetas, garantizando calidad y beneficios nutricionales.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Planificación del Proyecto.




    #t_1_9.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.9] Evaluación y cierre

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-5 La fase de evaluación y cierre en el proyecto SanoDelight es fundamental para medir los resultados obtenidos, identificar aprendizajes clave y establecer mejoras para futuras operaciones o expansiones. Esta etapa incluye tanto la comparación de resultados con los objetivos establecidos como la documentación de lecciones aprendidas para garantizar la sostenibilidad y crecimiento del negocio.

        h3(data-aos="fade-right") Evaluación de resultados en SanoDelight

        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/30.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Se evalúan los indicadores clave de desempeño financiero y de mercado con base en las metas establecidas al inicio del proyecto. A continuación, se resume las áreas de enfoque:

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/29.png", data-aos="zoom-in")


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-start.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-1-2.png")
            .col-lg-7.order-lg-1
              h3 Comparación de ingresos vs. Objetivos
              p Análisis de si los ingresos generados cumplen o superan las metas financieras iniciales.
          .row.align-items-start.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-2-2.png")
            .col-lg-7.order-lg-1
              h3 Rentabilidad neta
              p Cálculo del margen de ganancia después de cubrir costos operativos.
          .row.align-items-start.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-3-2.png")
            .col-lg-7.order-lg-1
              h3 Cumplimiento de objetivos de mercado
              p Evaluación del alcance de la cuota de mercado y cantidad de clientes previstos.
          .row.align-items-start.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-4-2.png")
            .col-lg-7.order-lg-1
              h3 Retorno sobre la inversión (ROI)
              p Medición del impacto financiero de las inversiones iniciales frente a los ingresos generados.
          .row.align-items-start.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-5-2.png")
            .col-lg-7.order-lg-1
              h3 Indicadores de desempeño
              p Revisión de ventas, satisfacción del cliente y calidad del producto frente a los objetivos iniciales. 


    h2(data-aos="fade-right") Lecciones aprendidas en SanoDelight
    p(data-aos="fade-right") Esta parte identifica las fortalezas del proyecto y las áreas a mejorar, facilitando la planificación de futuras expansiones o adaptaciones. A continuación, una tabla con los puntos clave:

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema1/info1.png', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="20%" y="57.5%" numero="+")
                  h5 Estrategias exitosas
                  p Documentación de campañas y prácticas efectivas para replicarlas en futuras expansiones.

                .bg-color-white.box-shadow.p-3(x="29%" y="34%" numero="+")
                  h5 Gestión de calidad
                  p Análisis de problemas de calidad detectados y medidas para su resolución.

                .bg-color-white.box-shadow.p-3(x="59%" y="6%" numero="+")
                  h5 Optimización de costos
                  p Identificación de áreas donde reducir costos sin comprometer la calidad del producto o servicio.

                .bg-color-white.box-shadow.p-3(x="69%" y="35%" numero="+")
                  h5 Atención al cliente
                  p Evaluación y mejora de protocolos para garantizar la satisfacción y fidelización de los clientes.

                .bg-color-white.box-shadow.p-3(x="76.5%" y="57%" numero="+")
                  h5 Nuevas oportunidades de mercado
                  p Reflexión sobre segmentos o mercados no abordados que podrían representar una expansión futura.



    .row.mb-5
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/31.png", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        .bg-color-3.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 En conclusión, el análisis detallado de los resultados y aprendizajes permite establecer una base sólida para el crecimiento sostenible de SanoDelight. La evaluación garantiza que los esfuerzos se alineen con las metas iniciales, mientras que las lecciones aprendidas enriquecen la estrategia para adaptarse a nuevas oportunidades y desafíos.

        .bg-color-white.shadow-soft.p-4.mb-4
          .row.justify-content-around.align-items-center
            .col-md-auto
              img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Proyecto cultural
                  p.mb-0 Para conocer a fondo cómo  se estructura un proyecto de manera completa, los invito a ver el siguiente video. 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/SIh8qDT62D8?si=omnYGv6pIAtygS3H" target="_blank")
                    span Ver video
                    i.fas.fa-arrow-right



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
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
