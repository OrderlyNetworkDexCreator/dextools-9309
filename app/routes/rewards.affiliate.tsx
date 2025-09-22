import { MetaFunction } from "@remix-run/node";
import { generatePageTitle } from "@/utils/utils";
import { Dashboard, ReferralProvider } from "@orderly.network/affiliate";

export const meta: MetaFunction = () => {
  return [{ title: generatePageTitle("Affiliate") }];
};

export default function AffiliatePage() {
  return (
      <ReferralProvider
        becomeAnAffiliateUrl="https://orderly.network"
        learnAffiliateUrl="https://orderly.network"
        referralLinkUrl={typeof window !== 'undefined' ? window.location.origin : "https://orderly.network"}
      >
        <Dashboard.AffiliatePage />
      </ReferralProvider>
  );
}