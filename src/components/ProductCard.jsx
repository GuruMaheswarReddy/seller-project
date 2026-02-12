const ProductCard = ({ product }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-zinc-950/80 shadow-lg shadow-black/60 ring-1 ring-yellow-500/10 transition hover:-translate-y-2 hover:bg-zinc-900/90 hover:shadow-yellow-500/30 hover:ring-yellow-500/40">
      <div className="relative h-40 overflow-hidden">
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: `url(${product.imageUrl})`,
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate text-sm font-semibold text-white">
            {product.name}
          </h3>
          <span className="shrink-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-2 py-0.5 text-xs font-bold text-black shadow-md shadow-yellow-500/40">
            ${product.price}
          </span>
        </div>
        <p className="mt-1 line-clamp-2 text-xs text-gray-400">
          {product.description}
        </p>
        {product.sellerName && (
          <p className="mt-2 text-[11px] font-medium text-yellow-300/90">
            Seller: {product.sellerName}
          </p>
        )}
      </div>
    </div>
  )
}

export default ProductCard


