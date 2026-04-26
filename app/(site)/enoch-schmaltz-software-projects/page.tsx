import ReputationPage from "@/components/ReputationPage";
import {
  createReputationMetadata,
  reputationPages,
} from "@/lib/reputationPages";

export const metadata = createReputationMetadata(
  "enoch-schmaltz-software-projects",
);

export default function EnochSchmaltzSoftwareProjectsPage() {
  return (
    <ReputationPage
      page={reputationPages["enoch-schmaltz-software-projects"]}
    />
  );
}
