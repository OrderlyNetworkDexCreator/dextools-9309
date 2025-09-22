import { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "@remix-run/react";
import { generatePageTitle } from "@/utils/utils";

export const meta: MetaFunction = () => {
  return [{ title: generatePageTitle("Rewards") }];
};

export default function RewardsIndexPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchString = searchParams.toString();
    const redirectPath = searchString 
      ? `/rewards/trading?${searchString}` 
      : "/rewards/trading";
    
    navigate(redirectPath, { replace: true });
  }, [navigate, searchParams]);

  return null;
}
