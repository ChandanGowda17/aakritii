export default function ContactPage() {
  return (
    <main className="bg-[#F8F1E6] text-[#4b200c] pt-[86px] max-lg:pt-[72px] min-h-screen">
      <section className="px-8 sm:px-10 md:px-12 lg:px-20 bg-[#f6efe6] py-20 md:py-28" style={{ paddingTop: '100px' }}>
        <div className="site-container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-[#D46C32] uppercase tracking-[0.35em] text-sm font-semibold">
              Get in Touch
            </p>
           
            <h1 className="mt-6 text-[#7A4A2B] text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05]">
              Contact Us
            </h1>
            <br/>
            <p className="mt-10 max-w-6xl mx-auto text-[#5E5045] text-xl leading-10" style={{ paddingLeft: '40px' }}>
              Have questions, want to volunteer, or interested in partnering with us? We'd love to hear from you. Reach out and let's make a difference together.
            </p>
          </div>
<br/><br/>
          {/* Contact Details and Image */}
          <div className="grid lg:grid-cols-2 gap-8 items-center ">
            {/* Contact Details - Left Side */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 text-[#D46C32]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74A1 1 0 0118 14.847V17a1 1 0 01-1 1h-1C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#7A4A2B] font-semibold text-xl mb-2">Phone</h3>
                  <p className="text-[#5E5045] text-lg">+91 90195-42024</p>
                </div>
              </div>
<br/>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 text-[#D46C32]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#7A4A2B] font-semibold text-xl mb-2">Email</h3>
                  <p className="text-[#5E5045] text-lg">contact@aakritii.org</p>
                  <p className="text-[#5E5045] text-lg">manasa@aakritii.org</p>
                </div>
              </div>
<br/>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 text-[#D46C32]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#7A4A2B] font-semibold text-xl mb-2">Location</h3>
                  <p className="text-[#5E5045] text-lg">India</p>
                </div>
              </div>
<br/>
              <div className="pt-4">
                <a
                  href="mailto:info@aakritii.org"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#D46C32] text-white w-40 h-10 justify-center rounded-xl font-bold text-lg hover:bg-[#B85A28] transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email Us
                </a>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="overflow-hidden rounded-lg">
              <img
                src="/img/contact-us.jpg"
                alt="Aakritii community work"
                className="h-[400px] object-cover rounded-lg"
              />
            </div>
            <br/><br/>
          </div>
        </div>
      </section>
    </main>
  );
}
