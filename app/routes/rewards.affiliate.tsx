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
        <div className="oui-py-6 oui-px-4 lg:oui-px-6 xl:oui-pl-4 lx:oui-pr-6">
          <Dashboard.AffiliatePage />
        </div>
      </ReferralProvider>
  );
}