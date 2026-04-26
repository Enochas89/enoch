import ReputationPage from "@/components/ReputationPage";
import {
  createReputationMetadata,
  reputationPages,
} from "@/lib/reputationPages";

export const metadata = createReputationMetadata("who-is-enoch-schmaltz");

export default function WhoIsEnochSchmaltzPage() {
  return <ReputationPage page={reputationPages["who-is-enoch-schmaltz"]} />;
}
