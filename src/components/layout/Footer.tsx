import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-8 md:py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Top Section: Logo and Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Nasr International School"
                width={40}
                height={40}
                priority
              />
              <span className="font-semibold text-xl">Nasr International School</span>
            </Link>
          </div>

          {/* Address Section */}
          <div>
            <p className="text-sm leading-relaxed">
              Survey No. 106/107, <br />
              Serilingampally, Hyderabad, <br />
              Telangana, India 500 019
            </p>
          </div>

          {/* Contact Info Section */}
          <div>
            <p className="text-sm leading-relaxed">
              <strong>Phone:</strong> +91 40 2303 1100
            </p>
            <p className="text-sm leading-relaxed">
              <strong>Email:</strong>{" "}
              <a href="mailto:nasr@gmail.com" className="underline">
                nasr@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm text-secondary/50">
            &copy; {new Date().getFullYear()} Nasr International School. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
