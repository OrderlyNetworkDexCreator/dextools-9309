import { type MetaFunction } from "@remix-run/node";
import { useNavigate, useSearchParams } from "@remix-run/react";
import { useEffect } from "react";
import { DEFAULT_SYMBOL } from "@/utils/storage";
import { getPageMeta } from "@/utils/seo";
import { getRuntimeConfig } from "@/utils/runtime-config";

export const meta: MetaFunction = () => {
  const rootSeoTags = getPageMeta();
  
  const pageSpecificTags = [];
  
  const appName = getRuntimeConfig("VITE_APP_NAME");
  if (appName) {
    pageSpecificTags.push({ title: appName });
  }
  
  const appDescription = getRuntimeConfig("VITE_APP_DESCRIPTION");
  if (appDescription) {
    pageSpecificTags.push({ name: "description", content: appDescription });
  }
  
  return [...rootSeoTags, ...pageSpecificTags];
};

export default function Index() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchParamsString = searchParams.toString();
    const redirectPath = `/perp/${DEFAULT_SYMBOL}${searchParamsString ? `?${searchParamsString}` : ''}`;
    navigate(redirectPath);
  }, [navigate, searchParams]);

  return null;
}
