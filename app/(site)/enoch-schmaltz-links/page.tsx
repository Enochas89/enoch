import ReputationPage from "@/components/ReputationPage";
import {
  createReputationMetadata,
  reputationPages,
} from "@/lib/reputationPages";

export const metadata = createReputationMetadata("enoch-schmaltz-links");

export default function EnochSchmaltzLinksPage() {
  return <ReputationPage page={reputationPages["enoch-schmaltz-links"]} />;
}
