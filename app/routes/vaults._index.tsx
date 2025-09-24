import { MetaFunction } from "@remix-run/node";
import { VaultsPage as VaultsPageComponent } from "@orderly.network/vaults";
import { generatePageTitle } from "@/utils/utils";
import { getPageMeta } from "@/utils/seo";

export const meta: MetaFunction = () => {
  const rootSeoTags = getPageMeta();
  const pageSpecificTags = [{ title: generatePageTitle("Vaults") }];
  return [...rootSeoTags, ...pageSpecificTags];
};

export default function VaultsPage() {
  return (
    <VaultsPageComponent />
  );
}
