import ProjectTile from "./ProjectTile";

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen w-full py-24 scroll-mt-24 bg-background text-foreground"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Projects
                    </h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto">
                        A selection of projects I've built, ranging from experiments
                        to full applications.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    <ProjectTile
                        source_code="https://github.com/MrBlueBlobGuy/potion-notso"
                        project_image="/projects/potion.png"
                    />

                    <ProjectTile
                        source_code="https://github.com/MrBlueBlobGuy/electrizite-demo"
                        project_image="/projects/demo.png"
                    />
                    <ProjectTile
                        source_code="https://github.com/MrBlueBlobGuy/becor"
                        project_image="/projects/becor.png"
                    />
                    <ProjectTile
                        source_code="https://canary.ownly.social"
                        project_image="/projects/ownly.png"
                        title="Ownly"
                        description="A social platform for sharing and discovering digital ownership."
                    />
                </div>

            </div>
        </section>
    );
}