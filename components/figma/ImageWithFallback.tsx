"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

export interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  /**
   * Ancho que la imagen va a ocupar, para que el navegador elija la variante
   * correcta. El valor por defecto asume el patrón dominante del sitio: ancho
   * completo en mobile, media pantalla en desktop.
   */
  sizes?: string;
  /** Para la imagen que domina el primer viewport. Una por página, o ninguna. */
  priority?: boolean;
}

/**
 * Imagen con fallback visible si el archivo no carga.
 *
 * Usa `next/image` con `fill`: **el contenedor tiene que ser `relative` y tener
 * altura propia** (una `aspect-[...]` o un `h-*`). A cambio, Next redimensiona y
 * convierte a webp/avif al vuelo, así que un original de 2 MB deja de viajar
 * entero hasta el visitante.
 *
 * Antes era un `<img>` crudo: los originales se servían tal cual, y varios pasan
 * los 2 MB.
 */
export function ImageWithFallback({
  src,
  alt,
  className,
  style,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: ImageWithFallbackProps) {
  const [fallo, setFallo] = useState(false);

  if (fallo) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 ${className ?? ""}`}
        style={style}
        data-original-url={src}
      >
        {/* El placeholder es un data URI: no tiene sentido optimizarlo, y
            next/image no acepta data URIs sin configuración extra. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ERROR_IMG_SRC} alt="" width={88} height={88} />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFallo(true)}
      className={className}
      style={style}
    />
  );
}
