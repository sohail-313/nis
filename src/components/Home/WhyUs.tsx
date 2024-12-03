import Image from "next/image";
import React from "react";

export default function WhyUs() {
  return (
    <section className="bg-secondary py-12 md:py-20">
      <div className="container grid gap-12 px-4 md:px-8">
        <div className="text-center">
          <h2 className="mb-6">Why Us</h2>
          <p className="leading-relaxed">
            Nasr International School is a leading educational institution in
            the region. We offer a wide range of courses and programs to help
            students achieve their academic goals. Our faculty is dedicated to
            providing students with the knowledge and skills they need to
            succeed in their chosen field. We also offer a variety of
            extracurricular activities to help students develop their talents
            and interests. Our campus is equipped with state-of-the-art
            facilities to provide students with a comfortable and supportive
            learning environment. We are committed to helping students reach
            their full potential and achieve their dreams.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex justify-center md:w-1/2">
            <Image
              src="/images/nasr-school.jpg"
              alt="Nasr International School"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 w-full">
            <div>
              <h3 className="mb-4">Our Vision</h3>
              <p>
                Our vision is to provide students with a high-quality education
                that prepares them for success in their chosen field. We are
                committed to helping students develop the knowledge and skills
                they need to achieve their academic goals. Our faculty is
                dedicated to providing students with a supportive learning
                environment that encourages them to reach their full potential.
              </p>
            </div>

            <div>
              <h3 className="mb-4">Our Staff</h3>
              <p>
                our faculty is made up of experienced professionals who are
                experts in their field. They are dedicated to providing students
                with a high-quality education that prepares them for success in
                their chosen field. Our faculty is committed to helping students
                develop the knowledge and skills they need to achieve their
                academic goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
