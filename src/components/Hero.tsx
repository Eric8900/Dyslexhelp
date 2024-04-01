import { Button } from "@/components/ui/button"

function Hero() {

    return (
        <>
            <div className="flex flex-col items-center justify-center p-5">
                <img src="/front_page.png" alt="" />
                <h1 className="text-5xl font-extrabold text-center">WELCOME! LET'S GET STRONGER!</h1>
                <div className="flex flex-col md:flex-row m-16">
                    <Button className="md:mr-10 px-16 py-5" asChild>
                        <a href="/students">As a Student</a>
                    </Button>
                    <Button className="md:mt-0 mt-5 px-16 py-5" asChild>
                        <a href="/teacher">As a Teacher</a>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Hero
