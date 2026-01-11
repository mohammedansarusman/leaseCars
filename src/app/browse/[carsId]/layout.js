import { Summary } from "@/components/productFeatures/Summary"
export default function ProductIdLayout({children}){
    return(
        <div className="w-full">
            <h1 className=""></h1>
            {children}
            <Summary />
            
        </div>
    )
}