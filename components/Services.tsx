// Hybrid SSR Component for Services section
import { en } from "@/translations";
import { ServicesAnimated } from "./services/ServicesAnimated";
import { ServicesContent } from "./services/ServicesContent";

const defaultServices = en.services;

// Static services data for SSR
const servicesData = [
  {
    title: defaultServices.productDesign.title,
    subtitle: defaultServices.productDesign.subtitle,
    image: "/services/product-design3.jpg",
    services: defaultServices.productDesign.items,
    tag: defaultServices.productDesign.tag,
    bgColor: "bg-[#F5F5F5] dark:bg-[#1a1a1a]",
  },
  {
    title: defaultServices.websites.title,
    subtitle: defaultServices.websites.subtitle,
    image: "/services/website2.jpg",
    services: defaultServices.websites.items,
    tag: defaultServices.websites.tag,
    bgColor: "bg-[#28292D] dark:bg-black",
  },
  {
    title: defaultServices.ecommerce.title,
    subtitle: defaultServices.ecommerce.subtitle,
    image: "/services/ecommerce.jpg",
    services: defaultServices.ecommerce.items,
    tag: defaultServices.ecommerce.tag,
    bgColor: "bg-[#F5F5F5] dark:bg-[#1a1a1a]",
  },
  {
    title: defaultServices.development.title,
    subtitle: defaultServices.development.subtitle,
    image: "/services/dev.jpg",
    services: defaultServices.development.items,
    tag: defaultServices.development.tag,
    bgColor: "bg-[#28292D] dark:bg-black",
  },
];

export function Services() {
  return (
    <>
      <noscript>
        <ServicesContent
          tag={defaultServices.tag}
          title={defaultServices.title}
          subtitle={defaultServices.subtitle}
          ctaButton={defaultServices.ctaButton}
          services={servicesData}
        />
      </noscript>
      <ServicesAnimated />
    </>
  );
}
