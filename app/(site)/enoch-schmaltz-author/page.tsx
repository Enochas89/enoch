import ReputationPage from "@/components/ReputationPage";
import {
  createReputationMetadata,
  reputationPages,
} from "@/lib/reputationPages";

export const metadata = createReputationMetadata("enoch-schmaltz-author");

export default function EnochSchmaltzAuthorPage() {
  return <ReputationPage page={reputationPages["enoch-schmaltz-author"]} />;
}
