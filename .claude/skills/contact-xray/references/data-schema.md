# Esquema de `data.json`

Todo lo que `build_report.py` necesita. El script calcula el score, ordena las cuentas y
elige veredicto: no incluyas esos valores calculados, salvo que quieras forzar el
veredicto.

Los campos son opcionales salvo `empresa` y `ejes`. Lo que falta se omite del PDF; el
diseño está pensado para que un desglose incompleto no se vea roto, solo más corto.

## Estructura

```jsonc
{
  "marca": "Kier Consulting",              // sobre-título del encabezado
  "titulo": "Priorización de cartera comercial",
  "subtitulo": "Una línea sobre el universo analizado y el criterio.",
  "fecha": "3 de septiembre de 2026",
  "hallazgos": [                            // 2-4 bullets del resumen ejecutivo
    "Frases cortas con lo que cambia la semana del usuario."
  ],
  "nota_metodo": "",                        // opcional: reemplaza la nota de método por defecto
  "cuentas": [ /* ver abajo */ ]
}
```

### Una cuenta

```jsonc
{
  "id": "EMP-003",                          // el del listado original, para poder cruzarlo
  "empresa": "Bunker Climatización",
  "vertical": "Climatización / Servicios",

  "contacto": {
    "nombre": "Nicolas Bossicovich",
    "cargo": "Gerente General",
    "email": "ventas@bunkerclima.com",
    "telefono": "341 3228283",
    "calidad": "verificado"                 // verificado | generico | ausente
  },

  "firmografia": {                          // cada campo: valor + confianza + fuente
    "ingresos": {
      "valor": "$3-6M USD",                 // siempre rango, nunca cifra exacta
      "confianza": "baja",                  // alta | media | baja
      "fuente": "Estimación por banda sectorial (35 empleados × servicios técnicos)"
    },
    "empleados":       { "valor": "30-50", "confianza": "media", "fuente": "LinkedIn, sep. 2026" },
    "capex":           { "valor": "", "confianza": "", "fuente": "" },
    "dato_relevante":  { "valor": "3 sucursales, atención 24h", "confianza": "alta", "fuente": "Sitio propio" }
  },

  "ejes": {                                 // 1-5 cada uno, ver scoring.md
    "capacidad_pago": 3,
    "densidad_dolor": 5,
    "accesibilidad": 5,
    "timing": 4,
    "costo_entrega": 4
  },

  "veredicto": "",                          // opcional: fuerza priorizar|evaluar|descartar
  "resumen": "Dos o tres líneas: por qué quedó donde quedó.",
  "desbloqueo": "Qué haría falta para que suba o para reconsiderarla.",

  "dolores": [                              // obligatorias en toda cuenta con desglose
    {
      "proceso": "Órdenes de servicio en campo",
      "descripcion": "Técnicos reportan por WhatsApp y alguien recarga en la oficina.",
      "justificacion": "Publican atención 24h en tres ciudades: alto volumen de partes diarios.",
      "carnada": "App de parte de trabajo",
      "base": "citada",                     // citada = evidencia propia | inferida = deducida del rubro
      "impacto": 5,                         // 1-5
      "esfuerzo": 2                         // 1-5, menos es mejor
    }
  ],

  "estrategia": {
    "puerta_entrada": "A quién se le escribe y por qué canal.",
    "mensaje": "El ángulo concreto, en una línea.",
    "primer_paso": "La acción chequeable de esta semana."
  },

  "riesgo": "El contra-argumento honesto: por qué esto podría no cerrar.",

  "fuentes": [
    { "titulo": "Sitio institucional", "url": "https://...", "fecha": "2026-09" }
  ],

  "dossier": true                           // true = va con desglose al final
}
```

## Cómo se renderiza cada campo

- **`firmografia`** arma las cuatro tarjetas grandes del desglose (ingresos, empleados,
  capex, dato relevante) con el pie "Fuente: ...". Un campo vacío no ocupa lugar; un
  campo con `"—"` tampoco, el script lo descarta.
- **`dolores`** es la tabla central del desglose. `impacto`/`esfuerzo` se muestran como
  `5/2`, y ordenar la lista de mayor impacto a menor ayuda a leerla. El `base` se
  renderiza como una marca al lado del proceso —`Cita` o `Rubro`— con su leyenda al pie
  de la tabla: es lo que le dice al lector cuáles puede afirmar en una reunión y cuáles
  tiene que preguntar. El validador avisa si falta.
- **`dossier`** es opcional: sin él, el script desglosa toda cuenta que no esté
  descartada y las agrupa en «Mayor potencial» (priorizar) y «A evaluar» (el resto).
  Ponelo solo para forzar una excepción.
- **`estrategia`** son las tres líneas del cierre. Si no tenés algo concreto para poner,
  dejá el campo afuera antes que escribir una generalidad.
- **`fuentes`** va al pie del desglose, numerada. Es lo que hace auditable el informe:
  incluí todo lo que efectivamente usaste.
- **`dossier: false`** (o ausente) manda la cuenta a la sección «Resto de la cartera»,
  al final, donde se muestra con su score, su `resumen` y su `desbloqueo`. Por eso esos
  dos campos son obligatorios en la práctica para las cuentas sin desglose: son lo único
  que explica por qué quedó donde quedó.
- **`resumen`** conviene escribirlo en términos absolutos y no relativos al grupo que se
  está procesando. «La cuenta más grande del lote» deja de ser cierto en cuanto ese
  informe se consolida con otros; «520 empleados y USD 150M» sigue siendo cierto siempre.

El script arma además un índice con anclas internas al principio del informe. Chrome las
convierte en links navegables del PDF, así que en informes largos el lector salta directo
a la cuenta que le interesa. No hay que hacer nada para activarlo: aparece solo cuando hay
desgloses.

## Errores frecuentes

- Poner `confianza: "alta"` en una estimación propia. Alta es para dato citado.
- Escribir la fuente como "Internet" o "Búsqueda web". La fuente es el medio y, si se
  puede, la fecha: "Infocampo, mar. 2026".
- Marcar `dossier: true` sin `dolores`: el script avisa, y con razón — el desglose queda
  sin su parte más útil.
- Repetir la misma carnada en todas las cuentas. Si sale igual para todos, no salió de
  la investigación.
