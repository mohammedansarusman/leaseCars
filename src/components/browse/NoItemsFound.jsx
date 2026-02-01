import Image from "next/image";
export const NoItemsFound = () => {

  return (
    <div className="w-full h-full p-[50px]">
        <h1 className="text-gray-400 text-2xl font-semibold">No Items Found</h1>
        <div className="w-full h-full">
            <Image src="/no-items-found.jpg" alt="No Items Found" width={1000} height={500} className="w-full object-contain" />
        </div>
    </div>
  )
}
