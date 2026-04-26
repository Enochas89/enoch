import ReputationPage from "@/components/ReputationPage";
import {
  createReputationMetadata,
  reputationPages,
} from "@/lib/reputationPages";

export const metadata = createReputationMetadata("enoch-schmaltz-writing");

export default function EnochSchmaltzWritingPage() {
  return <ReputationPage page={reputationPages["enoch-schmaltz-writing"]} />;
}
