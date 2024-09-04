gsap.from("#page1 #box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360
})

gsap.from("#page2 h1", {
    scale: 0,
    duration: 2,
    opacity: 0,
    x: 500,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 40%",
        scrub: 3 //  animation showing slow
    }
})

gsap.from("#page2 h2", {
    scale: 0,
    duration: 2,
    opacity: 0,
    x: -500,
    scrollTrigger: {
        trigger: "#page2 h2",
        scroller: "body",
        markers: true,
        start: "top 50%",
    }
})

gsap.from("#page3 #box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360,
    scrollTrigger: "#page3 #box"
})