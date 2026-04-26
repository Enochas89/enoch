import ReputationPage from "@/components/ReputationPage";
import {
  createReputationMetadata,
  reputationPages,
} from "@/lib/reputationPages";

export const metadata = createReputationMetadata("enoch-schmaltz-biography");

export default function EnochSchmaltzBiographyPage() {
  return <ReputationPage page={reputationPages["enoch-schmaltz-biography"]} />;
}
