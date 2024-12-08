import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {MovieDetailModel} from "../models/MovieDetailModel";
import {getMovieDetails} from "../apis/MovieApis";
import {apikey} from "../constants/ConstantTypes";
import {SELECTED_MOVIE} from "../state/actionTypes";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    imdbFont: {
        fontWeight: "bolder",
    }
});
export default function MovieDetailPage() {
    const dispatch = useDispatch();
    const classes = useStyles();

    // @ts-ignore
    const selectedMovie = useSelector((state) => state.app.selectedMovie) as MovieDetailModel;

    const [imdbId, setImdbId] = React.useState<string | null>(null);


    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const imdbId = searchParams.get('imdbId');
        setImdbId(imdbId)

    }, []);


    useEffect(() => {
        if (imdbId !== null) {
            getMovieDetails(apikey, imdbId).then((response) => {
                dispatch({
                    type: SELECTED_MOVIE,
                    payload: response,
                });
            })
        }
    }, [imdbId]);


    return (
        selectedMovie !== null &&
        <Grid container spacing={2}>

            <Grid item xs={3}>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <img src={selectedMovie.Poster}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant={"h5"}>
                                        {selectedMovie.Title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className={classes.imdbFont}>IMDb Rating</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{selectedMovie.imdbRating}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className={classes.imdbFont}>Website</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{selectedMovie.Website}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className={classes.imdbFont}>Language</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{selectedMovie.Language}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className={classes.imdbFont}>Awards</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{selectedMovie.Awards}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className={classes.imdbFont}>Actors</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{selectedMovie.Actors}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className={classes.imdbFont}>BoxOffice</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{selectedMovie.BoxOffice}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className={classes.imdbFont}>Country</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{selectedMovie.Country}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className={classes.imdbFont}>Genre</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{selectedMovie.Genre}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className={classes.imdbFont}>imdbVotes</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{selectedMovie.imdbVotes}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={3}>
            </Grid>
        </Grid>

    );
}
