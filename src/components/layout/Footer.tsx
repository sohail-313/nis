import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="container grid gap-4 spacing-vertical">
      <div className="md:flex items-center space-y-8 justify-evenly">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/images/logo.png"}
            alt="Nasr International School"
            width={32}
            height={32}
          />
          <span className="font-semibold whitespace-nowrap">
            Nasr International School
          </span>
        </Link>
        <div className="grid md:grid-cols-2 gap-8">
          <p>
            Survey No. 106/107, <br /> Serilingampally, Hyderabad, <br />{" "}
            Telangana, India 500 019
          </p>
          <div>
            <p>Phone: +91 40 2303 1100</p>
            <p>Email: nasr@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="spacing-vertical">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Nasr International School. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
