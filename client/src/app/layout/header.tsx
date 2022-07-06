import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  darkMode: boolean;
  onThemeChange: () => void;
}

export default function Header({ darkMode, onThemeChange }: Props) {
  return (
    <AppBar sx={{ mb: 4 }} position="static">
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
        <Switch checked={darkMode} onChange={onThemeChange} />
      </Toolbar>
    </AppBar>
  );
}
