import React from "react"
import Fade from "react-reveal/Fade"
import BackGroud from "../images/galery1.jpg"
import Galeri2 from "../images/galery2.jpg"
import Galeri3 from "../images/galery3.jpg"
import Galeri4 from "../images/galery4.jpg"

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto mt-6 px-4 sm:px-6 lg:px-8">
      <Fade Duration={2200}>
      <div className="mb-8">
        <div className="transition duration-1000 ease-out opacity-100">
          <div className="w-full bg-gradient-to-r from-sky-600 to-sky-500 p-6 sm:p-8 rounded-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4">
              <span className="bg-gradient-to-t from-sky-500 to-sky-200 bg-clip-text text-transparent">
                GALERI LAUNDRYBOX
              </span>
            </h2>
            <p className="text-base sm:text-lg mt-4 text-gray-800 text-center opacity-90">
              Selamat datang di Galeri Laundrybox. Di sini, kami menampilkan secara transparan proses kerja kami yang menjamin pakaian Anda selalu kembali dalam kondisi terbaik.
            </p>
          </div>
        </div>
      </div>
      </Fade>
    
      <div className="mt-8">
        <Fade bottom cascade>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 xl:gap-8">
          <a
            href="#"
            className="group relative flex h-60 sm:h-72 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100"
          >
            <img
              src={BackGroud}
              loading="lazy"
              alt="serahkan pada ahli kami"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-medium">
              Serahkan pada Ahli Kami
            </span>
          </a>
          <a
            href="#"
            className="group relative flex h-60 sm:h-72 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 sm:col-span-1 md:col-span-2"
          >
            <img
              src={Galeri2}
              loading="lazy"
              alt="mesin industri canggih"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-medium">
              Mesin Industri Canggih
            </span>
          </a>
          <a
            href="#"
            className="group relative flex h-60 sm:h-72 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 sm:col-span-1 md:col-span-2"
          >
            <img
              src={Galeri3}
              loading="lazy"
              alt="Rapi, Siap Pakai, dan Terawat"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-medium">
              Rapi, Siap Pakai, dan Terawat
            </span>
          </a>
          <a
            href="#"
            className="group relative flex h-60 sm:h-72 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100"
          >
            <img
              src={Galeri4}
              loading="lazy"
              alt="KUALITAS dari Bahan hingga Finishing"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-medium">
              Kualitas dari Bahan hingga Finishing
            </span>
          </a>
          
        </div>
        </Fade>
      </div>
    </div>
  )
}

export default Gallery