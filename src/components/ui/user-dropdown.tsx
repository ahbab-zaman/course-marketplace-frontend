import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export const UserDropdown = () => {
  const { user, logout, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer size-10 border border-white dark:border-gray-700">
          <AvatarImage src={user?.avatar || ""} alt={user?.name || displayName} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[200px] rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-1" align="end">
        <div className="px-3 py-2">
          <div className="flex items-center gap-2">
            <Avatar className="size-8 border border-gray-200 dark:border-gray-700">
              <AvatarImage src={user?.avatar || ""} alt={user?.name || displayName} />
              <AvatarFallback className="text-xs">{initials}</AvatarFallback>
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
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href={getDashboardPath()} className="flex items-center gap-2 cursor-pointer">
            <Icon icon="solar:home-2-line-duotone" className="size-4 text-gray-500 dark:text-gray-400" />
            Dashboard
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/profile" className="flex items-center gap-2 cursor-pointer">
            <Icon icon="solar:user-circle-line-duotone" className="size-4 text-gray-500 dark:text-gray-400" />
            Account
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          disabled={isLoading}
          className="flex items-center gap-2 cursor-pointer text-red-600 dark:text-red-400 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-950/20"
        >
          <Icon icon="solar:logout-2-bold-duotone" className="size-4" />
          {isLoading ? "Logging out..." : "Logout"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;