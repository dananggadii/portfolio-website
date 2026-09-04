import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center px-5 text-center"
      style={{ backgroundColor: "#FAFAF8" }}
    >
      {/* Status code — technical metadata in the mono face */}
      <p
        className="font-mono text-label-md font-medium"
        style={{ color: "#4A6070" }}
      >
        404
      </p>

      <h1
        className="text-headline-xl font-semibold leading-[1.2] tracking-[-0.01em] mt-4 mb-3"
        style={{ color: "#1A1A1A" }}
      >
        This page doesn&rsquo;t exist.
      </h1>

      <p
        className="text-body-lg leading-relaxed mb-10 max-w-md"
        style={{ color: "#5C5C5C" }}
      >
        The link may be broken, or the page may have been moved.
      </p>

      <Link
        href="/"
        className="btn-pill px-8 py-3.5 text-body-lg font-semibold bg-[#4A6070] text-white hover:bg-[#3A5060] focus-visible:bg-[#3A5060] transition-colors duration-200"
      >
        Back to Home
      </Link>
    </main>
  );
}
