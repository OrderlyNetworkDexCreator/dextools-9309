import { MetaFunction } from "@remix-run/node";
import { MarketsHomePage } from "@orderly.network/markets";
import { generatePageTitle } from "@/utils/utils";
import { getPageMeta } from "@/utils/seo";
import { getRuntimeConfig, getRuntimeConfigBoolean } from "@/utils/runtime-config";

export const meta: MetaFunction = () => {
  const rootSeoTags = getPageMeta();
  const pageSpecificTags = [{ title: generatePageTitle("Markets") }];
  return [...rootSeoTags, ...pageSpecificTags];
};

export default function MarketsPage() {
  return (
    <MarketsHomePage
      comparisonProps={{
        exchangesIconSrc:
          getRuntimeConfigBoolean("VITE_HAS_SECONDARY_LOGO")
            ? "/logo-secondary.webp"
            : undefined,
        exchangesName:
          getRuntimeConfig("VITE_ORDERLY_BROKER_NAME"),
      }}
    />
  );
}
