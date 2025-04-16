import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
        <Image
          src="/profile.webp"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">
        Hello people 👋
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am Aswin, co-founder of Soft Served Web. I wear many hats here —
          from leading our services to developing full-stack applications and
          building Shopify stores. I enjoy being involved in different aspects
          of the work because it keeps me curious and constantly learning.
        </p>
        <p>
          I am passionate about creating thoughtful, practical solutions and
          staying up-to-date with new technologies. I pick up new skills
          quickly, which helps me contribute effectively across various
          projects and deliver meaningful results.
        </p>
        <p>
          At Soft Served Web, we are a close-knit team that loves taking on
          interesting challenges, whether it is web development, AI, or AR/VR
          experiences. comfortable working with TypeScript, Python, and
          Liquid (Shopify&apos;s templating language), and I am always excited to
          explore new tools that help us build better and faster.
        </p>

      </div>
    </section>
  );
}
