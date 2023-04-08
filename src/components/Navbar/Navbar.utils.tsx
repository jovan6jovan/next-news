import { CategorySlugs } from "@/pages/categories/category.types";
import Link from "next/link";

export const renderDropDownLinks = () => {
  const categorySlugs = Object.values(CategorySlugs);
  return categorySlugs.map((slug) => (
    <Link key={slug} href={`/categories/${slug}`} className="navbar-item">
      {slug}
    </Link>
  ));
};
