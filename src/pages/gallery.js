import React from "react"
import Gallery from "../components/gallery-page"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GalleryPage = () => {
  return (
    <Layout>
      <Seo
        title="gallery | Laundrybox"
        description="Lihat koleksi foto layanan laundry premium Laundrybox kami. Temukan bagaimana kami merawat pakaian Anda dengan kualitas terbaik dan perhatian terhadap detail."
      ></Seo>
      <Gallery></Gallery>
    </Layout>
  )
}

export default GalleryPage
