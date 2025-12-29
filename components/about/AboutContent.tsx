// Server Component - Renders static content for SEO
import { en } from "@/translations";

export interface AboutContentProps {
    tag: string;
    title1: string;
    title2: string;
    title3: string;
    description1Tag: string;
    description1: string;
    description1b: string;
    description1Bold: string;
    description2: string;
    description3: string;
    ctaText: string;
}

export function AboutContent(props: AboutContentProps) {
    const {
        tag, title1, title2, title3,
        description1Tag, description1, description1b, description1Bold,
        description2, description3, ctaText
    } = props;

    return (
        <section id="about" className="pt-16 md:pt-32 bg-[#F5F5F5] dark:bg-[#0f0f0f] transition-colors duration-500">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div>
                    <span
                        className="font-['Archivo',sans-serif] text-[12px] tracking-[0.3em] uppercase text-[#28292D]/60 dark:text-white/60 mb-8 block italic"
                        style={{ fontWeight: 600 }}
                    >
                        {tag}
                    </span>

                    <h2
                        className="font-['Archivo',sans-serif] text-[42px] md:text-[88px] lg:text-[100px] leading-[0.9] tracking-[-0.03em] text-[#28292D] dark:text-white mb-12 uppercase"
                        style={{ fontWeight: 900 }}
                    >
                        {title1}
                        <br />
                        <span className="text-[#D52169]">{title2} </span>
                        {title3}
                    </h2>

                    <h3 className="pb-4"><b>{description1Tag}</b></h3>

                    <div className="grid md:grid-cols-2 gap-12 max-w-[1170px]">
                        <div>
                            <p
                                className="font-['Archivo',sans-serif] text-[16px] md:text-[18px] text-[#28292D]/70 dark:text-white/60 leading-[1.7] mb-4"
                                style={{ fontWeight: 400 }}
                            >
                                {description1}
                            </p>

                            <p
                                className="font-['Archivo',sans-serif] text-[16px] md:text-[18px] text-[#28292D]/70 dark:text-white/60 leading-[1.7]"
                                style={{ fontWeight: 400 }}
                            >
                                {description1b}
                                <b>{description1Bold}</b>
                            </p>
                        </div>

                        <div>
                            <p
                                className="font-['Archivo',sans-serif] text-[16px] md:text-[18px] text-[#28292D]/70 dark:text-white/60 leading-[1.7]"
                                style={{ fontWeight: 400 }}
                            >
                                {description2}
                            </p>
                        </div>

                        <div className="md:col-start-2">
                            <p
                                className="font-['Archivo',sans-serif] text-[16px] md:text-[18px] text-[#28292D]/70 dark:text-white/60 leading-[1.7]"
                                style={{ fontWeight: 600 }}
                            >
                                {description3}
                            </p>

                            <a
                                href="#contacto"
                                className="bg-[#D52169] text-white mt-10 px-10 py-5 font-['Archivo',sans-serif] text-[13px] leading-[13px] tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#28292D] cursor-pointer inline-block"
                                style={{ fontWeight: 700 }}
                            >
                                {ctaText}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pb-16 md:pb-32 border-b border-[#28292D]/10 dark:border-white/10"></div>
            </div>
        </section>
    );
}
