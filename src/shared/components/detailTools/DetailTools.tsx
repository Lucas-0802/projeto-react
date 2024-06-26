import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface IDetailToolsProps {
  textButtonNew?: string;

  showButtonNew?: boolean;
  showButtonBack?: boolean;
  showButtonDelete?: boolean;
  showButtonSave?: boolean;
  showButtonSaveAndBack?: boolean;

  showButtonNewLoading?: boolean;
  showButtonBackLoading?: boolean;
  showButtonDeleteLoading?: boolean;
  showButtonSaveLoading?: boolean;
  showButtonSaveAndBackLoading?: boolean;

  clickNewButton?: () => void;
  clickBackButton?: () => void;
  clickDeleteButton?: () => void;
  clickSaveButton?: () => void;
  clickSaveAndBackButton?: () => void;
}

const DetailTools: React.FC<IDetailToolsProps> = ({
  textButtonNew = "New",

  showButtonNew = true,
  showButtonBack = true,
  showButtonDelete = true,
  showButtonSave = true,
  showButtonSaveAndBack = false,

  showButtonNewLoading = false,
  showButtonBackLoading = false,
  showButtonDeleteLoading = false,
  showButtonSaveLoading = false,
  showButtonSaveAndBackLoading = false,

  clickNewButton,
  clickBackButton,
  clickDeleteButton,
  clickSaveButton,
  clickSaveAndBackButton,
}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const theme = useTheme();
  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      gap={1}
      alignItems="center"
      component={Paper}
    >
      {showButtonSave && !showButtonSaveLoading && (
        <Button
          variant="contained"
          color="primary"
          onClick={clickSaveButton}
          disableElevation
          startIcon={<Icon>save</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Save
          </Typography>
        </Button>
      )}
      {showButtonSaveLoading && <Skeleton width={110} height={60} />}

      {(showButtonSaveAndBack && !showButtonSaveAndBackLoading && !smDown && !mdDown) && (
        <Button
          variant="outlined"
          color="primary"
          onClick={clickSaveAndBackButton}
          disableElevation
          startIcon={<Icon>save</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Save and Back
          </Typography>
        </Button>
      )}
      {(showButtonSaveAndBackLoading  && !smDown && !mdDown) && <Skeleton width={180} height={60} />}
      {showButtonDelete && !showButtonDeleteLoading && (
        <Button
          variant="outlined"
          color="primary"
          onClick={clickDeleteButton}
          disableElevation
          startIcon={<Icon>delete</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Delete
          </Typography>
        </Button>
      )}

      {showButtonDeleteLoading && <Skeleton width={110} height={60} />}

      {(showButtonNew && !showButtonNewLoading && !smDown) && (
        <Button
          variant="outlined"
          color="primary"
          onClick={clickNewButton}
          disableElevation
          startIcon={<Icon>add</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {textButtonNew}
          </Typography>
        </Button>
      )}
      {(showButtonNewLoading && !smDown) && <Skeleton width={110} height={60} />}
     { (showButtonBack && (showButtonNew || showButtonDelete || showButtonSave || showButtonSaveAndBack)) && (
       <Divider variant="middle" orientation="vertical" />
     )}

      {showButtonBack && !showButtonBackLoading && (
        <Button
          variant="outlined"
          color="primary"
          onClick={clickBackButton}
          disableElevation
          startIcon={<Icon>arrow_back</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Back
          </Typography>
        </Button>
      )}

      {showButtonBackLoading && <Skeleton width={110} height={60} />}
    </Box>
  );
};

export default DetailTools;
