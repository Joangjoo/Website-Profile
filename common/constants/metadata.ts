const DOMAIN =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.DOMAIN ?? "https://website-profile.vercel.app";

export const METADATA = {
  creator: "Sholahudin Jauhari",
  description: "Personal website, portfolio",
  keyword: "Sholahudin, Sholahudin Jauhari",
  authors: {
    name: "Sholahudin Jauhari",
    url: DOMAIN,
  },
  openGraph: {
    url: DOMAIN,
    siteName: "Sholahudin Jauhari",
    locale: "id-ID",
  },
  exTitle: "| Sholahudin Jauhari",
  profile: "/images/jo.jpg",
};
