// Server Component - Renders static content for SEO
interface ProcessStep {
    number: string;
    title: string;
    description: string;
    services: string[];
}

export interface ProcessContentProps {
    tag: string;
    title: string;
    subtitle: string;
    ctaButton: string;
    steps: ProcessStep[];
}

export function ProcessContent({ tag, title, subtitle, ctaButton, steps }: ProcessContentProps) {
    return (
        <section
            id="proceso"
            className="py-16 md:py-32 bg-[#F5F5F5] dark:bg-[#0f0f0f] transition-colors duration-500"
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="mb-10 md:mb-20">
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
                        className="font-['Archivo',sans-serif] text-[1.125rem] md:text-[1.5rem] text-[#28292D] dark:text-white/90 max-w-[1100px] leading-[1.4]"
                        style={{ fontWeight: 600 }}
                    >
                        {subtitle}
                    </p>
                </div>

                <div className="space-y-0">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group border-b border-[#28292D]/10 dark:border-white/10 last:border-b-0"
                        >
                            <div className="grid lg:grid-cols-12 gap-8 py-8 md:py-16 lg:py-20 items-start">
                                <div className="lg:col-span-2">
                                    <div
                                        className="font-['Archivo',sans-serif] text-[3rem] md:text-[7.5rem] leading-[0.9] tracking-[-0.02em] text-[#D52169]"
                                        style={{ fontWeight: 900 }}
                                    >
                                        {step.number}
                                    </div>
                                </div>

                                <div className="lg:col-span-6">
                                    <h3
                                        className="font-['Archivo',sans-serif] text-[1.875rem] md:text-[3.5rem] lg:text-[4rem] leading-[0.9] tracking-[-0.02em] text-[#28292D] dark:text-white mb-6"
                                        style={{ fontWeight: 900 }}
                                    >
                                        {step.title}
                                    </h3>

                                    <p
                                        className="font-['Archivo',sans-serif] text-[1rem] md:text-[1.125rem] text-[#28292D]/70 dark:text-white/70 leading-[1.7] max-w-[600px]"
                                        style={{ fontWeight: 400 }}
                                    >
                                        {step.description}
                                    </p>
                                </div>

                                <div className="lg:col-span-4 flex flex-wrap gap-3 items-start">
                                    {step.services.map((service, serviceIndex) => (
                                        <div
                                            key={serviceIndex}
                                            className="bg-white dark:bg-[#1a1a1a] border border-[#28292D]/10 dark:border-white/10 px-4 py-2 font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.1em] uppercase text-[#28292D] dark:text-white"
                                            style={{ fontWeight: 600 }}
                                        >
                                            {service}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
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
