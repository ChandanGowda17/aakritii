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
           Recent Stories
          </p>
          <br/>

          <h1 className="mt-6 text-[#7A4A2B] text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05]">
            Press Releases.
          </h1>

          <p className="mt-10 max-w-3xl text-[#5E5045] text-xl leading-10">
        Every story reflects a step towards building stronger, more inclusive communities.
Read about our latest initiatives, achievements, collaborations, and the lives transformed through collective action.
Follow Aakritii NGO's journey as we continue creating sustainable impact, one community at a time.
          </p>
      </div>

<div className="h-20"></div>
      </div>

      
    </section>
  );
}
