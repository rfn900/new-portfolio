import Link from "next/link";
import { ReactChild } from "react";

export default function ExternalLink({
  to,
  children,
}: {
  to: string;
  children: ReactChild;
}) {
  return (
    <Link href={{ pathname: to }} passHref>
      <a target="_blank" rel="noreferrer">
        {children}
      </a>
    </Link>
  );
}
