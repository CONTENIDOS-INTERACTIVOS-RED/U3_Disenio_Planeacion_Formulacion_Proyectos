export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Formulación de proyectos y evaluación de impacto',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Elaboración de una propuesta de proyecto completa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Descripción del problema',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estudio de mercado',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Evaluación de impacto',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Costos',
      significado:
        'desembolsos directos necesarios para producir bienes o servicios, incluyendo materia prima, mano de obra y producción.',
    },
    {
      termino: 'Evaluación ex-ante',
      significado:
        'análisis previo a la ejecución del proyecto para estimar su viabilidad, impacto y posibles beneficios y riesgos.',
    },
    {
      termino: 'Evaluación ex-post',
      significado:
        'análisis posterior al proyecto para medir su efectividad, resultados y beneficios alcanzados respecto a lo planificado.',
    },
    {
      termino: 'Gastos',
      significado:
        'erogaciones no directamente relacionadas con la producción, como administración, ventas o mantenimiento.',
    },
    {
      termino: 'Ingresos netos',
      significado:
        'ganancias restantes después de restar todos los costos y gastos de los ingresos totales.',
    },
    {
      termino: 'Inversión',
      significado:
        'recursos destinados a un proyecto o activo con la expectativa de generar ingresos o beneficios futuros.',
    },
    {
      termino: 'Retorno (ROI)',
      significado:
        'indicador que mide la rentabilidad de una inversión, calculando el beneficio generado en relación al monto invertido.',
    },
    {
      termino: 'Riesgos operacionales',
      significado:
        'posibles eventos o fallas que pueden afectar el funcionamiento y desempeño de un proyecto o empresa.',
    },
    {
      termino: 'Tasa Interna de Retorno (TIR)',
      significado:
        'tasa de descuento que iguala el valor presente de flujos futuros con la inversión inicial, indicando la rentabilidad del proyecto.',
    },
    {
      termino: 'Valor Actual Neto (VAN)',
      significado:
        'indicador financiero que calcula el valor presente de los flujos futuros de efectivo menos la inversión inicial.',
    },
  ],
}
