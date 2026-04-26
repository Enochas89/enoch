import ReputationPage from "@/components/ReputationPage";
import {
  createReputationMetadata,
  reputationPages,
} from "@/lib/reputationPages";

export const metadata = createReputationMetadata(
  "enoch-schmaltz-books-and-research",
);

export default function EnochSchmaltzBooksAndResearchPage() {
  return (
    <ReputationPage
      page={reputationPages["enoch-schmaltz-books-and-research"]}
    />
  );
}
