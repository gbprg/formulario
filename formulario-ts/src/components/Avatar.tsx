import { ImgHTMLAttributes  } from "react";
import styles from "./Avatar.module.css"

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  noBorder?: boolean;
  src: string;
  alt?: string;
}

export default function Avatar({ noBorder = true, ...props}: AvatarProps) {
  return (
    <div>
      <img 
        className={noBorder ? styles.avatarWithBorder : styles.avatar}
        {...props}
      />
    </div>
  )
}