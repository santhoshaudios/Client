import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

function Gallery() {
  const images=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjHFciRgAtuVVZuCzhTNOYXmdTTHlaKgm8g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIsmpJQm0OTBcGyY-Y3ECq4UMpN2lAcagoQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTbJ6q6nCvC-F8ctwjE8F_gh176HK1p-EcKg&usqp=CAU",
    "data:image/jpeg;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG-2SfD1XLlnszQzPbZ6TR7g65QIY_1KPLnQ&usqp=CAU",

  ]
  return (
    <div className="m-2 my-8"> 
         <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry >
                    {
                      images.map((image,i)=>{
                        return(
                        <img key={i} src={image} alt={`gallery-${i}`} className="m-1" />
                        )
                      })
                    }
                </Masonry>
            </ResponsiveMasonry>
    </div>
  )
}

export default Gallery