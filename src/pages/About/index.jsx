import PageLayout from '../../components/PageLayout'

export default function About() {
  return (
    <PageLayout>
      <div className="h-full flex flex-col justify-center pr-28 text-white text-right">

        {/* Title */}
        <h2 className="font-unbounded font-black text-4xl mb-16">
          Hi, I'm Miguel!
        </h2>

        {/* Main belief paragraph */}
        <p className="font-open-sans text-xl leading-relaxed max-w-2xl ml-auto mb-12">
          I believe in a user centered design approach, ensuring that every
          project I work on is tailored to meet the specific needs of its users.
        </p>

        {/* Divider */}
        <div className="border-t border-white mb-12" />

        {/* Bio paragraphs */}
        <p className="font-open-sans text-sm leading-relaxed max-w-xl ml-auto mb-6">
          I'm a frontend web developer dedicated to turning ideas into creative
          solutions. I specialize in creating seamless and intuitive user
          experiences.
        </p>

        <p className="font-open-sans text-sm leading-relaxed max-w-xl ml-auto">
          My approach focuses on creating scalable, high-performing solutions
          tailored to both user needs and business objectives. By prioritizing
          performance, accessibility, and responsiveness, I strive to deliver
          experiences that not only engage users but also drive tangible results.
        </p>

      </div>
    </PageLayout>
  )
}
