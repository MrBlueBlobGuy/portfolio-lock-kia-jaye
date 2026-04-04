"use client";
import { useEffect, useState } from "react";

export default function ProjectTile({ source_code, project_image, title, description }) {
    const [repo, setRepo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!source_code) return;

        const fetchRepo = async () => {
            try {
                setLoading(true);
                setError(false);

                const path = source_code.replace("https://github.com/", "");
                const [owner, repoName] = path.split("/");

                const res = await fetch(`https://api.github.com/repos/${owner}/${repoName}`);

                if (!res.ok) throw new Error("GitHub API error");

                const data = await res.json();
                setRepo(data);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchRepo();
    }, [source_code]);

    return (
        <a
            href={source_code}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-accent rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            {/* Image */}
            <div className="w-full h-40 overflow-hidden bg-background/40">
                <img
                    src={project_image}
                    alt={repo?.name || "Project"}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Title */}
                <h3 className="text-lg font-semibold text-background mb-2">
                    {title && title}
                    {!title && loading && "Loading project..."}
                    {!title && error && "Project unavailable"}
                    {!title && !loading && !error && repo?.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-background/70 min-h-[48px]">
                    {description && description}
                    {!description && loading && "Fetching repository details..."}
                    {!description && error && "Unable to load repository information."}
                    {!description && !loading && !error && (repo?.description || "No description provided.")}
                </p>

                {/* Footer */}
                {!loading && !error && repo && (
                    <div className="flex items-center justify-between mt-4 text-xs text-foreground/60">
                        <span className="px-2 py-1 rounded bg-background/40">
                            {repo.language || "Code"}
                        </span>

                        <span>⭐ {repo.stargazers_count}</span>
                    </div>
                )}
            </div>
        </a>
    );
}