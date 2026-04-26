import ReputationPage from "@/components/ReputationPage";
import {
  createReputationMetadata,
  reputationPages,
} from "@/lib/reputationPages";

export const metadata = createReputationMetadata("enoch-schmaltz-projects");

export default function EnochSchmaltzProjectsPage() {
  return <ReputationPage page={reputationPages["enoch-schmaltz-projects"]} />;
}
