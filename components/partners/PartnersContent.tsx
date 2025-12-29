// Server Component - Renders static content for SEO
import { en } from "@/translations";

interface Partner {
    src: string;
    srcDark: string;
    tagline: string;
    href: string;
}

export interface PartnersContentProps {
    partnersTag: string;
    partners: Partner[];
}

export function PartnersContent({ partnersTag, partners }: PartnersContentProps) {
    return (
        <section
            id="partners"
            className="relative py-16 md:py-32 bg-[#F5F5F5] dark:bg-[#0f0f0f] transition-colors duration-500"
        >
            <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
                <div>
                    <span
                        className="font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/60 dark:text-white/60 mb-8 block italic"
                        style={{ fontWeight: 600 }}
                    >
                        {partnersTag}
                    </span>

                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
                        {partners.map((partner, index) => (
                            <div key={index} className="group cursor-pointer">
                                <a
                                    href={partner.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div className="bg-white dark:bg-[#1a1a1a] p-4 md:p-6 rounded-xl border border-[#28292D]/5 dark:border-white/5 hover:border-[#D52169]/30 dark:hover:border-[#D52169]/50 transition-all duration-500 h-[160px] flex flex-col justify-center items-center relative overflow-hidden">
                                        <div className="relative z-10 text-center">
                                            <div className="mb-2 flex items-center justify-center">
                                                <img
                                                    src={partner.src}
                                                    alt={`${partner.tagline} partner logo`}
                                                    className="block dark:hidden h-auto w-auto max-h-[90px]"
                                                />
                                                <img
                                                    src={partner.srcDark}
                                                    alt={`${partner.tagline} partner logo`}
                                                    className="hidden dark:block h-auto w-auto max-h-[90px]"
                                                />
                                            </div>
                                            <p
                                                className="font-['Archivo',sans-serif] text-[0.625rem] tracking-[0.15em] uppercase text-[#28292D]/60 dark:text-white/65"
                                                style={{ fontWeight: 500 }}
                                            >
                                                {partner.tagline}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
