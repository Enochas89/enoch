import ReputationPage from "@/components/ReputationPage";
import {
  createReputationMetadata,
  reputationPages,
} from "@/lib/reputationPages";

export const metadata = createReputationMetadata("enoch-schmaltz-profile");

export default function EnochSchmaltzProfilePage() {
  return <ReputationPage page={reputationPages["enoch-schmaltz-profile"]} />;
}
