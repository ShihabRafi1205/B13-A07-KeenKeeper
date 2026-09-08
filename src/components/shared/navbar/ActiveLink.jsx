"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useMemo } from "react";

const ActiveLink = memo(
  ({ href, children, className, activeClassName, exact = false, ...props }) => {
    const pathname = usePathname();

    const isActive = useMemo(() => {
      if (exact) {
        return pathname === href;
      }
      if (href === "/") {
        return pathname === href;
      }
      return pathname?.startsWith(href);
    }, [pathname, href, exact]);

    const combinedClassName = useMemo(() => {
      return `${className} ${isActive ? activeClassName : ""}`.trim();
    }, [className, activeClassName, isActive]);

    return (
      <Link href={href} className={combinedClassName} {...props}>
        {children}
      </Link>
    );
  },
);

ActiveLink.displayName = "ActiveLink";

export default ActiveLink;
