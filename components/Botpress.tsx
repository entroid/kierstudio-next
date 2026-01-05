"use client";

import Script from "next/script";
import React, { useState } from "react";

export function Botpress() {
  const [isBotpressReady, setIsBotpressReady] = useState(false);

  // URL del script principal de Botpress
  const injectScriptUrl = "https://cdn.botpress.cloud/webchat/v3.5/inject.js";

  // URL de tu archivo de configuración específico
  const configScriptUrl = "https://files.bpcontent.cloud/2025/11/11/14/20251111145623-6Q620I1O.js";

  return (
    <>
      {/* 1. Script Principal (Carga la librería SDK) */}
      <Script
        src={injectScriptUrl}
        strategy="lazyOnload"
        onLoad={() => {
          // Una vez que inject.js ha cargado, marca el estado como listo.
          console.log("Botpress Inject Script Loaded.");
          setIsBotpressReady(true);
        }}
        onError={(e) => console.error("Error loading Botpress Inject Script:", e)}
      />

      {/* 2. Script de Configuración (Solo se renderiza si el primero está listo) */}
      {isBotpressReady && (
        <Script
          src={configScriptUrl}
          strategy="lazyOnload" // Se ejecuta inmediatamente después de ser montado (lazyOnload).
          onError={(e) => console.error("Error loading Botpress Config Script:", e)}
        />
      )}
    </>
  );
}