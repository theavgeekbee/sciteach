import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function MainContent() {
    const plugin = React.useRef(
        Autoplay({delay: 4000, stopOnInteraction: true})
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-screen-sm"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {[

                    (
                        <CarouselItem key={0}>
                            <div className="p-1 text-center">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className={"text-2xl"}>🧪 What is SciTeach? 🧪</CardTitle>
                                        <CardDescription>About Us</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <strong>SciTeach</strong> is a tutoring club at <strong>CRHS</strong>.
                                        We can help you science-related subjects, like&nbsp;
                                        <strong>biology</strong>, <strong>chemistry</strong>,&nbsp;
                                        <strong>computer science</strong>, and <strong>physics</strong>.
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ),
                    (
                        <CarouselItem key={1}>
                            <div className="p-1 text-center">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className={"text-2xl"}>🗓️ When are the meetings? 🗓️</CardTitle>
                                        <CardDescription>Dates</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        Our meeting dates are currently <strong>TBD</strong>.&nbsp;
                                        Join our <strong>Remind</strong> to stay updated!
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ),
                    (
                        <CarouselItem key={2}>
                            <div className="p-1 text-center">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className={"text-2xl"}>📱 Where can I stay updated? 📱</CardTitle>
                                        <CardDescription>Socials</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        Follow our&nbsp;
                                        <strong>
                                            <a href={"https://www.instagram.com/crhssciteach/"}
                                            className={"text-blue-400 visited:text-blue-400 hover:underline"}>Instagram</a>
                                        </strong>
                                        &nbsp;and join us on&nbsp;
                                        <strong>
                                            <a href={"https://www.remind.com/join/crsciteach"}
                                               className={"text-blue-400 visited:text-blue-400 hover:underline"}>
                                                Remind
                                            </a>&nbsp;
                                        </strong>
                                        using the link or texting <strong>@crsciteach</strong> to <strong>81010</strong>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    )
                ]}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    )
}
