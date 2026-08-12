const context = "https://schema.org";
const s = (value?: string) =>
  value && value.trim() !== "" ? value.trim() : undefined;
const lines = (value?: string) =>
  value
    ?.split("\n")
    .map((line) => line.trim())
    .filter(Boolean) ?? [];
export interface ArticleForm {
  headline: string;
  description: string;
  image: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  authorUrl: string;
}
export interface FaqItem {
  question: string;
  answer: string;
}
export interface ProductForm {
  name: string;
  description: string;
  image: string;
  sku: string;
  brand: string;
  price: string;
  currency: string;
  availability: string;
}
export interface OrganizationForm {
  name: string;
  url: string;
  logo: string;
  description: string;
  email: string;
  telephone: string;
  sameAs: string;
}
export interface RecipeForm {
  name: string;
  description: string;
  image: string;
  prepTime: string;
  cookTime: string;
  recipeYield: string;
  ingredients: string;
  instructions: string;
}
export interface EventForm {
  name: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  locationName: string;
  locationAddress: string;
  eventStatus: string;
  attendanceMode: string;
}
export interface BreadcrumbItem {
  name: string;
  url: string;
}
export interface LocalBusinessForm {
  name: string;
  url: string;
  description: string;
  telephone: string;
  email: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
  openingHours: string;
  latitude: string;
  longitude: string;
  priceRange: string;
  image: string;
}
export interface WebSiteForm {
  name: string;
  url: string;
  description: string;
  searchUrl: string;
}
export function buildArticle(form: ArticleForm) {
  const headline = s(form.headline);
  if (!headline) return null;
  return {
    "@context": context,
    "@type": "Article",
    mainEntityOfPage: s(form.url)
      ? { "@type": "WebPage", "@id": s(form.url) }
      : undefined,
    headline,
    description: s(form.description),
    image: s(form.image),
    datePublished: s(form.datePublished),
    dateModified: s(form.dateModified),
    author: s(form.authorName)
      ? {
          "@type": "Person",
          name: s(form.authorName),
          url: s(form.authorUrl),
        }
      : undefined,
  };
}
export function buildFaq(items: FaqItem[]) {
  const entries = items
    .map((item) => ({
      question: s(item.question),
      answer: s(item.answer),
    }))
    .filter((item) => item.question && item.answer)
    .map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }));
  if (!entries.length) return null;
  return {
    "@context": context,
    "@type": "FAQPage",
    mainEntity: entries,
  };
}
export function buildProduct(form: ProductForm) {
  const name = s(form.name);
  if (!name) return null;
  const price = s(form.price);
  const currency = s(form.currency);
  const availability = s(form.availability);
  const hasOffer = price && currency;
  return {
    "@context": context,
    "@type": "Product",
    name,
    description: s(form.description),
    image: s(form.image),
    sku: s(form.sku),
    brand: s(form.brand) ? { "@type": "Brand", name: s(form.brand) } : undefined,
    offers: hasOffer
      ? {
          "@type": "Offer",
          price,
          priceCurrency: currency,
          availability:
            availability && availability !== "Not set"
              ? `https://schema.org/${availability}`
              : undefined,
        }
      : undefined,
  };
}
export function buildOrganization(form: OrganizationForm) {
  const name = s(form.name);
  if (!name) return null;
  const sameAs = lines(form.sameAs);
  return {
    "@context": context,
    "@type": "Organization",
    name,
    url: s(form.url),
    logo: s(form.logo),
    description: s(form.description),
    email: s(form.email),
    telephone: s(form.telephone),
    sameAs: sameAs.length ? sameAs : undefined,
  };
}
export function buildRecipe(form: RecipeForm) {
  const name = s(form.name);
  if (!name) return null;
  const ingredients = lines(form.ingredients);
  const instructions = lines(form.instructions);
  return {
    "@context": context,
    "@type": "Recipe",
    name,
    description: s(form.description),
    image: s(form.image),
    prepTime: s(form.prepTime),
    cookTime: s(form.cookTime),
    recipeYield: s(form.recipeYield),
    recipeIngredient: ingredients.length ? ingredients : undefined,
    recipeInstructions: instructions.length
      ? instructions.map((text) => ({
          "@type": "HowToStep",
          text,
        }))
      : undefined,
  };
}
export function buildEvent(form: EventForm) {
  const name = s(form.name);
  if (!name) return null;
  const locationName = s(form.locationName);
  const locationAddress = s(form.locationAddress);
  const eventStatus = s(form.eventStatus);
  const attendanceMode = s(form.attendanceMode);
  return {
    "@context": context,
    "@type": "Event",
    name,
    description: s(form.description),
    image: s(form.image),
    startDate: s(form.startDate),
    endDate: s(form.endDate),
    eventStatus:
      eventStatus && eventStatus !== "Not set"
        ? `https://schema.org/${eventStatus}`
        : undefined,
    eventAttendanceMode:
      attendanceMode && attendanceMode !== "Not set"
        ? `https://schema.org/${attendanceMode}`
        : undefined,
    location:
      locationName || locationAddress
        ? {
            "@type": "Place",
            name: locationName,
            address: locationAddress,
          }
        : undefined,
  };
}
export function buildLocalBusiness(form: LocalBusinessForm) {
  const name = s(form.name);
  if (!name) return null;
  const streetAddress = s(form.streetAddress);
  const addressLocality = s(form.addressLocality);
  const addressRegion = s(form.addressRegion);
  const postalCode = s(form.postalCode);
  const addressCountry = s(form.addressCountry);
  const latitude = s(form.latitude);
  const longitude = s(form.longitude);
  const hasAddress =
    streetAddress ||
    addressLocality ||
    addressRegion ||
    postalCode ||
    addressCountry;
  return {
    "@context": context,
    "@type": "LocalBusiness",
    name,
    url: s(form.url),
    description: s(form.description),
    telephone: s(form.telephone),
    email: s(form.email),
    image: s(form.image),
    priceRange: s(form.priceRange),
    openingHours: s(form.openingHours),
    address: hasAddress
      ? {
          "@type": "PostalAddress",
          streetAddress,
          addressLocality,
          addressRegion,
          postalCode,
          addressCountry,
        }
      : undefined,
    geo:
      latitude && longitude
        ? {
            "@type": "GeoCoordinates",
            latitude,
            longitude,
          }
        : undefined,
  };
}
export function buildWebSite(form: WebSiteForm) {
  const name = s(form.name);
  if (!name) return null;
  const searchUrl = s(form.searchUrl);
  return {
    "@context": context,
    "@type": "WebSite",
    name,
    url: s(form.url),
    description: s(form.description),
    potentialAction: searchUrl
      ? {
          "@type": "SearchAction",
          target: searchUrl,
          "query-input": "required name=search_term_string",
        }
      : undefined,
  };
}
export function buildBreadcrumb(items: BreadcrumbItem[]) {
  const entries = items
    .map((item) => ({
      name: s(item.name),
      url: s(item.url),
    }))
    .filter((item) => item.name && item.url)
    .map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    }));
  if (!entries.length) return null;
  return {
    "@context": context,
    "@type": "BreadcrumbList",
    itemListElement: entries,
  };
}
export function stringifyJsonLd(data: object | null) {
  if (!data) return "";
  return JSON.stringify(data, null, 2);
}
