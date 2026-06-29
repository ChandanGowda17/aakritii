export default function GetInvolved() {
  const cards = [
    {
      title: "Individual Volunteer",
      description:
        "Contribute your time on weekends to field activities, teaching, awareness drives and community events.",
    },
    {
      title: "Student Internship",
      description:
        "Structured 4–12 week internship programmes with mentorship, hands-on experience and certificates.",
    },
    {
      title: "Skill-Based",
      description:
        "Designers, writers, developers, trainers and professionals can contribute their expertise to meaningful causes.",
    },
    {
      title: "Corporate / CSR",
      description:
        "Engage your organisation through CSR partnerships, employee volunteering and community development programmes.",
    },
  ];

  return (
    <section className="bg-[#F8F1E6] border-t border-[#E6DACB] min-h-screen flex flex-col items-center justify-center">
      <div className="mx-auto max-w-full px-6 lg:px-10 mb-20 text-left">

        {/* Hero */}
     
        <div className="py-28 lg:py-36 justify-start">
          <p className="text-[#D46C32] uppercase tracking-[0.35em] text-sm font-semibold">
            Get Involved
          </p>
          <br/>

          <h1 className="mt-6 text-[#7A4A2B] text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05]">
            Volunteer with Aakritii.
          </h1>

          <p className="mt-10 max-w-3xl text-[#5E5045] text-xl leading-10">
            Whether you're an individual, a student group or a corporate
            organisation — there's a place for you here.
          </p>
      </div>

<div className="h-20"></div>
      </div>

      {/* Cards */}
      <div className="border-t border-[#E6DACB] mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4 mt-10">

            {cards.map((card) => (
              <div
                key={card.title}
                className="
                  bg-white
                  border border-[#E8DCCE]
                  rounded-[30px]
                  p-8
                  lg:p-10
                  min-h-[300px]
                  flex
                  flex-col
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#D46C32]">
                  <svg
                    className="h-5 w-5 text-[#D46C32]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="mt-10 text-[2rem] leading-tight font-light text-[#5A2E16]">
                  {card.title}
                </h3>

                {/* Content */}
                <p className="mt-7 text-[20px] leading-9 text-[#62564B]">
                  {card.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}