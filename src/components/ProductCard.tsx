interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

const ProductCard = ({ image, title, description }: ProductCardProps) => (
  <div className="group bg-black/40 rounded-3xl shadow-xl border-2 border-green-400/30 overflow-hidden transform-gpu hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col items-center">
    <div className="w-full h-48 bg-gradient-to-br from-green-900 via-emerald-900 to-black flex items-center justify-center">
      <img
        src={image}
        alt={title}
        className="w-32 h-32 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <div className="p-6 flex-1 flex flex-col items-center">
      <h4 className="text-2xl font-bold text-green-200 mb-2 text-center">{title}</h4>
      <p className="text-green-100 text-center text-base">{description}</p>
    </div>
  </div>
);

export default ProductCard;
