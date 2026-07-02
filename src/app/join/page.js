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
    <section className="bg-[#F8F1E6] border-t border-[#E6DACB] w-full" style={{ paddingTop: '86px' }}>
      <div className="site-container mb-20 text-left">

        {/* Hero */}
     
        <div className="pt-16 pb-10 justify-start">
          <div className="h-10"></div>
          <p className="text-[#D46C32] uppercase tracking-[0.35em] text-sm font-semibold">
            Get Involved
          </p>
          <br/>

          <h1 className="mt-6 text-[#7A4A2B] text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05]">
            Volunteer with Aakritii.
          </h1>

          <p className="mt-10 max-w-3xl text-[#5E5045] text-xl leading-10">
            Whether you&apos;re an individual, a student group or a corporate
            organisation — there&apos;s a place for you here.
          </p>
      </div>

<div className="h-20"></div>
      </div>

      {/* Cards */}
      <div >
        <div className="site-container py-12 sm:py-20">

          <div className="grid gap-5 sm:gap-8 sm:grid-cols-2 xl:grid-cols-4 mt-4 sm:mt-10">

            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-[#E8DCCE] rounded-[24px] sm:rounded-[30px] w-full aspect-auto xl:aspect-square flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ padding: "clamp(1.25rem, 5vw, 1.75rem)" }}
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
                <br/>
                {/* Title */}
                <h3 className="mt-5 text-[1.1rem] leading-snug font-semibold text-[#5A2E16]">
                  {card.title}
                </h3>

                {/* Content */}
                <p className="mt-3 text-[0.85rem] leading-6 text-[#62564B]">
                  {card.description}
                </p>
              </div>
            ))}

          </div>

        </div>
        <div className="h-25"></div>
      </div>

      {/* Sign Up Form */}
      <div className="border-t border-[#E6DACB]">
        <br/>
        <div className="site-container py-20">
          <div className="text-center mb-12">
            <h2 className="text-[#7A4A2B] text-4xl md:text-5xl font-light">Sign up to volunteer</h2>
            <br/>
            <p className="mt-3 text-[#5E5045] text-base">We&apos;ll reach out within 2–3 working days.</p>
            <br/>
          </div>

          <div className="flex justify-center w-full">
            <form
              action="mailto:Contact@aakritii.org"
              method="post"
              encType="text/plain"
              className="bg-white border border-[#E8DCCE] rounded-[20px] w-full max-w-2xl"
              style={{ padding: "clamp(28px, 5vw, 48px) clamp(20px, 6vw, 64px)" }}
            >

            {/* Full Name */}
            <div className="mb-14">
              <label className="block text-lg font-medium text-[#5A2E16] mb-5">Full name</label>
              <br/>
              <input
                type="text"
                name="FullName"
                required
                className="w-full min-h-12 rounded-md border border-[#E8DCCE] bg-[#FBF7F2] px-4 sm:px-6 py-3 text-base text-[#3D2B1F] placeholder-[#B5A49A] outline-none focus:border-[#D46C32] transition-colors"
              />
            </div>
<br/>
            {/* Email + Phone */}
            <div className="mb-14 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              <div>
                <label className="block text-lg font-medium text-[#5A2E16] mb-5">Email</label>
                <input
                  type="email"
                  name="Email"
                  required
                  className="w-full min-h-12 rounded-md border border-[#E8DCCE] bg-[#FBF7F2] px-4 sm:px-6 py-3 text-base text-[#3D2B1F] placeholder-[#B5A49A] outline-none focus:border-[#D46C32] transition-colors"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-[#5A2E16] mb-5">Phone</label>
                <input
                  type="tel"
                  name="Phone"
                  required
                  className="w-full min-h-12 rounded-md border border-[#E8DCCE] bg-[#FBF7F2] px-4 sm:px-6 py-3 text-base text-[#3D2B1F] placeholder-[#B5A49A] outline-none focus:border-[#D46C32] transition-colors"
                />
              </div>
            </div>
<br/>
            {/* City */}
            <div className="mb-14">
              <label className="block text-lg font-medium text-[#5A2E16] mb-5">City</label>
              <input
                type="text"
                name="City"
                required
                className="w-full min-h-12 rounded-md border border-[#E8DCCE] bg-[#FBF7F2] px-4 sm:px-6 py-3 text-base text-[#3D2B1F] placeholder-[#B5A49A] outline-none focus:border-[#D46C32] transition-colors"
              />
            </div>
<br/>
            {/* Interest */}
            <div className="mb-14">
              <label className="block text-lg font-medium text-[#5A2E16] mb-5">I&apos;m interested in</label>
              <br/>
              <select name="Interest" required className="w-full min-h-12 rounded-md border border-[#E8DCCE] bg-[#FBF7F2] px-4 sm:px-6 py-3 text-base text-[#3D2B1F] outline-none focus:border-[#D46C32] transition-colors appearance-none cursor-pointer">
                <option value="">Select an option</option>
                <option value="Individual volunteering">Individual volunteering</option>
                <option value="Student Internship">Student Internship</option>
                <option value="Skill-Based volunteering">Skill-Based volunteering</option>
                <option value="Corporate / CSR">Corporate / CSR</option>
              </select>
            </div>
<br/>
            {/* Message */}
            <div className="mb-16">
              <label className="block text-lg font-medium text-[#5A2E16] mb-5">Tell us about yourself</label>
              <br/>
              <textarea
                rows={8}
                name="Message"
                required
                placeholder="Skills, availability, motivation..."
                className="w-full min-h-40 rounded-md border border-[#E8DCCE] bg-[#FBF7F2] px-4 sm:px-6 py-3 text-base text-[#3D2B1F] placeholder-[#B5A49A] outline-none focus:border-[#D46C32] transition-colors resize-none"
              />
            </div>
<br/>
            {/* Submit */}
            <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-2/3 mx-auto h-10 rounded-md bg-[#D46C32] px-6 sm:px-8 py-4 sm:py-6 text-lg font-semibold uppercase tracking-widest text-white transition-all hover:bg-[#B85A28] hover:shadow-lg"
            >
              Submit 
            </button>
            </div>

          </form>
          </div>
        </div>
      </div><br/> <br/>
    </section>
  );
}
