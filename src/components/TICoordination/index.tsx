import React from 'react';

import {
  Grid,
  List,
  Card,
  CardHeader,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Button,
  Divider,
} from '@mui/material';

import { useStyles } from './styles';

function not(a: string[], b: string[]) {
  return a.filter(value => b.indexOf(value) === -1);
}

function intersection(a: string[], b: string[]) {
  return a.filter(value => b.indexOf(value) !== -1);
}

function union(a: string[], b: string[]) {
  return [...a, ...not(b, a)];
}

const TransferList: React.FC = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState<string[]>([]);
  const [left, setLeft] = React.useState<string[]>([
    'COI',
    'COPM',
    'ACC-RE',
    'ACC-AO',
  ]);
  const [right, setRight] = React.useState<string[]>([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items: string[]) =>
    intersection(checked, items).length;

  const handleToggleAll = (items: string[]) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title: React.ReactNode, items: string[]) => (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        // eslint-disable-next-line prettier/prettier
        avatar={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{ 'aria-label': 'Todos Itens Selecionados' }}
          />
          // eslint-disable-next-line prettier/prettier
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selecionados`}
      />
      <Divider />
      <List className={classes.list} dense component="div" role="list">
        {items.map((value: string) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <Grid style={{ paddingTop: 20, margin: 10 }}>
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
        className={classes.root}
        style={{ border: '1px solid' }}
      >
        <Grid item>{customList('Todos Setores', left)}</Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="Adicionar Setores"
            >
              &gt;
            </Button>
            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="Remover Setores"
            >
              &lt;
            </Button>
          </Grid>
        </Grid>
        <Grid item>{customList('Setores Selecionados', right)}</Grid>
      </Grid>
    </Grid>
  );
};

export default TransferList;
