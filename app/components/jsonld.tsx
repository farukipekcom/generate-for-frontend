interface Props {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  link: string;
  breadcrumb: any;
}
export default function Jsonld(Props: Props) {
  const {
    title,
    description,
    datePublished,
    dateModified,
    image = "http://generateforfrontend.com/open-graph.jpg",
    link,
    breadcrumb,
  } = Props;

  return [
    {
      "@context": "https://schema.org/",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": link,
      },
      headline: title,
      description: description,
      image: image,
      author: {
        "@type": "Person",
        name: "Faruk Ipek",
        url: "https://farukipek.com/",
      },
      datePublished: datePublished,
      dateModified: dateModified,
    },
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        breadcrumb.map((item: any) => ({
          "@type": "ListItem",
          position: item.position,
          name: item.name,
          item: item.item,
        })),
      ],
    },
  ];
}
