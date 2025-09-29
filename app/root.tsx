import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import OrderlyProvider from "@/components/orderlyProvider";
import "./styles/index.css";
import { withBasePath } from "./utils/base-path";
import { getSEOConfig, getPageMeta, getUserLanguage } from "./utils/seo";

export const meta: MetaFunction = () => {
  return getPageMeta();
};

export function Layout({ children }: { children: React.ReactNode }) {
  const seoConfig = getSEOConfig();
  const defaultLanguage = getUserLanguage();
  
  return (
    <html lang={seoConfig.language || defaultLanguage}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/webp" href={withBasePath("/favicon.webp")} />
        <Meta />
        <Links />
      </head>
      <body>
        <OrderlyProvider>{children}</OrderlyProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
