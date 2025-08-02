import type { QuizStep } from "@/types/quiz"

export const quizSteps: QuizStep[] = [
  // 1 - Descubre tu tipo de Ayuno intermitente ideal (ya está en la landing page)

  // 2 - ¿Cuál es tu objetivo principal?
  {
    id: "main-objective",
    question: "¿Cuál es tu objetivo principal?",
    type: "single-choice",
    options: [
      {
        label: "Bajar de peso",
        value: "weight-loss",
        image:
          "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/a-photograph-of-a-woman-showcasing-a-two_QbAUOafwRHSw70sAGWpQQQ_e0QoxTLvRDirOl-XtvMzlA.jpeg",
      },
      {
        label: "Ponerme en forma",
        value: "get-fit",
        image:
          "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/a-photograph-focuses-on-the-powerful-tor_Z4FHeIdxQeSPdmxzgDRLRg_nw4SdWjBQx-0HK9IjKRUMg.jpeg",
      },
      {
        label: "Mejorar la salud del corazón",
        value: "heart-health",
        image:
          "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/a-professional-portrait-photograph-showc_bMz6RWw3QtqfBDKESMmEKw_fekGZM17SXuAI7ejX6MYYQ.jpeg",
      },
      {
        label: "Aliviar el estrés",
        value: "stress-relief",
        image:
          "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/a-vibrant-portrait-photograph-captures-a_xadpjavsTOiUzia64vzkVQ_2lF6PnPsTnCXBRtFgYWCPw.jpeg",
      },
    ],
  },

  // 3 - ¿Qué talla de ropa usas?
  {
    id: "current-size",
    question: "¿Qué talla de ropa usas?",
    type: "single-choice",
    options: [
      {
        label: "XS",
        value: "pp",
        image:
          "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/a-photograph-of-a-young-woman-with-long-_yDErrPmjTaK1MN8GcSkyjw_1o01mK7OSRmMUdzUCU2N1w.jpeg",
      },
      {
        label: "S",
        value: "p",
        image:
          "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/a-photograph-of-a-young-woman-with-long-_cxs0uMoxQzOrZQGyQkYYWg_1o01mK7OSRmMUdzUCU2N1w.jpeg",
      },
      {
        label: "M",
        value: "m",
        image:
          "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/a-photograph-of-a-confident-woman-with-w_co1K3M78SmqUTf2qfzLcYA_oCu5EmseS-qAgeCtI4U4cQ.jpeg",
      },
      {
        label: "L",
        value: "g",
        image:
          "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/a-photograph-of-a-confident-woman-with-w_HJcLKNlRSKKHFm3MIswJ7Q_Bu33yAxDSs67Z6oKXZAotA.jpeg",
      },
      {
        label: "XL",
        value: "gg",
        image:
          "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/a-imagem-mostra-uma-mulher-com-fisico-cu_8ceyzEKPTRCek4A04MsZsw_crl3f2QGSjmdbE7ymphidA.jpeg",
      },
      {
        label: "XXL",
        value: "xgg",
        image:
          "https://nutricaoalimentos.shop/wp-content/uploads/2025/08/Black-White-Beige-Grey-Minimalist-Simple-Modern-Photo-Collage-Instagram-Post.png",
      },
    ],
  },

  // 4 - ¿Qué talla quieres usar?
  {
    id: "desired-size",
    question: "¿Qué talla quieres usar?",
    type: "single-choice",
    options: [
      {
        label: "XS",
        value: "pp",
        image:
          "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/a-imagem-mostra-uma-mulher-com-um-fisico_7ToSL1XuQF-GRgkcmuAUUg_r8DfHEwJQ7yLjMhwZ0aOTA.jpeg",
      },
      {
        label: "S",
        value: "p",
        image:
          "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/a-imagem-mostra-uma-mulher-jovem-e-sorri_2B7awq7yRSq50POz_EXK3A_1o01mK7OSRmMUdzUCU2N1w.jpeg",
      },
      {
        label: "M",
        value: "m",
        image:
          "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/a-photograph-of-a-confident-woman-with-d_qtHvitNlT-ibWDrgq63rcQ_oCu5EmseS-qAgeCtI4U4cQ.jpeg",
      },
      {
        label: "L",
        value: "g",
        image:
          "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/a-photograph-showcases-a-confident-woman_r1ahqajHRRqm2q9-VpJEdg_crl3f2QGSjmdbE7ymphidA.jpeg",
      },
      {
        label: "XL",
        value: "gg",
        image:
          "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/a-photograph-of-a-woman-with-a-curvy-fig_ABdaYM9uQZOt1K7sdHc_rw_crl3f2QGSjmdbE7ymphidA-1.jpeg",
      },
      {
        label: "XXL",
        value: "xgg",
        image:
          "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/a-imagem-mostra-uma-mulher-com-fisico-cu_bSBTELU5STmR1EJLSJjSlA_crl3f2QGSjmdbE7ymphidA.jpeg",
      },
    ],
  },

  // 5 - ¿Tienes dificultad para elegir tu ropa con tu peso actual?
  {
    id: "clothes-difficulty",
    question: "¿Tienes dificultad para elegir tu ropa con tu peso actual?",
    type: "single-choice",
    options: [
      { label: "Casi siempre", value: "almost-always" },
      { label: "A veces", value: "sometimes" },
      { label: "Raramente", value: "rarely" },
      { label: "Nunca", value: "never" },
    ],
  },

  // 6 - Vistiendo ropa antigua nuevamente
  {
    id: "transformation-story",
    question: "Vistiendo ropa olvidada",
    type: "single-choice",
    options: [{ label: "Continuar", value: "continue" }],
    socialProof: {
      mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Body-B9juEAuPht5oSTMhtLtLbJLR1xeKMb.png",
      secondaryImages: [
        "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/blue-gradient-travel-Presentation-169.png",
      ],
    },
    insight: "¡Historias como la de Manuela muestran que es posible! Vamos a crear tu plan personalizado.",
  },

  // 7 - ¿En qué áreas del cuerpo quieres enfocarte?
  {
    id: "focus-areas",
    question: "¿En qué áreas del cuerpo quieres enfocarte?",
    type: "multiple-choice",
    options: [
      {
        label: "Abdomen",
        value: "belly",
        image:
          "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/a-imagem-mostra-o-torso-de-uma-pessoa-em_D1v2d1vzS1-YaEyqH1go4g_tAHRg6ghSlaVkvixI-eeBw.jpeg",
      },
      {
        label: "Glúteos",
        value: "butt",
        image:
          "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/a-photograph-showcases-a-woman-s-back-el_kN-nOhBITIilHDNiOQdFLA_LiQ1Mt16T9alx6mbkKnKTw.jpeg",
      },
      {
        label: "Pecho",
        value: "chest",
        image:
          "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/a-soft-natural-light-photograph-showcase_a7gILYuPSmS6FsIoNNS-xg_7L_dwBpVR2WzY-LMgY7Rkg-e1753983078439.jpeg",
      },
      {
        label: "Piernas",
        value: "legs",
        image:
          "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/a-minimalist-fine-art-photograph-showcas_P6oCcnuvT0mxt8zM_OFbGw_Ei0oAYAAQQe3bEb0Cn2vjA.jpeg",
      },
    ],
  },

  // 8 - ¿Qué te describe mejor?
  {
    id: "main-challenge",
    question: "¿Qué te describe mejor?",
    type: "single-choice",
    options: [
      { label: "Tengo dificultad para ganar músculos", value: "muscle-gain", emoji: "😳" },
      { label: "Subo y bajo de peso sin esfuerzo", value: "weight-fluctuation", emoji: "💪" },
      { label: "Subo de peso fácilmente, pero me cuesta bajarlo", value: "weight-loss", emoji: "😬" },
    ],
    insight: "¡Entendí tu perfil metabólico! Esto va a influir directamente en tu plan de ayuno.",
  },

  // 9 - ¿Hace cuánto tiempo te sentiste en tu mejor forma?
  {
    id: "best-shape-time",
    question: "¿Hace cuánto tiempo te sentiste en tu mejor forma?",
    type: "single-choice",
    options: [
      { label: "0 a 6 meses atrás", value: "0-6-months" },
      { label: "7 a 12 meses atrás", value: "7-12-months" },
      { label: "1 a 3 años atrás", value: "1-3-years" },
      { label: "Más de 3 años atrás", value: "3-plus-years" },
    ],
    insight: "¡Esta información es crucial para definir la intensidad ideal de tu ayuno!",
  },

  // 10 - ¿Qué sabes sobre el ayuno intermitente?
  {
    id: "knowledge",
    question: "¿Qué sabes sobre el ayuno intermitente?",
    type: "single-choice",
    options: [
      { label: "No sé nada", value: "nothing", emoji: "🤔" },
      { label: "Ya escuché un poco", value: "little", emoji: "🤷‍♂️" },
      { label: "Entiendo bastante", value: "much", emoji: "😎" },
    ],
    insight: "¡Perfecto! Vamos a personalizar tu jornada basada en tu nivel de conocimiento actual.",
  },

  // 11 - ¿Cuándo fue la última vez que te sentiste deseada?
  {
    id: "last-desired",
    question: "¿Cuándo fue la última vez que te sentiste deseada?",
    type: "single-choice",
    options: [
      { label: "¡Me siento deseada todo el tiempo!", value: "always" },
      { label: "De vez en cuando me siento deseada", value: "sometimes" },
      { label: "Hace algunos años, cuando era más delgada", value: "years-ago" },
      { label: "No recuerdo la última vez que me sentí así", value: "dont-remember" },
    ],
  },

  // 12 - Aumenta tu libido
  {
    id: "libido-boost",
    question: "Despierta Tu Energía Íntima: Cómo la Pérdida de Peso Reenciende Tu Libido Naturalmente",
    type: "single-choice",
    options: [{ label: "Continuar", value: "continue" }],
    socialProof: {
      mainImage: "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/g1.png",
      text: "Cuando pierdes peso de forma saludable, tu cuerpo naturalmente equilibra las hormonas responsables del deseo y bienestar.",
    },
    insight: "¡El ayuno intermitente puede mejorar significativamente tus niveles hormonales y energía!",
  },

  // 13 - ¿Cuándo sueles desayunar?
  {
    id: "breakfast-time",
    question: "¿Cuándo sueles desayunar?",
    type: "single-choice",
    options: [
      {
        label: "Entre las 6 y 8 de la mañana",
        value: "6-8",
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/f3d86503-225e-419e-a2f1-5ed00e6806fe.png",
      },
      {
        label: "Entre las 8 y 10 de la mañana",
        value: "8-10",
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/090b795a-0356-4790-afa1-58c6566a39c3.png",
      },
      {
        label: "Entre las 10h y mediodía",
        value: "10-12",
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/f7c5d183-97f9-41a2-9a74-1b9320cabfbc.png",
      },
      {
        label: "Suelo saltarme el desayuno",
        value: "skip",
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/b51ff6c9-6923-4be7-8cf8-a583bdfc239a.png",
      },
    ],
  },

  // 14 - ¿Cuándo sueles almorzar?
  {
    id: "lunch-time",
    question: "¿Cuándo sueles almorzar?",
    type: "single-choice",
    options: [
      {
        label: "Entre las 10h y mediodía",
        value: "10-12",
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/b288d43f-7182-4f99-8703-9c932a989e53.png",
      },
      {
        label: "Entre mediodía y las 14h",
        value: "12-14",
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/bba1af31-3b23-4b0b-9767-51d96351881b.png",
      },
      {
        label: "Entre las 14h y 16h",
        value: "14-16",
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/ae190bf8-79f9-4b6f-b580-fcd7699febf5.png",
      },
      {
        label: "Suelo saltarme el almuerzo",
        value: "skip",
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/11857cfc-0157-46f5-bb95-26c2bcc47703.png",
      },
    ],
  },

  // 15 - ¿Cuándo cenas?
  {
    id: "dinner-time",
    question: "¿Cuándo cenas?",
    type: "single-choice",
    options: [
      {
        label: "Entre las 16h y 18h",
        value: "16-18",
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/73e41cdc-09f2-4885-ae08-29a803bb1340.png",
      },
      {
        label: "Entre las 18h y 20h",
        value: "18-20",
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/e3584f79-99b0-41ce-9e66-872a0b1ab6a6.png",
      },
      {
        label: "Entre las 20h y 22h",
        value: "20-22",
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/f66d23d7-53c5-460b-ad8a-a9b31eea2546.png",
      },
      {
        label: "Suelo saltarme la cena",
        value: "skip",
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/11857cfc-0157-46f5-bb95-26c2bcc47703.png",
      },
    ],
  },

  // 16 - ¿Tienes alguna restricción alimentaria?
  {
    id: "dietary-restrictions",
    question: "¿Tienes alguna restricción alimentaria?",
    type: "multiple-choice",
    options: [
      { label: "Sin lactosa", value: "lactose-free", description: "No consumo alimentos con lactosa" },
      { label: "Sin gluten", value: "gluten-free", description: "Evito granos con gluten" },
      { label: "Vegetariano", value: "vegetarian", description: "No como carne" },
      { label: "Vegano", value: "vegan", description: "No consumo productos de origen animal" },
      { label: "Sin pescado", value: "no-fish", description: "No como ningún tipo de pescado" },
      { label: "Ninguna de las opciones", value: "none", description: "Como casi de todo" },
    ],
  },

  // 17 - Elige las comidas que te gustan (Etapa 16 en el conteo del usuario)
  {
    id: "food-preferences",
    question: "Elige las comidas que te gustan",
    type: "multiple-choice",
    options: [
      { label: "Tomate", value: "tomato", category: "Vegetales", categoryEmoji: "🥬" },
      { label: "Pepino", value: "cucumber", category: "Vegetales", categoryEmoji: "🥬" },
      { label: "Cebolla", value: "onion", category: "Vegetales", categoryEmoji: "🥬" },
      { label: "Pimiento", value: "pepper", category: "Vegetales", categoryEmoji: "🥬" },
      { label: "Zanahoria", value: "carrot", category: "Vegetales", categoryEmoji: "🥬" },
      { label: "Lechuga", value: "lettuce", category: "Vegetales", categoryEmoji: "🥬" },

      { label: "Arroz", value: "rice", category: "Granos y Panes", categoryEmoji: "🍞" },
      { label: "Espagueti", value: "spaghetti", category: "Granos y Panes", categoryEmoji: "🍞" },
      { label: "Pan integral", value: "whole-wheat-bread", category: "Granos y Panes", categoryEmoji: "🍞" },
      { label: "Cuscús", value: "couscous", category: "Granos y Panes", categoryEmoji: "🍞" },

      { label: "Huevo", value: "egg", category: "Carnes y huevos", categoryEmoji: "🍗" },
      { label: "Pollo", value: "chicken", category: "Carnes y huevos", categoryEmoji: "🍗" },

      { label: "Salmón", value: "salmon", category: "Pescado", categoryEmoji: "🐟" },
      { label: "Atún", value: "tuna", category: "Pescado", categoryEmoji: "🐟" },
      { label: "Tilapia", value: "tilapia", category: "Pescado", categoryEmoji: "🐟" },
      { label: "Camarón", value: "shrimp", category: "Pescado", categoryEmoji: "🐟" },

      { label: "Leche", value: "milk", category: "Lácteos", categoryEmoji: "🥛" },
      { label: "Queso", value: "cheese", category: "Lácteos", categoryEmoji: "🥛" },
      { label: "Yogur", value: "yogurt", category: "Lácteos", categoryEmoji: "🥛" },
      { label: "Queso crema", value: "cream-cheese", category: "Lácteos", categoryEmoji: "🥛" },

      { label: "Manzana", value: "apple", category: "Frutas", categoryEmoji: "🍎" },
      { label: "Banana", value: "banana", category: "Frutas", categoryEmoji: "🍎" },
      { label: "Naranja", value: "orange", category: "Frutas", categoryEmoji: "🍎" },
      { label: "Fresa", value: "strawberry", category: "Frutas", categoryEmoji: "🍎" },
      { label: "Mango", value: "mango", category: "Frutas", categoryEmoji: "🍎" },
      { label: "Aguacate", value: "avocado", category: "Frutas", categoryEmoji: "🍎" },
    ],
  },

  // 18 - ¿Prefieres cocinar, comer fuera o pedir comida?
  {
    id: "cooking-preference",
    question: "¿Prefieres cocinar, comer fuera o pedir comida?",
    type: "single-choice",
    options: [
      {
        label: "Cocinar en casa",
        value: "cook",
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/5b55df79-4a5c-428f-ae14-160c2550b2ea.png",
      },
      {
        label: "Prefiero ir a un restaurante",
        value: "restaurant",
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/9dde8e32-1c2d-43c9-a4be-b10423e8626d.png",
      },
      {
        label: "Me gusta pedir comida",
        value: "delivery",
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/5e3088d9-ac8c-48d8-8ea2-9df6f9def874.png",
      },
      { label: "Hago un poco de todo", value: "mixed", emoji: "😊" },
    ],
  },

  // 19 - ¿Necesitas un descanso del Ayuno para el fin de semana?
  {
    id: "weekend-break",
    question: "¿Necesitas un descanso del Ayuno para el fin de semana?",
    type: "single-choice",
    options: [
      { label: "¡Por supuesto! El fin de semana es para disfrutar", value: "yes", emoji: "👌" },
      { label: "¡No paro ni en fin de semana!", value: "no", emoji: "💪" },
    ],
  },

  // 20 - ¿Con qué frecuencia haces ejercicio?
  {
    id: "exercise-frequency",
    question: "¿Con qué frecuencia haces ejercicio?",
    type: "single-choice",
    options: [
      { label: "Casi todos los días", value: "daily" },
      { label: "Varias veces por semana", value: "several-times" },
      { label: "Varias veces por mes", value: "monthly" },
      { label: "Nunca", value: "never" },
    ],
  },

  // 21 - ¿Tu familia y amigos te apoyan para mantenerte en forma?
  {
    id: "family-support",
    question: "¿Tu familia y amigos te apoyan para mantenerte en forma?",
    type: "single-choice",
    options: [
      { label: "Siempre me siento apoyada por mi familia y amigos", value: "always-supported", emoji: "🥰" },
      { label: "A veces me siento apoyada, pero no siempre", value: "sometimes-supported", emoji: "😔" },
      { label: "No siento mucho apoyo de ellos", value: "not-supported", emoji: "💔" },
    ],
  },

  // 22 - ¿Cómo es tu rutina de trabajo?
  {
    id: "work-routine",
    question: "¿Cómo es tu rutina de trabajo?",
    type: "single-choice",
    options: [
      { label: "de las 09:00 a las 18:00", value: "9-18" },
      { label: "Turnos nocturnos", value: "night-shifts" },
      { label: "Mi horario es flexible", value: "flexible" },
      { label: "Estoy jubilada", value: "retired" },
    ],
  },

  // 23 - ¿Cómo describes tu día a día?
  {
    id: "daily-activity",
    question: "¿Cómo describes tu día a día?",
    type: "single-choice",
    options: [
      { label: "Paso la mayor parte del día sentada", value: "sedentary", emoji: "💻" },
      { label: "Un poco sentada y un poco caminando", value: "mixed", emoji: "🧘‍♀️" },
      { label: "Estoy de pie todo el día", value: "standing", emoji: "🏃‍♀️" },
    ],
  },

  // 24 - Dinero y peso: un impacto inesperado en tu carrera
  {
    id: "career-impact",
    question: "El Secreto que Nadie Cuenta: Cómo Tu Peso Influye en Tu Éxito Profesional",
    type: "single-choice",
    options: [{ label: "Continuar", value: "continue" }],
    socialProof: {
      mainImage: "https://nutricaoalimentos.shop/wp-content/uploads/2025/08/g1-2-1.png",
      text: "Un estudio de la Universidad de Harvard y Stanford con 3.200 profesionales reveló que las personas que mantienen un peso saludable tienen 34% más posibilidades de recibir promociones y reportan 67% más confianza en presentaciones y reuniones importantes.",
    },
    insight: "¡Los estudios muestran que mantener un peso saludable puede impactar positivamente tu carrera y autoestima!",
  },

  // 25 - ¿Te quedas sin aliento después de subir un tramo de escaleras?
  {
    id: "stairs-breathless",
    question: "¿Te quedas sin aliento después de subir un tramo de escaleras?",
    type: "single-choice",
    options: [
      { label: "Me quedo tan sin aliento que no puedo hablar", value: "very-breathless", emoji: "😰" },
      { label: "Me quedo un poco sin aliento, pero puedo hablar", value: "little-breathless", emoji: "💨" },
      { label: "Estoy bien después de un tramo de escaleras", value: "fine", emoji: "🙂" },
      { label: "Puedo subir varios tramos de escalera fácilmente", value: "easy", emoji: "🚀" },
    ],
  },

  // 26 - ¿Con qué frecuencia sales a caminar?
  {
    id: "walking-frequency",
    question: "¿Con qué frecuencia sales a caminar?",
    type: "single-choice",
    options: [
      { label: "Casi todos los días", value: "daily", emoji: "😎" },
      { label: "3 a 4 veces por semana", value: "3-4-times", emoji: "💪" },
      { label: "1 a 2 veces por semana", value: "1-2-times", emoji: "🙂" },
      { label: "Más de una vez por mes", value: "monthly", emoji: "👍" },
    ],
  },

  // 27 - ¿Cuántas horas sueles dormir?
  {
    id: "sleep-hours",
    question: "¿Cuántas horas sueles dormir?",
    type: "single-choice",
    options: [
      { label: "Duermo poco (menos de 5 horas)", value: "less-5" },
      { label: "Logro dormir un poco (5-6 horas)", value: "5-6" },
      { label: "Duermo mucho y bien (7-8 horas)", value: "7-8" },
      { label: "Me gusta dormir hasta más tarde (más de 8 horas)", value: "more-8" },
    ],
  },

  // 28 - ¿Cuál es tu consumo diario de agua?
  {
    id: "water-intake",
    question: "¿Cuál es tu consumo diario de agua?",
    type: "single-choice",
    options: [
      { label: "Solo tomo café o té", value: "coffee-tea" },
      { label: "Cerca de 2 vasos", value: "2-glasses" },
      { label: "2 a 6 vasos", value: "2-6-glasses" },
      { label: "Más de 6 vasos", value: "more-6-glasses" },
    ],
  },

  // 29 - ¿Tienes alguno de estos problemas?
  {
    id: "health-problems",
    question: "¿Tienes alguno de estos problemas?",
    type: "multiple-choice",
    options: [
      {
        label: "Rodillas sensibles",
        value: "sensitive-knees",
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/73a34c99-17b0-43cc-b207-84765c0d8439.png",
      },
      {
        label: "Espalda sensible",
        value: "sensitive-back",
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/67eecb36-b6d4-4fb3-8e89-86903cad58c0.png",
      },
      {
        label: "Ninguna de las opciones",
        value: "none",
        image:
          "https://nutricaoalimentos.shop/wp-content/uploads/2025/07/descricao-da-pessoa-mulher-jovem-com-exp_hkhHNnqNTWeLqNUQ3h_KsQ__isfdPpeS7CqtoKbFSfoLQ.jpeg",
      },
    ],
  },

  // 30 - ¿Tienes alguno de estos hábitos que pueden estar perjudicando tu vida?
  {
    id: "bad-habits",
    question: "¿Tienes alguno de estos hábitos que pueden estar perjudicando tu vida?",
    type: "multiple-choice",
    options: [
      { label: "Como tarde en la noche", value: "late-eating", emoji: "💤" },
      { label: "No puedo parar de comer dulces", value: "sweets-addiction", emoji: "😊" },
      { label: "Amo las gaseosas", value: "love-sodas", emoji: "🥤" },
      { label: "Adoro los alimentos grasos o salados", value: "fatty-salty", emoji: "🧂" },
      { label: "Ninguna de las opciones", value: "none", emoji: "❌" },
    ],
  },

  // 31 - ¿Alguno de estos acontecimientos te hizo subir de peso en los últimos años?
  {
    id: "weight-gain-events",
    question: "¿Alguno de estos acontecimientos te hizo subir de peso en los últimos años?",
    type: "multiple-choice",
    options: [
      { label: "Matrimonio o relación", value: "marriage", emoji: "👰‍♀️" },
      { label: "Rutina agitada con trabajo o familia", value: "busy-routine", emoji: "😓" },
      { label: "Dificultades financieras", value: "financial", emoji: "💰" },
      { label: "Lesión o incapacidad", value: "injury", emoji: "🏥" },
      { label: "Estrés o problemas de salud mental", value: "stress", emoji: "😰" },
      { label: "Metabolismo más lento debido a la edad", value: "slow-metabolism", emoji: "🤷‍♀️" },
      { label: "Complicaciones post-tratamientos", value: "post-treatment", emoji: "🩺" },
      { label: "Ninguna de las opciones", value: "none", emoji: "❌" },
    ],
  },

  // 32 - ¿Qué tan motivada estás para bajar de peso?
  {
    id: "motivation-level",
    question: "¿Qué tan motivada estás para bajar de peso?",
    type: "single-choice",
    options: [
      { label: "Estoy intentando hacer el ayuno solo por curiosidad", value: "curious", emoji: "🤔" },
      { label: "Estoy decidida a bajar una o dos tallas", value: "determined", emoji: "🤘" },
      { label: "No voy a parar hasta alcanzar mi peso ideal", value: "unstoppable", emoji: "🔥" },
    ],
  },

  // 33 - ¿Cuál es tu estatura?
  {
    id: "height",
    question: "¿Cuál es tu estatura?",
    type: "slider",
    min: 140,
    max: 200,
    defaultValue: 170,
    unit: "cm",
    sliderLabel: "Arrastra para seleccionar tu estatura",
  },

  // 34 - ¿Cuál es tu peso actual?
  {
    id: "current-weight",
    question: "¿Cuál es tu peso actual?",
    type: "slider",
    min: 40,
    max: 120,
    defaultValue: 75,
    unit: "kg",
    sliderLabel: "Arrastra para seleccionar tu peso",
  },

  // 35 - ¿Cuál es tu peso deseado?
  {
    id: "desired-weight",
    question: "¿Cuál es tu peso deseado?",
    type: "slider",
    min: 40,
    max: 120,
    defaultValue: 65,
    unit: "kg",
    sliderLabel: "Arrastra para seleccionar tu peso deseado",
  },

  // 36 - ¿Cuál es tu edad?
  {
    id: "age",
    question: "¿Cuál es tu edad?",
    type: "input",
    placeholder: "Escribe tu edad aquí",
    insight: "Tu edad es un factor clave para personalizar tu plan de ayuno. ¡Estamos ajustando todo para ti!",
  },

  // 37 - Resumen de tu nivel de acondicionamiento físico
  {
    id: "fitness-summary",
    question: "Descubrimiento Importante Sobre Tu Acondicionamiento Físico",
    type: "single-choice",
    options: [{ label: "Continuar", value: "continue" }],
    socialProof: {
      mainImage: "https://nutricaoalimentos.shop/wp-content/uploads/2025/08/Voce-esta-aqui.png",
      text: "Tu IMC reveló algo que 9 de cada 10 personas descubren demasiado tarde: estás en la 'Zona de Aceleración Reversa' - donde cada semana perdida hace que la recuperación sea 3 veces más difícil.",
    },
  },

  // 38 - ¿Tienes algún evento importante próximo?
  {
    id: "upcoming-events",
    question: "¿Tienes algún evento importante próximo?",
    type: "single-choice",
    options: [
      { label: "Vacaciones", value: "vacation", emoji: "✈️" },
      { label: "Boda", value: "wedding", emoji: "👰‍♀️" },
      { label: "Feriado", value: "holiday", emoji: "🏖️" },
      { label: "Encuentro de amigas", value: "friends-meeting", emoji: "🎂" },
      { label: "Cumpleaños", value: "birthday", emoji: "🎉" },
    ],
    insight: "¡Los eventos importantes son excelentes motivadores! Tu plan será optimizado para ayudarte a brillar.",
  },

  // 39 - El único plan que necesitas para ponerte en forma
  {
    id: "plan-preview",
    question: "Tu Plan Exclusivo de Transformación Está Casi Listo",
    type: "single-choice",
    options: [{ label: "Continuar", value: "continue" }],
    socialProof: {
      mainImage: "https://nutricaoalimentos.shop/wp-content/uploads/2025/08/a-photograph-of-a-woman-showcasing-a-two_QbAUOafwRHSw70sAGWpQQQ_e0QoxTLvRDirOl-XtvMzlA.jpeg",
      text: "Con base en tus 39 respuestas únicas, nuestro algoritmo está finalizando un plan de ayuno intermitente que ya transformó a más de 15.000 mujeres como tú! ",
    },
    insight: "¡Tu plan está casi listo! Será el único que necesitarás para alcanzar tus objetivos.",
  },
]
