import Link from "next/link";
export default function ExternalLink({ to, children }) {
  return (
    <Link href={{ pathname: to }} passHref>
      <a target="_blank" rel="noreferrer">
        {children}
      </a>
    </Link>
  );
}
