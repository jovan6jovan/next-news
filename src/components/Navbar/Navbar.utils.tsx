import { CategorySlugs } from "@/pages/categories/category.types";
import { Context } from "@/src/store/context";
import { ActionType } from "@/src/store/types";
import Link from "next/link";
import { useContext } from "react";

export const renderDropDownLinks = () => {
  const { dispatch } = useContext(Context);
  const categorySlugs = Object.values(CategorySlugs);

  const handleClick = () =>
    dispatch({
      type: ActionType.SET_IS_DROPDOWN_MENU_OPEN,
      payload: false,
    });

  return categorySlugs.map((slug) => (
    <Link
      key={slug}
      href={`/categories/${slug}`}
      className="navbar-item"
      onClick={handleClick}
    >
      {slug}
    </Link>
  ));
};
