import Link from "next/link";

type AuthorIdentityLinkProps = {
  className?: string;
  leadText?: string;
};

export default function AuthorIdentityLink({
  className,
  leadText = "Written by",
}: AuthorIdentityLinkProps) {
  return (
    <p className={className}>
      {leadText}{" "}
      <Link
        href="/enoch-schmaltz"
        className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
      >
        Enoch Schmaltz
      </Link>
      .
    </p>
  );
}
