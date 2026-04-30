import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function ContactSuccessPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center px-6 py-28">
      <section className="w-full max-w-xl rounded-lg border border-white/10 bg-[#05040b]/90 p-7 text-center shadow-[0_0_70px_rgba(34,211,238,0.18)] backdrop-blur">
        <CheckCircleIcon className="mx-auto h-14 w-14 text-cyan-200" />
        <h1 className="mt-5 text-3xl font-semibold text-white">
          Message sent
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-400">
          Thanks for reaching out. I&apos;ll review your message and reply with
          the next step.
        </p>
        <Link
          href="/#contact"
          className="button-primary mt-7 inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-semibold text-white transition"
        >
          Back to portfolio
        </Link>
      </section>
    </main>
  );
}
