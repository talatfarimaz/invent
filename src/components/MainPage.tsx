import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Grid, TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getSearchedMovies} from "../apis/MovieApis";
import {apikey} from "../constants/ConstantTypes";
import {SEARCHED_MOVIES} from "../state/actionTypes";
import {SearchedMovieModel} from "../models/SearchedMovieModel";
import DefaultTheme from "../themes/DefaultTheme";

interface Column {
    id: 'id' | 'name' | 'date';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: Column[] = [
    {id: 'id', label: 'IMDb ID', minWidth: 170},
    {id: 'name', label: 'Movie Name', minWidth: 100},
    {id: 'date', label: 'Release Date', minWidth: 100},
];

interface Data {
    id: string;
    name: string;
    date: string;
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 500,
        marginTop: 16
    },
    formInputMargin: {
        marginTop: 16
    },
    formBG: {
        backgroundColor: '#a3dcf8'
    }
});

export default function MainPage() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const theme = DefaultTheme;
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    // @ts-ignore
    const searchedMovies = useSelector((state) => state.app.searchedMovies) as SearchedMovieModel;
    const [type, setType] = React.useState<string | null>(null);
    const [year, setYear] = React.useState<number | null>(null);
    const [movie, setMovie] = React.useState<string | null>("pokemon");
    const [rowsData, setRowsData] = React.useState<Data [] | null>(null)


    useEffect(() => {
        refreshSearch()
    }, []);

    useEffect(() => {
        if (movie !== null && movie !== "") {
            refreshSearch()
        } else {
            setRowsData([])
        }

    }, [type, year, movie, page]);

    useEffect(() => {
        if (searchedMovies != null && searchedMovies.Response === 'True') {
            if (searchedMovies.Search.length > 0) {
                const tempRowsData: Data [] = []
                searchedMovies.Search.map((movie) => {
                    tempRowsData.push(createData(movie.imdbID, movie.Title, movie.Year))
                })
                setRowsData(tempRowsData)
            }
        } else {
            setRowsData([])
        }
    }, [searchedMovies]);

    const refreshSearch = (): void => {
        if (movie !== null) {
            // @ts-ignore
            getSearchedMovies(apikey, movie, type, page, year).then((response) => {
                dispatch({
                    type: SEARCHED_MOVIES,
                    payload: response,
                });
            })
        }

    }

    const createData = (id: string, name: string, date: string): Data => {
        return {id, name, date};
    }

    const handleChangeType = (event: React.ChangeEvent<{ value: unknown }>) => {
        setType(event.target.value as string);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage + 1);
    };

    const selectMovie = (imdbId: string) => {
        window.location.href = 'movie/?imdbId=' + imdbId;
    }


    return (
        <Paper className={classes.root}>
            <Grid container spacing={2} className={classes.formBG}>
                <Grid item xs={6}>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth={true}>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={handleChangeType}
                        >
                            <MenuItem value={"movie"}>Movie</MenuItem>
                            <MenuItem value={"series"}>Series</MenuItem>
                            <MenuItem value={"episode"}>Episode</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth={true}
                                 className={classes.formInputMargin}

                    >
                        <TextField
                            value={year}
                            onChange={(e) => {
                                setYear(parseInt(e.target.value))
                            }}
                            type="number"
                            placeholder={'Year (1900 - 2024)'}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth={true}
                                 className={classes.formInputMargin}

                    > <TextField
                        value={movie}
                        onChange={(e) => {
                            setMovie(e.target.value)
                        }}
                        type="text"
                        placeholder={'Movie Name'}
                    />
                    </FormControl>
                </Grid>
            </Grid>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsData?.map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id} onClick={() => {
                                    selectMovie(row.id)
                                }}>
                                    {columns.map((column, index) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10]}
                component="div"
                count={(searchedMovies !== null && searchedMovies.Response === "True") ? parseInt(searchedMovies.totalResults) : 0}
                rowsPerPage={rowsPerPage}
                page={page - 1}
                onPageChange={handleChangePage}
            />
        </Paper>
    );
}
