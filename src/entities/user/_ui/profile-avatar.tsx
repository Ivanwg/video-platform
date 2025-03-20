import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui";
import { Profile } from "../_domain/types";
import { cn } from "@/shared/lib/utils";
import { getProfileLetters } from "../_vm/get-profile-letters";


interface Props {
  className?: string
  profile?: Profile
}

export const ProfileAvatar: React.FC<Props> = ({ className, profile }) => {
  if (!profile) {
    return null;
  }

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={profile.image ?? ""} className="object-cover" />
      <AvatarFallback>{getProfileLetters(profile)}</AvatarFallback>
    </Avatar>
  );
}