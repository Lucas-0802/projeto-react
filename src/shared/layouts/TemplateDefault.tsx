import { Icon, IconButton, Theme, useMediaQuery, useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useDrawerContext } from "../contexts/DrawerContext";

interface ITemplateDefault {
  title: string;
  navbar?: React.ReactNode;
  children: React.ReactNode;
}

const TemplateDefault: React.FC<ITemplateDefault> = ({
  children,
  title,
  navbar,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        padding={1}
        display="flex"
        alignItems="center"
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
        gap={1}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography
          variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {title}
        </Typography>
      </Box>
      {navbar && <Box>{navbar}</Box>}
      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};

export default TemplateDefault;
