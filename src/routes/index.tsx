import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nithin K — Secure System Architect & Full-Stack Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Nithin K — Systems & full-stack engineer building secure-by-default web architectures, low-level runtimes, and AI security tooling.",
      },
      { property: "og:title", content: "Nithin K — Secure System Architect" },
      {
        property: "og:description",
        content:
          "Secure-by-default systems, offensive security, Rust runtimes, and modern full-stack.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Portfolio />
      <Toaster theme="dark" position="bottom-right" />
    </>
  );
}
