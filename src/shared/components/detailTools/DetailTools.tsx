import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
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
      {(showButtonSave && !showButtonSaveLoading) && (
        <Button
          variant="contained"
          color="primary"
          onClick={clickSaveButton}
          disableElevation
          startIcon={<Icon>save</Icon>}
        >
          Save
        </Button>
      )}
      {showButtonSaveLoading && <Skeleton width={110} height={60} />}

      {(showButtonSaveAndBack && !showButtonSaveAndBackLoading) && (
        <Button
          variant="outlined"
          color="primary"
          onClick={clickSaveAndBackButton}
          disableElevation
          startIcon={<Icon>save</Icon>}
        >
          Save and Back
        </Button>
      )}
      {showButtonSaveAndBackLoading && <Skeleton width={180} height={60} />}
      {(showButtonDelete && !showButtonDeleteLoading) && (
        <Button
          variant="outlined"
          color="primary"
          onClick={clickDeleteButton}
          disableElevation
          startIcon={<Icon>delete</Icon>}
        >
          Delete
        </Button>
      )}

      {showButtonDeleteLoading && <Skeleton width={110} height={60} />}

      {(showButtonNew && !showButtonNewLoading) && (
        <Button
          variant="outlined"
          color="primary"
          onClick={clickNewButton}
          disableElevation
          startIcon={<Icon>add</Icon>}
        >
          {textButtonNew}
        </Button>
      )}
      {showButtonNewLoading && <Skeleton width={110} height={60} />}
      <Divider variant="middle" orientation="vertical" />

      {(showButtonBack && !showButtonBackLoading) && (
        <Button
          variant="outlined"
          color="primary"
          onClick={clickBackButton}
          disableElevation
          startIcon={<Icon>arrow_back</Icon>}
        >
          Back
        </Button>
      )}

      {showButtonBackLoading && <Skeleton width={110} height={60} />}
    </Box>
  );
};

export default DetailTools;
