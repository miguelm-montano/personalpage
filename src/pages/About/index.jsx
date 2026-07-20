import PageLayout from "../../components/PageLayout";

export default function About() {
  return (
    <PageLayout>
      <div className="h-full flex flex-col justify-center px-62 text-white text-right">
        {/* Title */}
        <h2 className="font-unbounded font-black text-4xl mb-16">
          Hi, I'm Miguel!
        </h2>

        {/* Main belief paragraph */}
        <p className="font-unbounded font-light text-3xl leading-10 max-w-4xl ml-auto mb-12">
          I build digital products by combining an industrial design mindset
          with full-stack engineering, always starting from the problem, the
          user, and the long-term maintainability of the solution.
        </p>

        {/* Divider */}
        <div className="border-t border-white mb-12" />

        {/* Bio paragraphs */}
        <p className="font-open-sans font-light text-xl leading-relaxed max-w-3xl ml-auto mb-6">
          Before becoming a developer, I studied Industrial Design, where I
          learned to approach every challenge from the user's perspective. That
          way of thinking naturally evolved into software development, where I
          now build full-stack applications with Laravel, React, TypeScript and
          modern development tools.
        </p>

        <p className="font-open-sans font-light text-xl leading-relaxed max-w-4xl ml-auto">
          I'm curious by nature, I enjoy understanding how systems work,
          contributing to open source projects, and continuously improving my
          skills. I see AI as a powerful engineering tool that accelerates
          development without replacing critical thinking or code quality.
        </p>
      </div>
    </PageLayout>
  );
}
