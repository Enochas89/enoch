import ReputationPage from "@/components/ReputationPage";
import {
  createReputationMetadata,
  reputationPages,
} from "@/lib/reputationPages";

export const metadata = createReputationMetadata("enoch-schmaltz-facts");

export default function EnochSchmaltzFactsPage() {
  return <ReputationPage page={reputationPages["enoch-schmaltz-facts"]} />;
}
