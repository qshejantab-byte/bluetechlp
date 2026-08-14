import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { Interactive, WhyInteractive, DisplayShowcase } from "@/components/site/Interactive";
import { ScreenStory } from "@/components/site/ScreenStory";
import { Applications } from "@/components/site/Applications";
import { Products } from "@/components/site/Products";
import { WhyBlueTech, Services, Trust } from "@/components/site/WhyBlueTech";
import { FinalCta } from "@/components/site/FinalCta";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Bridge } from "@/components/site/ui";

const title = "BlueTech — Interactive Smart Displays & Technology in Rwanda";
const description =
  "BlueTech supplies interactive smart displays, audio, wearables and computing to organisations in Rwanda, with expert guidance, installation and support.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:text-ink-foreground"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <Hero />
        <ScreenStory />
        <Interactive />
        <Bridge direction="inkToLight" />
        <WhyInteractive />
        <Bridge direction="lightToInk" />
        <DisplayShowcase />
        <Applications />
        <Bridge direction="inkToLight" />
        <Products />
        <Bridge direction="lightToInk" />
        <WhyBlueTech />
        <Bridge direction="inkToLight" />
        <Services />
        <Trust />
        <FinalCta />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
