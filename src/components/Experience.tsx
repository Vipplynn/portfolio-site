import { experience, Experience as ExperienceType } from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Experience</h2>
        <div className="space-y-6">
          {experience.map((item: ExperienceType, idx: number) => (
            <div key={idx} className="bg-white p-6 rounded shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400 whitespace-nowrap">{item.date}</p>
              </div>
              <p className="text-sm text-gray-700 italic">{item.organization}</p>
              <p className="mt-2 text-sm text-gray-800">{item.description}</p>
              {item.tags && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
