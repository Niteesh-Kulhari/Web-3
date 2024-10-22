import { ModeToggle } from "../mode-toggle";


export default function NavBar ( ) {
    return (
        <div className="flex justify-center"> 
            <div className="shadow-lg dark:shadow-gray-950 z-[50] flex border bg-gray-100 border-gray-400 dark:border-gray-900  items-center m-8 rounded-full p-3 justify-between w-3/5   dark:bg-background/50 backdrop-blur-lg	">
            <div className="h-12 w-12 ml-2"><img className="rounded-full" src="https://s3.coinmarketcap.com/static-gravity/image/5cc0b99a8dd84fbfa4e150d84b5531f2.png"></img></div>
            <div className="p-2 mr-2">
                <ModeToggle/>
            </div>
        </div>
        </div>
        
    )
}