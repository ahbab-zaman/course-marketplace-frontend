"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";

const dropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    y: -8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 28,
      mass: 0.6,
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: -6,
    transition: {
      duration: 0.18,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -6 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 400, damping: 28 },
  },
};

export const UserDropdown = () => {
  const { user, logout, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const getDashboardPath = () => {
    switch (user?.role) {
      case "ADMIN":
        return "/admin";
      case "INSTRUCTOR":
        return "/instructor";
      case "STUDENT":
      default:
        return "/user";
    }
  };

  if (!user && !isAuthenticated) return null;

  const displayName = user?.name ?? "Account";
  const displayEmail = user?.email ?? "Signed in user";
  const initials = (displayName || "AC")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <motion.div
          whileTap={{ scale: 0.93 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          className="cursor-pointer"
        >
          <Avatar className="size-10 border border-white dark:border-gray-700">
            <AvatarImage
              src={user?.avatar || ""}
              alt={user?.name || displayName}
            />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </motion.div>
      </DropdownMenuTrigger>

      <AnimatePresence>
        {open && (
          <DropdownMenuContent forceMount asChild align="end" sideOffset={8}>
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-[200px] rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-1 z-50 shadow-md"
            >
              {/* Header */}
              <motion.div variants={itemVariants} className="px-3 py-2">
                <div className="flex items-center gap-2">
                  <Avatar className="size-8 border border-gray-200 dark:border-gray-700">
                    <AvatarImage
                      src={user?.avatar || ""}
                      alt={user?.name || displayName}
                    />
                    <AvatarFallback className="text-xs">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                      {displayName}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {displayEmail}
                    </p>
                  </div>
                </div>
              </motion.div>

              <DropdownMenuSeparator />

              {/* Dashboard */}
              <motion.div variants={itemVariants}>
                <DropdownMenuItem asChild>
                  <Link
                    href={getDashboardPath()}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Icon
                      icon="solar:home-2-line-duotone"
                      className="size-4 text-gray-500 dark:text-gray-400"
                    />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
              </motion.div>

              {/* Account */}
              <motion.div variants={itemVariants}>
                <DropdownMenuItem asChild>
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Icon
                      icon="solar:user-circle-line-duotone"
                      className="size-4 text-gray-500 dark:text-gray-400"
                    />
                    Account
                  </Link>
                </DropdownMenuItem>
              </motion.div>

              <DropdownMenuSeparator />

              {/* Logout */}
              <motion.div variants={itemVariants}>
                <DropdownMenuItem
                  onClick={handleLogout}
                  disabled={isLoading}
                  className="flex items-center gap-2 cursor-pointer text-red-600 dark:text-red-400 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-950/20"
                >
                  <Icon icon="solar:logout-2-bold-duotone" className="size-4" />
                  {isLoading ? "Logging out..." : "Logout"}
                </DropdownMenuItem>
              </motion.div>
            </motion.div>
          </DropdownMenuContent>
        )}
      </AnimatePresence>
    </DropdownMenu>
  );
};

export default UserDropdown;
