import Image from "next/image";

function Products() {
  return (
    <section className="w-full max-w-[88.375rem] px-6 mx-auto my-16">
      <h1 className="font-semibold text-3xl mb-4">Products</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2">
          <h3 className="text-zinc-700 font-semibold text-xl">Air Pass</h3>
          <p className="text-zinc-700 mt-2 mb-4">
            Get your license & enjoy flying
          </p>
          <Image
            src="/imgs/product-1.jpg"
            height={360}
            width={450}
            className="object-cover h-[350px] w-full rounded-sm"
            alt="Product Img !"
          />
        </div>
        <div className="col-span-2">
          <h3 className="text-zinc-700 font-semibold text-xl">
            Airloop packages
          </h3>
          <p className="text-zinc-700 mt-2 mb-4">
            Enjoy Airloop packages with different choices!
          </p>
          <Image
            src="/imgs/product-2.jpg"
            height={360}
            width={450}
            className="object-center h-[150px] w-full rounded-sm"
            alt="Product Img !"
          />
        </div>
      </div>
    </section>
  );
}

export default Products;
