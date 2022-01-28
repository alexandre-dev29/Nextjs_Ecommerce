import { Container, Grid, Row, Text, useTheme } from "@nextui-org/react";
import LinkElement from "./LinkElement";
import { LinkElementProps } from "../Abstract/PropsInterfaces";
import { linksDataArray } from "../UiElements/NavBarLinks";

const NavBar = () => {
   const { theme } = useTheme();
   const containerCss = {
      borderBottom: "1px solid $primary",
      height: "8vh",
      margin: 0,
      width: "100vw",
      maxW: "100vw",
      borderColor: theme?.colors.accents3.value,
      px: "4rem",
   };
   const titleTextCss = {
      fontWeight: theme?.fontWeights.bold.value,
      color: "$titleColor",
      fontSize: theme?.fontSizes.md,
      flexGrow: "1",
   };

   return (
      <Container
         css={containerCss}
         alignContent={"center"}
         display={"flex"}
         alignItems={"center"}
      >
         <Row justify={"space-between"} align={"center"}>
            <Text css={titleTextCss}>ENIGMA</Text>
            <Grid.Container gap={2} justify="center" css={{ width: "40%" }}>
               {linksDataArray.map((element, index) => (
                  <Grid key={index} xs={3}>
                     <LinkElement
                        text={element.text}
                        linkOnClick={element.linkOnClick}
                     />
                  </Grid>
               ))}
            </Grid.Container>
         </Row>
      </Container>
   );
};

export default NavBar;
