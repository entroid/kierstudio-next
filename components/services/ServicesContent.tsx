// Server Component - Renders static content for SEO
import { en } from "@/translations";

interface Service {
    title: string;
    subtitle: string;
    image: string;
    services: string[];
    tag: string;
    bgColor: string;
}

export interface ServicesContentProps {
    tag: string;
    title: string;
    subtitle: string;
    ctaButton: string;
    services: Service[];
}

export function ServicesContent({ tag, title, subtitle, ctaButton, services }: ServicesContentProps) {
    return (
        <section
            id="servicios"
            className="py-16 md:pt-32 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-500"
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="mb-20">
                    <span
                        className="font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/60 dark:text-white/60 mb-8 block italic"
                        style={{ fontWeight: 600 }}
                    >
                        {tag}
                    </span>

                    <h2
                        className="font-['Archivo',sans-serif] text-[3.5rem] md:text-[7.5rem] leading-[0.85] tracking-[-0.04em] text-[#28292D] dark:text-white mb-8 uppercase"
                        style={{ fontWeight: 900 }}
                    >
                        {title}
                    </h2>

                    <p
                        className="font-['Archivo',sans-serif] text-[1.125rem] md:text-[1.5rem] text-[#28292D] dark:text-white/90 max-w-[900px] leading-[1.4]"
                        style={{ fontWeight: 600 }}
                    >
                        {subtitle}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="space-y-0">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="grid lg:grid-cols-2 gap-0 min-h-[600px] mb-0"
                        >
                            {/* Image Side */}
                            <div
                                className={`relative overflow-hidden h-full min-h-[200px] sm:min-h-[240px] md:min-h-[280px] ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
                            >
                                <img
                                    src={service.image}
                                    alt={`${service.title} - ${service.tag} service by Kier Studio`}
                                    className="w-full h-full object-cover absolute inset-0"
                                    style={{ height: '100%' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#D52169]/30 to-transparent" />
                            </div>

                            {/* Content Side */}
                            <div
                                className={`${service.bgColor} px-3 py-12 md:p-12 lg:p-16 flex flex-col justify-center transition-colors duration-500 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                                    }`}
                            >
                                <div>
                                    <span
                                        className={`font-['Archivo',sans-serif] text-[0.625rem] tracking-[0.3em] uppercase mb-8 block italic ${service.bgColor.includes("28292D") || service.bgColor.includes("black")
                                            ? "text-white/50"
                                            : "text-[#28292D]/50 dark:text-white/50"
                                            }`}
                                        style={{ fontWeight: 400 }}
                                    >
                                        ({service.tag})
                                    </span>

                                    <h3
                                        className={`font-['Archivo',sans-serif] text-[2.5rem] md:text-[4rem] lg:text-[3.5rem] xl:text-[4rem] leading-[0.9] tracking-[-0.02em] mb-6 ${service.bgColor.includes("28292D") || service.bgColor.includes("black")
                                            ? "text-white"
                                            : "text-[#28292D] dark:text-white"
                                            }`}
                                        style={{ fontWeight: 900 }}
                                    >
                                        {service.title}
                                    </h3>

                                    <p
                                        className={`font-['Archivo',sans-serif] text-[1rem] md:text-[1.125rem] leading-[1.7] mb-10 ${service.bgColor.includes("28292D") || service.bgColor.includes("black")
                                            ? "text-white/80"
                                            : "text-[#28292D]/70 dark:text-white/70"
                                            }`}
                                        style={{ fontWeight: 400 }}
                                    >
                                        {service.subtitle}
                                    </p>

                                    {/* Services List */}
                                    <div className="grid grid-cols-2 gap-4 mb-10">
                                        {service.services.map((item, itemIndex) => (
                                            <div
                                                key={itemIndex}
                                                className={`font-['Archivo',sans-serif] text-[0.8125rem] tracking-[0.05em] flex items-center gap-2 ${service.bgColor.includes("28292D") || service.bgColor.includes("black")
                                                    ? "text-white/60"
                                                    : "text-[#28292D]/60 dark:text-white/60"
                                                    }`}
                                                style={{ fontWeight: 500 }}
                                            >
                                                <span className="text-[#D52169]">▸</span>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-32 text-center">
                    <a
                        href="#contacto"
                        className="bg-[#D52169] text-white px-12 py-5 font-['Archivo',sans-serif] text-[0.8125rem] tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#28292D] cursor-pointer inline-block"
                        style={{ fontWeight: 700 }}
                    >
                        {ctaButton}
                    </a>
                </div>
            </div>
        </section>
    );
}
