// Server Component - Renders static content for SEO
interface TestimonialItem {
    id: number;
    quote: string;
    author: string;
    role: string;
    company: string;
}

interface StatItem {
    number: string;
    label: string;
}

export interface TestimonialContentProps {
    tag: string;
    title: string;
    testimonials: TestimonialItem[];
    stats: StatItem[];
}

export function TestimonialContent({ tag, title, testimonials, stats }: TestimonialContentProps) {
    return (
        <section className="py-16 md:py-32 bg-[#28292D] dark:bg-black relative overflow-hidden transition-colors duration-500">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
                <div className="mb-20">
                    <span
                        className="font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/60 dark:text-white/60 mb-8 block italic"
                        style={{ fontWeight: 400 }}
                    >
                        {tag}
                    </span>

                    <h2
                        className="font-['Archivo',sans-serif] text-[2.625rem] md:text-[6rem] lg:text-[7.5rem] leading-[0.85] tracking-[-0.04em] text-white mb-8"
                        style={{ fontWeight: 900 }}
                    >
                        {title}
                    </h2>
                </div>

                {/* All testimonials for SEO (crawlers see all content) */}
                <div className="max-w-[1100px]">
                    {testimonials.map((testimonial) => (
                        <article key={testimonial.id} className="mb-12">
                            <blockquote
                                className="font-['Archivo',sans-serif] text-[1.1rem] md:text-[1.7rem] xl:text-[2rem] leading-[1.5] text-white mb-6"
                                style={{ fontWeight: 500 }}
                            >
                                "{testimonial.quote}"
                            </blockquote>
                            <footer className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-[#D52169] rounded-full flex items-center justify-center">
                                    <span
                                        className="font-['Archivo',sans-serif] text-[1.5rem] text-white"
                                        style={{ fontWeight: 900 }}
                                    >
                                        {testimonial.author.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <cite
                                        className="font-['Archivo',sans-serif] text-[1.25rem] text-white mb-1 not-italic block"
                                        style={{ fontWeight: 700 }}
                                    >
                                        {testimonial.author}
                                    </cite>
                                    <p
                                        className="font-['Archivo',sans-serif] text-[0.875rem] text-white/60"
                                        style={{ fontWeight: 400 }}
                                    >
                                        {testimonial.role} at {testimonial.company}
                                    </p>
                                </div>
                            </footer>
                        </article>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 pt-20 border-t border-white/10">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div
                                className="font-['Archivo',sans-serif] text-[3rem] md:text-[4rem] text-[#D52169] mb-2"
                                style={{ fontWeight: 900 }}
                            >
                                {stat.number}
                            </div>
                            <div
                                className="font-['Archivo',sans-serif] text-[0.75rem] tracking-[0.1em] uppercase text-white/60"
                                style={{ fontWeight: 600 }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
