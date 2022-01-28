import { Link, useTheme } from "@nextui-org/react";
import { LinkElementProps } from "../Abstract/PropsInterfaces";

function LinkElement({ text, linkOnClick }: LinkElementProps) {
   const { theme } = useTheme();
   return (
      <Link
         href={linkOnClick}
         css={{
            color: theme?.colors.primary.value,
            "&:hover": { fontWeight: theme?.fontWeights.bold },
            "&:active": {
               fontWeight: theme?.fontWeights.bold,
               color: "$titleColor",
            },
            "&:focus": {
               fontWeight: theme?.fontWeights.bold,
               color: "$titleColor",
            },
         }}
      >
         {text}
      </Link>
   );
}

export default LinkElement;
