import img from "../../images/img1.jpg";
import img2 from "../../images/img2.jpeg";
import img3 from "../../images/img3.jpeg";
import img4 from "../../images/img4.jpeg";
import img5 from "../../images/img5.jpeg";
import img6 from "../../images/img6.jpeg";
import img7 from "../../images/img7.jpeg";
import img8 from "../../images/img8.jpeg";
import imga from "../../images/imga.jpeg";
import imgc from "../../images/imgc.jpeg";
import imgd from "../../images/imgd.jpeg";
import imgb from "../../images/imgb.jpeg";


import "./Gallery.css";

const Gallery = () => {
	return (
		<div className="GalleryPage">
			<h1>Gallery</h1>

			<>
				<div className="gallery">
					<div className="gallery__column">
						<figure className="gallery__thumb">
							<img
								src={imga}
								alt="Portrait by Jessica Felicio"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Jessica Felicio
							</figcaption>
						</figure>
						<figure className="gallery__thumb">
							<img
								src={imgc}
								alt="Portrait by Oladimeji Odunsi"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Oladimeji Odunsi
							</figcaption>
						</figure>

						<figure className="gallery__thumb">
							<img
								src={imgd}
								alt="Portrait by Alex Perez"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Alex Perez
							</figcaption>
						</figure>
					</div>

					<div className="gallery__column">
						<figure className="gallery__thumb">
							<img
								src={imgb}
								alt="Portrait by Noah Buscher"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Noah Buscher
							</figcaption>
						</figure>

						<figure className="gallery__thumb">
							<img
								src={img}
								alt="Portrait by Ivana Cajina"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Ivana Cajina
							</figcaption>
						</figure>

						<figure className="gallery__thumb">
							<img
								src={img8}
								alt="Portrait by Sam Burriss"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Sam Burriss
							</figcaption>
						</figure>
					</div>

					<div className="gallery__column">
						<figure className="gallery__thumb">
							<img
								src={img7}
								alt="Portrait by Mari Lezhava"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Mari Lezhava
							</figcaption>
						</figure>

						<figure className="gallery__thumb">
							<img
								src={img2}
								alt="Portrait by Ethan Haddox"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Ethan Haddox
							</figcaption>
						</figure>

						<figure className="gallery__thumb">
							<img
								src={img3}
								alt="Portrait by Amir Geshani"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Amir Geshani
							</figcaption>
						</figure>
					</div>

					<div className="gallery__column">
						<figure className="gallery__thumb">
							<img
								src={img4}
								alt="Portrait by Guilian Fremaux"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Guilian Fremaux
							</figcaption>
						</figure>

						<figure className="gallery__thumb">
							<img
								src={img5}
								alt="Portrait by Jasmin Chew"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Jasmin Chew
							</figcaption>
						</figure>

						<figure className="gallery__thumb">
							<img
								src={img6}
								alt="Portrait by Dima DallAcqua"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Dima DallAcqua
							</figcaption>
						</figure>
					</div>
				</div>
			</>
		</div>
	);
};

export default Gallery;
