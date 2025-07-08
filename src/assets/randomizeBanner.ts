const banners = [
    "../../public/assets/gallery31.jpg",
    "../../public/assets/gallery10.jpg",
    "../../public/assets/gallery6.jpg",
    "../../public/assets/gallery11.jpg"
]

export default function bannerExporter () {
    var bannerPath = Math.floor(Math.random() * (banners.length - 1));
    return banners[bannerPath];
}