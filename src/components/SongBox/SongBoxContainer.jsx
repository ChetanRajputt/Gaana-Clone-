import React from 'react'
import SongBox from './SongBox'
import songsData from "../../api/songsData.json";

const SongBoxContainer = () => {

    // create a new empty array of songs for set the lists of songs of songboxes
    let trendingSongs = new Array();
    let newReleases = new Array();
    let popularInHindi = [];
    let popularInPunjabi = [];
    let gaanaOriginals = [];

    // divide the songsData (.json) array to a list of songs
    trendingSongs = songsData.slice(0, 12);
    newReleases = songsData.slice(11, 23);
    popularInHindi = songsData.slice(22, 34);
    popularInPunjabi = songsData.slice(33, 45);
    gaanaOriginals = songsData.slice(44, 55);


    return (
        <div>
            <SongBox id={"Trending Songs"} data={trendingSongs} />
            <SongBox id={"New Releases"} data={newReleases} />
            <SongBox id={"Popular In Hindi"} data={popularInHindi} />
            <SongBox id={"Popular In Punjabi"} data={popularInPunjabi} />
            <SongBox id={"Gaana Originals"} data={gaanaOriginals} />
        </div>
    )
}

export default SongBoxContainer
