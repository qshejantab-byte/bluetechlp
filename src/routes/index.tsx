import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { Interactive } from "@/components/site/Interactive";
import { Applications } from "@/components/site/Applications";
import { Products } from "@/components/site/Products";
import { WhyBlueTech, Trust } from "@/components/site/WhyBlueTech";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";

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
    <div className="overflow-x-hidden">
      <SiteNav />
      <main>
        <Hero />
        <Interactive />
        <Applications />
        <Products />
        <WhyBlueTech />
        <Trust />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
