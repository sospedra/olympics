export const Anchor: React.FC<{ href: string }> = (props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-600 underline"
    >
      {props.children}
    </a>
  );
};
