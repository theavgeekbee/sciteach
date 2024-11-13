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
        Autoplay({ delay: 100, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-screen-sm"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {
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
                    )
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
