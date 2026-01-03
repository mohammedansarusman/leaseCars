import { Summary } from "@/components/productFeatures/Summary"
export default function ProductIdLayout({children}){
    return(
        <div className="w-full">
            <h1 className="">Product layout</h1>
            {children}
            <Summary />
            
        </div>
    )
}