import {
  Scaffold,
} from "@orderly.network/ui-scaffold";
import { Outlet } from "@remix-run/react";

import { useOrderlyConfig } from "@/utils/config";
import { useNav } from "@/hooks/useNav";

// const LeftSidebar = (props: ScaffoldProps) => {
//   const { expanded, setExpand } = useScaffoldContext();
//   const location = useLocation();
//   const state = useTradingRewardsLayoutScript({
//     current: location.pathname,
//   });
//   const { onRouteChange } = useNav();
//   return (
//     <SideBar
//       {...state}
//       title={"Rewards"}
//       {...props}
//       open={expanded}
//       items={[
//         ...(state?.items || []),
//       ]}
//       onOpenChange={(open) => setExpand(open)}
//       onItemSelect={(a) => {
//         state.onItemSelect?.(a);
//         onRouteChange?.({
//           href: a.href || "",
//           name: a.name,
//         });
//       }}
//     />
//   );
// };

export default function RewardsPage() {
  const { onRouteChange } = useNav();
  const config = useOrderlyConfig();

  return (
    <Scaffold
      // classNames={{
      //   content: "lg:oui-mb-0",
      //   topNavbar: "oui-bg-base-9",
      //   leftSidebar:
      //     "oui-m-3 oui-p-4 oui-border oui-border-[1px] oui-border-line oui-rounded-xl oui-bg-base-9",
      // }}
      mainNavProps={{
        ...config.scaffold.mainNavProps,
        initialMenu: "/rewards",
      }}
      // leftSidebar={<LeftSidebar />}
      footerProps={config.scaffold.footerProps}
      routerAdapter={{
        onRouteChange,
      }}
      bottomNavProps={config.scaffold.bottomNavProps}
    >
      <Outlet />
    </Scaffold>
  );
}