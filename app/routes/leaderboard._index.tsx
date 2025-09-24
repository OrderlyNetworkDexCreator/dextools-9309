import { MetaFunction } from "@remix-run/node";
import { GeneralLeaderboardWidget } from "@orderly.network/trading-leaderboard";
import { generatePageTitle } from "@/utils/utils";
import { getPageMeta } from "@/utils/seo";

export const meta: MetaFunction = () => {
  const rootSeoTags = getPageMeta();
  const pageSpecificTags = [{ title: generatePageTitle("Leaderboard") }];
  return [...rootSeoTags, ...pageSpecificTags];
};

export default function MarketsPage() {
  return (
    <div className="oui-py-6 oui-px-4 lg:oui-px-6 xl:oui-pl-4 lx:oui-pr-6">
      <GeneralLeaderboardWidget />
    </div>
  );
}
