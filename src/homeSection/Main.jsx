import React, { useEffect, useState } from 'react';
import search from '../utils/search.png';
import axios from 'axios';
import { Howl } from 'howler';
import playing from "../utils/playing.png";
import play from "../utils/play.png";
import next from "../utils/next.png";
import previous from "../utils/previous.png";

export const Main = () => {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:4000/getmusic')
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching music:', error);
      });
  }, []);

  const stopMySound = () => {
    if (sound) {
      sound.stop();
      setSound(null);
    }
  };

  const callMySound = (src) => {
    stopMySound();
    const newSound = new Howl({
      src,
      html5: true,
    });
    setSound(newSound);
    newSound.play();
  };

  const handleNext = () => {
    if (currentSongIndex !== null) {
      const nextIndex = (currentSongIndex + 1) % songs.length;
      setCurrentSongIndex(nextIndex);
      callMySound(`http://localhost:4000${songs[nextIndex].audioUrl}`);
    }
  };

  const handlePrevious = () => {
    if (currentSongIndex !== null) {
      const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      setCurrentSongIndex(prevIndex);
      callMySound(`http://localhost:4000${songs[prevIndex].audioUrl}`);
    }
  };

  return (
    <div className="w-full flex flex-col lg:flex-row h-screen relative">

      {/* Left Section */}
      <div className="w-full lg:w-[80%] flex flex-col bg-gradient-to-b from-[#461313] to-[#180202] p-4 lg:p-8">
        {/* Navigation */}
        <div className="flex flex-col md:flex-row text-white justify-between items-center gap-6">
          <div className="flex gap-8 text-center">
            <h3 className="text-base md:text-lg lg:text-xl">Music</h3>
            <h3 className="text-base md:text-lg lg:text-xl">Podcast</h3>
            <h3 className="text-base md:text-lg lg:text-xl">Live</h3>
            <h3 className="text-base md:text-lg lg:text-xl">Radio</h3>
          </div>
          <div className="relative w-full md:w-[80%] lg:w-[60%] xl:w-[40%]">
            <input
              type="text"
              className="border-0 bg-[#2d0c0c] p-2 md:p-3 rounded-full w-full text-white placeholder-white text-sm md:text-base"
              placeholder="Enter singer name..."
            />
            <img src={search} alt="search" className="absolute right-3 top-2.5 md:top-3 w-4 md:w-5" />
          </div>
        </div>


        {/* Current Song */}
        <div>
          {currentSongIndex !== null ? (
            <div className="flex justify-center my-10 w-full">
              <img
                src={`http://localhost:4000${songs[currentSongIndex].imageUrl}`}
                alt="song-logo"
                className="rounded-xl w-64 lg:w-80 xl:w-96"
              />
            </div>
          ) : (
            <div className="flex justify-center my-10 text-white w-full">
              <h2 className="font-medium text-lg md:text-xl">Not Playing Anything</h2>
            </div>
          )}
        </div>

        {/* Popular Songs */}
        <div className="mx-2 md:mx-8 rounded-xl bg-gray-800 text-white p-4 h-[50vh] overflow-y-scroll">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Popular</h2>
          <div className="flex text-center relative mb-4">
            <h3 className="text-base md:text-lg font-semibold ml-3">#</h3>
            <h3 className="absolute left-[50%] transform -translate-x-[50%] font-semibold text-base md:text-lg">Title</h3>
          </div>
          <div className="space-y-4">
            {songs.map((song, index) => (
              <div
                key={index}
                className="flex justify-between items-center cursor-pointer hover:bg-[#6a0000] hover:p-1"
                onClick={() => {
                  setCurrentSongIndex(index);
                  callMySound(`http://localhost:4000${song.audioUrl}`);
                }}
              >
                <div className="flex gap-4 items-center">
                  <h3 className="text-lg font-semibold text-green-500">{index + 1}</h3>
                  {song.imageUrl && (
                    <img
                      src={`http://localhost:4000${song.imageUrl}`}
                      alt={song.name}
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                </div>
                <h2 className="text-sm md:text-lg font-semibold text-gray-300 hover:text-white">
                  {song.name}
                </h2>
                <div>
                  <img
                    src={playing}
                    alt="iplay"
                    className={`w-6 ${currentSongIndex === index ? 'animate-spin' : ''}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[20%] relative bg-gradient-to-b from-[#2d0c0c] to-[#180202] p-4 lg:p-8 flex lg:flex-col lg:items-center">
        <div className="bg-[#6a0000] lg:absolute lg:bottom-36 lg:left-10 lg:right-auto rounded-lg p-4 text-white flex flex-col text-center w-full lg:w-auto">
          {currentSongIndex !== null ? (
            <div className="flex flex-col gap-4 text-sm md:text-base">
              <p>Now Playing</p>
              <img
                src={`http://localhost:4000${songs[currentSongIndex].imageUrl}`}
                alt="song-logo"
                className="rounded-xl w-40 lg:w-64 xl:w-80"
              />
              <p>{songs[currentSongIndex].name}</p>
              <div className="flex justify-around mt-2">
                <img src={previous} alt="prev-music" className="w-6 cursor-pointer" onClick={handlePrevious} />
                <img src={play} alt="stop-music" className="w-6 cursor-pointer" onClick={stopMySound} />
                <img src={next} alt="next-music" className="w-6 cursor-pointer" onClick={handleNext} />
              </div>
            </div>
          ) : (
            <h3 className="text-white p-2">No Song Selected</h3>
          )}
        </div>
      </div>
    </div>
  );
};
