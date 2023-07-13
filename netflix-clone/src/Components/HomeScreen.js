import React from 'react'
import Navbar from'../Components/Navbar';
import Banner from './Banner';
import Row from './Row'
import requests from '../Data/request';

function HomeScreen(){
return (
    <>
    {/* Navbar */}
    <Navbar></Navbar>
    {/* Banner */}
    <Banner></Banner>
    
    {/* Rows */}
    <Row title="Netflix Originals"
    fetchURL={requests.fetchNetflixOriginals}
    ></Row>
    <Row title="Top Rated"
    fetchURL={requests.fetchTopRated}
    ></Row>
    <Row title="Action"
    fetchURL={requests.fetchActionMovies}
    ></Row>
    <Row title="Comedy"
    fetchURL={requests.fetchComedyMovies}
    ></Row>
 
    </>
)
}
export default HomeScreen;
