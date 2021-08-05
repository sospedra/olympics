import { useRouter } from "next/router";
import Link from "next/link";

const MENU = [
  { name: "Ranking", href: "/" },
  { name: "Understand the score ⓘ", href: "/manifesto#understand" },
  { name: "Manifesto", href: "/manifesto#why" },
];

export const Menu: React.FC<{}> = () => {
  const router = useRouter();

  return (
    <header className="container flex flex-col items-center justify-center pt-4 mx-auto">
      <h1 className="text-xl font-bold">The Olympics Score</h1>
      <h2 className="pb-4 italic">Because the normal count isn&apos;t fair</h2>
      <nav>
        <ul className="flex flex-row pb-4 text-sm">
          {MENU.map((item) => {
            const isActive = router.asPath === item.href;

            return (
              <li key={item.name} className="px-2">
                <Link href={item.href} passHref>
                  <a
                    className={` border-b hover:border-purple-900 border-transparent border-dashed ${
                      isActive ? "text-gray-500" : "text-gray-800"
                    }`}
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
