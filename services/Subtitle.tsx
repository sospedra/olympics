import Link from "next/link";

export const Subtitle: React.FC<{ href: string }> = (props) => {
  return (
    <h3 className="container justify-center pt-3 pb-8 mx-auto text-center">
      <Link href={props.href} passHref>
        <a className="italic text-center text-gray-800">{props.children}</a>
      </Link>
    </h3>
  );
};
