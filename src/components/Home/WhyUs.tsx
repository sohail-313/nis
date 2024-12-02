import Image from "next/image";
import React from "react";

export default function WhyUs() {
  return (
    <section className="bg-secondary spaccing-vertical">
      <div className="container grid gap-12">
        <div className="grid gap-4">
          <h2 className="text-center">Why us</h2>
          <p>
            Nasr Internation School is a leading educational institution in the
            region. We offer a wide range of courses and programs to help students
            achieve their academic goals. Our faculty is dedicated to providing
            students with the knowledge and skills they need to succeed in their
            chosen field. We also offer a variety of extracurricular activities to
            help students develop their talents and interests. Our campus is
            equipped with state-of-the-art facilities to provide students with a
            comfortable and supportive learning environment. We are committed to
            helping students reach their full potential and achieve their dreams.
          </p>
        </div>
        <div className="flex gap-4 flex-col md:flex-row">
          <Image
            src="/images/nasr-school.jpg"
            alt="Nasr International School"
            width={400}
            height={400}
            priority
          />
          <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3>Our Vision</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam itaque similique tempora tempore neque excepturi porro ipsum, aperiam fugiat mollitia esse vero et distinctio. Eaque necessitatibus voluptatibus consequuntur quae fugiat exercitationem qui quos velit praesentium dicta ipsa mollitia voluptates, odio temporibus perspiciatis perferendis molestiae cum tempora asperiores libero explicabo quasi.</p>
              </div>
              <div>
                <h3>Our staff</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam itaque similique tempora tempore neque excepturi porro ipsum, aperiam fugiat mollitia esse vero et distinctio. Eaque necessitatibus voluptatibus consequuntur quae fugiat exercitationem qui quos velit praesentium dicta ipsa mollitia voluptates, odio temporibus perspiciatis perferendis molestiae cum tempora asperiores libero explicabo quasi.</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
