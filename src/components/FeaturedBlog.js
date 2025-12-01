import React from "react"
import Fade from "react-reveal/Fade"

const FeaturedBlog = () => {
  return (
    <Fade duration={2200}>
      <div className="bg-transparent">
        <div className="pt-6 px-6 lg:px-0 mx-auto max-w-screen-xl lg:pt-8  ">
          <h2 className="text-black text-4xl opacity-70 font-semibold pl-4">
          </h2>
           <h3 className="relative text-6xl font-bold">
          <span className="absolute inset-0 text-gray-300">Postingan Terbaru</span>
          <span className="relative bg-gradient-to-l from-sky-600 to-sky-800 bg-clip-text text-transparent">
            Postingan Terbaru
          </span>
          </h3>
          <div className="blog-hover bg-gradient-to-b from-sky-400 to-sky-700 border mt-10 border-gray-500 rounded-lg p-8 md:p-12 mb-8">
            <h2 className="text-black text-3xl font-semibold mb-2">
             Stop Buang Waktu! 5 Alasan Laundrybox Adalah Solusi Cuci Cepat Tepat
            </h2>
            <p className="text-lg  text-black opacity-70 mb-6">
              Apakah Anda lelah menunggu laundry berhari-hari? Temukan bagaimana layanan Express Laundry dari Laundrybox dapat menghemat waktu berharga Anda, menjamin bersih maksimal, dan siap antar-jemput kilat!
            </p>
            <a
              href="/blog/blog-post"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white hover:text-gray-200 rounded-lg border border-white hover:bg-sky-400"
            >
              Baca Selengkapnya
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="blog-hover bg-gradient-to-b from-sky-400 to-sky-700 rounded-lg p-8 md:p-12">
              <h2 className="text-black text-3xl font-semibold mb-2">
                Laundrybox Resmi Hadir! Nikmati Express Laundry dengan Jaminan Antar-Jemput Kilat
              </h2>
              <p className="text-lg font-normal text-black opacity-70 mb-4">
              Kami siap melayani Anda! Baca pengumuman resmi peluncuran Laundrybox di kota Anda. Dapatkan diskon khusus layanan Express dan rasakan pengalaman laundry paling efisien!
              </p>
              <a
                href="/blog/blog-post-1"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white hover:text-gray-200 rounded-lg border border-white hover:bg-sky-400"
              >
                Baca Selengkapnya
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div className="blog-hover bg-gradient-to-b from-sky-400 to-sky-700 rounded-lg p-8 md:p-12">
              <h2 className="text-gray-900 text-3xl font-semibold mb-2">
               Waktunya Pensiun dari Mesin Cuci! Kenapa Generasi Sibuk Pilih Laundrybox?
              </h2>
              <p className="text-lg font-normal text-black opacity-70 mb-4">
                Laundrybox hadir sebagai upgrade gaya hidup. Simak fitur antar-jemput yang super praktis, layanan express, dan garansi kebersihan yang membuat hidup Anda lebih ringan.
              </p>
              <a
                href="/blog/blog-post-2"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white hover:text-gray-200 rounded-lg border border-white hover:bg-sky-400"
              >
                Baca Selengkapnya
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default FeaturedBlog
