// Server Component - Renders static content for SEO
import { en } from "@/translations";

export interface CTAContentProps {
    tag: string;
    title1: string;
    title2: string;
    subtitle: string;
    emailLabel: string;
    whatsappLabel: string;
    instagramLabel: string;
}

export function CTAContent({
    tag,
    title1,
    title2,
    subtitle,
    emailLabel,
    whatsappLabel,
    instagramLabel,
}: CTAContentProps) {
    return (
        <section
            id="contacto"
            className="py-16 md:py-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-500"
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Column - Contact Info */}
                    <div>
                        <div className="mb-12">
                            <span
                                className="font-['Archivo',sans-serif] text-[0.6875rem] tracking-[0.3em] uppercase text-[#28292D]/60 dark:text-white/60 mb-8 block italic"
                                style={{ fontWeight: 600 }}
                            >
                                {tag}
                            </span>

                            <h2
                                className="font-['Archivo',sans-serif] text-[3.5rem] md:text-[6rem] lg:text-[7rem] leading-[0.85] tracking-[-0.04em] text-[#28292D] dark:text-white mb-8 uppercase"
                                style={{ fontWeight: 900 }}
                            >
                                {title1}
                                <br />
                                <span className="text-[#D52169]">{title2}</span>
                            </h2>

                            <p
                                className="font-['Archivo',sans-serif] text-[1.125rem] md:text-[1.5rem] text-[#28292D] dark:text-white/90 leading-[1.4]"
                                style={{ fontWeight: 600 }}
                            >
                                {subtitle}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <a
                                href="mailto:kierstudio.info@gmail.com"
                                className="group flex items-center gap-4 p-6 border border-[#28292D]/10 dark:border-white/10 hover:border-[#D52169] transition-colors duration-300"
                            >
                                <div className="w-12 h-12 bg-[#28292D]/5 dark:bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#D52169] transition-colors duration-300">
                                    <span className="text-[#28292D] dark:text-white group-hover:text-white">✉</span>
                                </div>
                                <div>
                                    <div
                                        className="font-['Archivo',sans-serif] text-[0.75rem] tracking-[0.1em] uppercase text-[#28292D]/50 dark:text-white/50 mb-1"
                                        style={{ fontWeight: 600 }}
                                    >
                                        {emailLabel}
                                    </div>
                                    <div
                                        className="font-['Archivo',sans-serif] text-[1.125rem] text-[#28292D] dark:text-white"
                                        style={{ fontWeight: 500 }}
                                    >
                                        kierstudio.info@gmail.com
                                    </div>
                                </div>
                            </a>

                            <a
                                href="https://wa.me/5493417211814"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-6 border border-[#28292D]/10 dark:border-white/10 hover:border-[#D52169] transition-colors duration-300"
                            >
                                <div className="w-12 h-12 bg-[#28292D]/5 dark:bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#D52169] transition-colors duration-300">
                                    <span className="text-[#28292D] dark:text-white group-hover:text-white">📞</span>
                                </div>
                                <div>
                                    <div
                                        className="font-['Archivo',sans-serif] text-[0.75rem] tracking-[0.1em] uppercase text-[#28292D]/50 dark:text-white/50 mb-1"
                                        style={{ fontWeight: 600 }}
                                    >
                                        {whatsappLabel}
                                    </div>
                                    <div
                                        className="font-['Archivo',sans-serif] text-[1.125rem] text-[#28292D] dark:text-white"
                                        style={{ fontWeight: 500 }}
                                    >
                                        +54 9 341 721 1814
                                    </div>
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/kierstudio_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-6 border border-[#28292D]/10 dark:border-white/10 hover:border-[#D52169] transition-colors duration-300"
                            >
                                <div className="w-12 h-12 bg-[#28292D]/5 dark:bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#D52169] transition-colors duration-300">
                                    <span className="text-[#28292D] dark:text-white group-hover:text-white">📷</span>
                                </div>
                                <div>
                                    <div
                                        className="font-['Archivo',sans-serif] text-[0.75rem] tracking-[0.1em] uppercase text-[#28292D]/50 dark:text-white/50 mb-1"
                                        style={{ fontWeight: 600 }}
                                    >
                                        {instagramLabel}
                                    </div>
                                    <div
                                        className="font-['Archivo',sans-serif] text-[1.125rem] text-[#28292D] dark:text-white"
                                        style={{ fontWeight: 500 }}
                                    >
                                        @kierstudio_
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="bg-[#F5F5F5] dark:bg-[#1a1a1a] p-8 md:p-12">
                        <h3
                            className="font-['Archivo',sans-serif] text-[1.5rem] text-[#28292D] dark:text-white mb-8"
                            style={{ fontWeight: 700 }}
                        >
                            {en.cta.formTitle}
                        </h3>

                        {/* Static Form Skeleton */}
                        <form className="space-y-6">
                            <div>
                                <label className="block font-['Archivo',sans-serif] text-[0.875rem] text-[#28292D] dark:text-white mb-2 font-semibold">
                                    {en.cta.formName}
                                </label>
                                <input
                                    type="text"
                                    disabled
                                    placeholder={en.cta.formNamePlaceholder}
                                    className="w-full bg-white dark:bg-black border border-[#28292D]/10 dark:border-white/10 px-4 py-3 text-[#28292D] dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block font-['Archivo',sans-serif] text-[0.875rem] text-[#28292D] dark:text-white mb-2 font-semibold">
                                    {en.cta.formEmail}
                                </label>
                                <input
                                    type="email"
                                    disabled
                                    placeholder={en.cta.formEmailPlaceholder}
                                    className="w-full bg-white dark:bg-black border border-[#28292D]/10 dark:border-white/10 px-4 py-3 text-[#28292D] dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block font-['Archivo',sans-serif] text-[0.875rem] text-[#28292D] dark:text-white mb-2 font-semibold">
                                    {en.cta.formProject}
                                </label>
                                <select
                                    disabled
                                    className="w-full bg-white dark:bg-black border border-[#28292D]/10 dark:border-white/10 px-4 py-3 text-[#28292D] dark:text-white"
                                >
                                    <option value="">{en.cta.formProjectPlaceholder}</option>
                                </select>
                            </div>
                            <div>
                                <label className="block font-['Archivo',sans-serif] text-[0.875rem] text-[#28292D] dark:text-white mb-2 font-semibold">
                                    {en.cta.formMessage}
                                </label>
                                <textarea
                                    disabled
                                    rows={4}
                                    placeholder={en.cta.formMessagePlaceholder}
                                    className="w-full bg-white dark:bg-black border border-[#28292D]/10 dark:border-white/10 px-4 py-3 text-[#28292D] dark:text-white"
                                />
                            </div>
                            <button
                                disabled
                                className="w-full bg-[#D52169] text-white py-4 font-['Archivo',sans-serif] text-[0.875rem] tracking-[0.1em] uppercase font-bold"
                            >
                                {en.cta.formSubmit}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
