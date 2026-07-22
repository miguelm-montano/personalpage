export default function PreviewCard({ project }) {
  return (
    <div className="relative">
      {/* Back card — stacked shadow effect */}
      <div className="absolute inset-0 border-4 border-black bg-white translate-x-3 translate-y-3" />

      {/* Front card */}
      <div className="relative border-4 border-black bg-white p-5">
        {/* Image placeholder */}
        <div className="w-full aspect-video bg-neutral-200 mb-5" />

        {/* Title */}
        <h3 className="font-unbounded font-bold text-base text-[#fb8500] mb-2">
          {project.name}
        </h3>

        {/* Description */}
        <p className="font-open-sans text-sm text-neutral-700 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={project.url}
            className="flex items-center gap-2 bg-black text-white font-open-sans text-sm px-5 py-2 rounded-full"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            Visit
          </a>
          <a
            href={project.github}
            className="flex items-center gap-2 bg-black text-white font-open-sans text-sm px-5 py-2 rounded-full"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.8 1.3 3.48.99.1-.77.41-1.3.75-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Source
          </a>
        </div>
      </div>
    </div>
  );
}
