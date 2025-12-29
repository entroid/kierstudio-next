// Server Component - Renders static content for SEO
// This content is visible to crawlers and AI agents immediately
import { en } from "@/translations";

// Export translations for use in client component
export const heroTranslations = {
    en: en.hero,
};

export interface HeroContentProps {
    location: string;
    title: string;
    subtitle: string;
    description: string;
    descriptionBoldText: string;
    ctaTalk: string;
    ctaWork: string;
}

export function HeroContent(props: HeroContentProps) {
    const { location, title, subtitle, description, descriptionBoldText, ctaTalk, ctaWork } = props;

    return (
        <section
            id="inicio"
            className="relative min-h-screen flex items-center py-16 md:pb-0 pt-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-500"
        >
            <div className="mx-auto w-full">
                <div className="grid lg:grid-cols-2 min-h-[calc(100vh-6rem)]">
                    {/* Left - Video/Image (will be enhanced by client component) */}
                    <div
                        className="relative bg-white dark:bg-black overflow-hidden min-h-[200px] sm:min-h-[240px] md:min-h-[280px]"
                        data-hero-video
                    >
                        <div className="absolute inset-0">
                            <video
                                className="w-full h-full object-cover object-right opacity-80"
                                poster="/hero-img.jpg"
                                src="/kierstudio-hero.webm"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </div>
                    </div>

                    {/* Right - Content (SEO-critical text rendered server-side) */}
                    <div
                        className="flex items-center justify-center px-6 lg:px-20 bg-white dark:bg-[#0a0a0a]"
                        data-hero-content
                    >
                        <div className="max-w-[700px]">
                            <div className="mb-4">
                                <span
                                    className="font-['Archivo',sans-serif] text-[0.75rem] line-height-[0.75rem] tracking-[0.3em] uppercase text-[#28292D]/60 dark:text-white/60 block italic"
                                    style={{ fontWeight: 600 }}
                                >
                                    {location}
                                </span>
                            </div>

                            <div className="mb-4">
                                <h1
                                    className="font-['Archivo',sans-serif] text-[14vw] line-height-[14vw] sm:text-[12vw] sm:line-height-[12vw] md:text-[5.875rem] md:line-height-[5.875rem] xl:text-[6.875rem] xl:line-height-[6.875rem] leading-[0.85] tracking-[-0.03em] text-[#28292D] dark:text-white"
                                    style={{ fontWeight: 900 }}
                                >
                                    {title}
                                </h1>
                            </div>

                            <div className="mb-8">
                                <h2
                                    className="font-['Archivo',sans-serif] text-[1.625rem] md:text-[1.5rem] leading-[1.2] text-[#28292D] dark:text-white/90 mb-4"
                                    style={{ fontWeight: 600 }}
                                >
                                    {subtitle}
                                </h2>

                                <p
                                    className="font-['Archivo',sans-serif] text-[1rem] md:text-[1.125rem] text-[#28292D]/70 dark:text-white/60 leading-[1.7]"
                                    style={{ fontWeight: 400 }}
                                >
                                    {description}
                                    <b>{descriptionBoldText}</b>
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#contacto"
                                    className="bg-[#D52169] text-white px-10 py-5 font-['Archivo',sans-serif] text-[0.8125rem] leading-[0.8125rem] tracking-[0.1em] uppercase border-2 border-transparent transition-all duration-300 hover:bg-[#28292D] hover:border-[#28292D] cursor-pointer text-center"
                                    style={{ fontWeight: 700 }}
                                >
                                    {ctaTalk}
                                </a>
                                <a
                                    href="#proyectos"
                                    className="px-10 py-5 font-['Archivo',sans-serif] text-[0.8125rem] leading-[0.8125rem] tracking-[0.1em] uppercase border-2 text-[#28292D] border-[#28292D] hover:bg-[#28292D] hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-[#28292D] transition-all duration-300 cursor-pointer text-center"
                                    style={{ fontWeight: 700 }}
                                >
                                    {ctaWork}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
