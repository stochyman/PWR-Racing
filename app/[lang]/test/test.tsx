import { getDictionary } from "../dictionaries";

type Locale = "pl" | "en";

interface Params {
  params: {
    lang: Locale;
  };
}

export default async function Test({ params: { lang } }: Params) {
  const dict = await getDictionary(lang);
  return <button>{dict.products.cart}</button>;
}
