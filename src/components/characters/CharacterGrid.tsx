import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { RadioPanel } from "../ui/RadioPanel";
import { useState } from "react";

type CharacterGridProps = {
  characters: Array<Record<string, string | number>>;
  isLoading: boolean;
};

type ImageProps = {
  image: any
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    Card: {
      maxWidth: 300,
    },
    media: {
      height: "300px",
      width: "300px",
      backgroundSize: "contain",
    },
  })
);

export const CharacterGrid: React.FC<CharacterGridProps> = ({
  characters,
  isLoading,
}) => {
  const classes = useStyles();
  const [selectedRadioBtn, setSelectedRadioBtn] = useState("Any");

  const characterStatus = (
    characters: Array<Record<string, string | number>>,
    option: string = "Any"
  ) => {
    if (option === "Any") {
      return characters;
    } else {
      return characters.filter((character: Record<string, string | number>) => {
        return character.status === option;
      });
    }
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <RadioPanel
        getSelectedRadioBtn={(option: string) => setSelectedRadioBtn(option)}
      />
      <Grid container spacing={5}>
        {characterStatus(characters, selectedRadioBtn).map((character: Record<string, string | number | any> ) => (
          <Grid
            item
            key={character.id}
            xs={12}
            md={6}
            lg={4}
            className={classes.root}
          >
            <Card className={classes.Card}>
              <CardMedia
                className={classes.media}
                image={character.image}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {character.name}
                </Typography>
              </CardContent>
              <CardActions disableSpacing></CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
