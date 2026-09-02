import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { es } from "@/translations";
import { ProjectCase } from "@/components/projects/ProjectCase";

/**
 * Página de un trabajo: /trabajos/[slug].
 *
 * La metadata sale del español porque el español es el idioma del render y,
 * por lo tanto, lo que indexan los buscadores (ver LanguageContext). El toggle
 * de idioma cambia el texto en el cliente pero no la URL ni la metadata.
 *
 * Agregar un caso es agregar un objeto a `projectsData`: la ruta, el sitemap y
 * la metadata salen de esa lista.
 */

type Params = { slug: string };

export function generateStaticParams(): Params[] {
    return es.projectsData.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

function buscar(slug: string) {
    return es.projectsData.find((project) => project.slug === slug);
}

export async function generateMetadata({
    params,
}: {
    params: Promise<Params>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = buscar(slug);

    if (!project) return {};

    const title = `${project.title} — ${project.category} | Kier Studio`;
    const url = `/trabajos/${project.slug}`;

    return {
        title,
        description: project.summary,
        alternates: { canonical: url },
        openGraph: {
            type: "article",
            locale: "es_AR",
            url,
            title,
            description: project.summary,
            siteName: "Kier Studio",
            images: [{ url: project.image, alt: `${project.title} — ${project.category}` }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: project.summary,
            images: [project.image],
        },
    };
}

export default async function TrabajoPage({ params }: { params: Promise<Params> }) {
    const { slug } = await params;
    const project = buscar(slug);

    if (!project) notFound();

    return <ProjectCase slug={slug} />;
}
