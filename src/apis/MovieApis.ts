import axios from "axios";

const Endpoints = {
    GetOMDbUrl: 'https://www.omdbapi.com/',
}


export const getSearchedMovies = async (apikey: string, s: string, type?: string, page?: number, y?: number) => {
    return await axios.get(Endpoints.GetOMDbUrl, {
        params: {
            apikey,
            s,
            type,
            page,
            y
        }
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error
        });
}

export const getMovieDetails = async (apikey: string, i: string) => {
    return await axios.get(Endpoints.GetOMDbUrl, {
        params: {
            apikey,
            i
        }
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error
        });
}

