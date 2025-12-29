// Server Component - Renders static content for SEO
interface Project {
    id: number;
    title: string;
    category: string;
    year: string;
    description: string;
    services: string[];
    image: string;
}

export interface ProjectsContentProps {
    tag: string;
    title: string;
    subtitle: string;
    viewProject: string;
    projects: Project[];
}

export function ProjectsContent({ tag, title, subtitle, viewProject, projects }: ProjectsContentProps) {
    const isMockImage = (imagePath: string) => imagePath.toLowerCase().includes('-mock');

    return (
        <section
            id="proyectos"
            className="py-16 md:py-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-500"
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
                        className="font-['Archivo',sans-serif] text-[3.125rem] md:text-[7.5rem] leading-[0.85] tracking-[-0.04em] text-[#28292D] dark:text-white mb-8 uppercase"
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

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.slice(0, 4).map((project, index) => (
                        <div
                            key={project.id}
                            className="group cursor-pointer relative overflow-hidden"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a1a] min-h-[200px] sm:min-h-[240px] md:min-h-[280px]">
                                <img
                                    src={project.image}
                                    alt={`${project.title} project by Kier Studio - ${project.category}`}
                                    className="w-full h-full object-cover"
                                    style={{ height: '100%' }}
                                />
                                {isMockImage(project.image) ? (
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                ) : (
                                    <div className="absolute inset-0 bg-black/30" />
                                )}

                                {/* Project Info Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <div>
                                        <span
                                            className="font-['Archivo',sans-serif] text-[0.625rem] tracking-[0.3em] uppercase text-white/60 mb-2 block italic"
                                            style={{ fontWeight: 400 }}
                                        >
                                            ({project.category} - {project.year})
                                        </span>
                                        <h3
                                            className="font-['Archivo',sans-serif] text-[2.625rem] md:text-[3.25rem] leading-[0.9] tracking-[-0.02em] text-white mb-2"
                                            style={{ fontWeight: 900 }}
                                        >
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Number */}
                                <div className="absolute top-8 right-8">
                                    <span
                                        className="font-['Archivo',sans-serif] text-[4rem] text-white/10"
                                        style={{ fontWeight: 900 }}
                                    >
                                        {String(project.id).padStart(2, "0")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
