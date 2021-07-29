/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav>
      <div>
        <h1>Next Js</h1>
        <span>
          <Image src="/favicon.ico" height={20} width={50} alt="home" />
        </span>
      </div>
      <section>
        <Link href="">
          <a>Home</a>
        </Link>
        <Link href="about">
          <a>About</a>
        </Link>
        <Link href="nested/internal">
          <a>Nested</a>
        </Link>
      </section>
    </nav>
  );
}
