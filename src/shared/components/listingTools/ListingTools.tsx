import {
  Box,
  Button,
  Icon,
  InputAdornment,
  Paper,
  TextField,
  useTheme,
} from "@mui/material";

interface IListingToolsProps {
  text?: string;
  visible?: boolean;
  changeText?: (newText: string) => void;
  textButton?: string;
  visibleButton?: boolean;
  clickButton?: () => void;
}

const ListingTools: React.FC<IListingToolsProps> = ({
  text = "",
  visible = false,
  changeText,
  textButton = "Novo",
  visibleButton = true,
  clickButton,
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
      {visible && (
        <TextField
          value={text}
          onChange={(e) => changeText?.(e.target.value)}
          placeholder="Pesquisar..."
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Icon>search</Icon>
              </InputAdornment>
            ),
          }}
        />
      )}
      <Box flex={1} display="flex" justifyContent="end">
       {visibleButton &&(
         <Button
         variant="contained"
         color="primary"
         disableElevation
         onClick={clickButton}
         endIcon={<Icon>add</Icon>}
       >
         {textButton}
       </Button>
       )}
      </Box>
    </Box>
  );
};

export default ListingTools;
