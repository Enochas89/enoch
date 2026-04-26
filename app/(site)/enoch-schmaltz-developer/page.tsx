import ReputationPage from "@/components/ReputationPage";
import {
  createReputationMetadata,
  reputationPages,
} from "@/lib/reputationPages";

export const metadata = createReputationMetadata("enoch-schmaltz-developer");

export default function EnochSchmaltzDeveloperPage() {
  return <ReputationPage page={reputationPages["enoch-schmaltz-developer"]} />;
}
