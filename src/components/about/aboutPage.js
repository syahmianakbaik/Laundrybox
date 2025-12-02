import React from "react"
import Fade from "react-reveal/Fade"

const WorkPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      {/* <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row mb-5 max-h-80">
          <div className="w-2/4 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-full lg:w-full">
            <h1 className="text-5xl mt-5 font-bold text-white">
              test<br></br>
            </h1>
            <p className="mt-5 text-white opacity-70">
              test
            </p>
          </div>
          <div className="overflow-hidden rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6 object-cover object-center h-full w-full">
            <img src={Image3} alt="image"></img>
          </div>
        </div>
      </Fade> */}

      <Fade bottom cascade>
        <div className="mt-10  flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          {/* <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Performance</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">95+</h4>
          </div> */}

          {/* <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Accessibility</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div> */}
          {/* <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Best Practices</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div> */}
          {/* <div className="lg:rounded-xl lg:w-1/3 lg:bg-dp bg-dp p-8 rounded-xl m-5 xxs:w-full xxs:bg-dp xxs:rounded-xl xs:w-full xs:bg-dp xs:rounded-xl sm:hidden md:hidden lg:block">
            <h3 className="text-white text-2xl">SEO</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div> */}
        </div>
      </Fade>
      <div className="mt-4 px-8">
        {/* <h2 className="text-black text-4xl font-semibold">PERFORMANCE</h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Time to lock new speeds
        </h3> */}

        <p className="text-black font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Laundrybox hadir sebagai jawaban atas tuntutan gaya hidup modern yang serba cepat, menawarkan solusi laundry 
          premium yang mengutamakan kualitas, higienitas, dan efisiensi waktu Anda. Kami percaya bahwa tugas mencuci
          pakaian seharusnya tidak menjadi beban yang menguras waktu dan energi. Oleh karena itu, kami didukung oleh
          teknologi pencucian terkini dan tim profesional yang terlatih untuk menangani setiap helai pakaian Anda,
          mulai dari pakaian harian, seragam kantor, hingga tekstil sensitif seperti gaun desainer atau karpet mewah.
          Filosofi kami adalah memberikan hasil yang benar-benar bersih dan terawat sempurna, memastikan pakaian Anda 
          tidak hanya terlihat baik tetapi juga memiliki umur pakai yang lebih panjang.</p>
        <p className="text-black font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Komitmen kami terhadap kualitas tidak hanya berhenti pada mesin canggih, tetapi meluas hingga pemilihan bahan baku.
          Kami menggunakan deterjen dan pewangi premium yang ramah lingkungan dan diformulasikan khusus untuk menjaga
          kelembutan serat kain sekaligus efektif menghilangkan noda yang membandel. Setiap pakaian diperlakukan melalui
          proses penanganan yang detail, dimulai dari inspeksi sebelum pencucian, penanganan noda spesifik, hingga proses
          pengeringan dan setrika yang disesuaikan dengan jenis bahan. Hasilnya, pakaian dikembalikan dalam kondisi terbaik:
          rapi, harum, dan siap pakai. Kami memperlakukan setiap pakaian yang masuk ke "box" kami sebagai investasi berharga 
          yang harus dijaga keindahannya.
        </p>
        <p className="text-black font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
         Untuk memaksimalkan kenyamanan pelanggan, Laundrybox mengintegrasikan layanan kami dengan kemudahan akses digital. Melalui platform yang mudah digunakan, Anda dapat menjadwalkan layanan antar-jemput, memantau status pesanan, dan menerima kembali pakaian Anda yang sudah dikemas secara eksklusif dan profesional—tepat waktu di depan pintu rumah Anda. Kami hadir bukan hanya sebagai penyedia jasa laundry, tetapi sebagai mitra tepercaya yang membantu Anda mendapatkan kembali waktu berharga Anda. Laundrybox adalah pilihan cerdas bagi Anda yang menginginkan kebersihan optimal tanpa harus mengorbankan waktu dan tenaga.
        </p>
      </div>
    </div>
  )
}

export default WorkPage
