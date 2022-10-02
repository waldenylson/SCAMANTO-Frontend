import React from 'react';
import {
  AppBar,
  IconButton,
  Badge,
  Toolbar,
  Avatar,
  Menu,
  MenuItem,
  Button,
  ListItemIcon,
  ListItemText,
  Typography,
  Tooltip,
} from '@mui/material';
import {
  CalendarToday,
  Notifications,
  AccountCircle,
  Settings,
  ExitToApp,
} from '@material-ui/icons';

import CalendarCompact from 'components/Calendar/Compact';
import { useAuth } from '../../hooks/authentication.hook';

import SearchArea from '../SearchBar';

import { Container } from './styles';

import defaultAvatar from '../../assets/images/defaultAvatar.png';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [calendarAnchorEl, setCalendarAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCalendarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setCalendarAnchorEl(event.currentTarget);
  };

  const handleCalendarClose = () => {
    setCalendarAnchorEl(null);
  };

  const { signOut } = useAuth();

  const logout = React.useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <AppBar position="sticky" color="inherit">
      <Container>
        <Toolbar>
          <SearchArea />

          <div className="grow" />
          <Tooltip
            onClick={handleCalendarClick}
            title="Calendário"
            aria-label="calendário"
          >
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="primary">
                <CalendarToday color="inherit" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Notificações" aria-label="notificações">
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="primary">
                <Notifications />
              </Badge>
            </IconButton>
          </Tooltip>

          <div className="userspace-button">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <div className="user-informations">
                <Typography
                  variant="subtitle2"
                  color="inherit"
                  align="center"
                  component="span"
                >
                  Diego Fernando Alencar Varejão
                </Typography>
                <Typography variant="body2" color="inherit" align="center">
                  varejaodfav@fab.mil.br
                </Typography>
              </div>

              <Avatar alt="Diego Varejão" src={defaultAvatar} />
            </Button>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText>Perfil</ListItemText>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText>Preferências</ListItemText>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ExitToApp />
                </ListItemIcon>
                <ListItemText onClick={() => logout()}>
                  Sair da aplicação
                </ListItemText>
              </MenuItem>
            </Menu>
          </div>
          <div className="calendar-drop-down">
            <Menu
              id="calendar"
              anchorEl={calendarAnchorEl}
              keepMounted
              open={Boolean(calendarAnchorEl)}
              onClose={handleCalendarClose}
            >
              <MenuItem>
                <ListItemText>
                  <CalendarCompact />
                </ListItemText>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
