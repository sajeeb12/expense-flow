import HeaderTitle from "./header-title";

export default function AppHeader(){
    return(
        <header className="flex h-16 items-center justify-between border-b px-6">
            <div>
                <HeaderTitle/>
            </div>

            <div>
                Theme Toggle
            </div>
        </header>
    )
}