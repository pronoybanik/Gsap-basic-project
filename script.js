gsap.to("#boxOne", {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "blue",
    borderRadius: "50%",
    repeat: -1,
    yoyo: true
});

gsap.from("#boxTwo", {
    x: 1000,
    duration: 2,
    delay: 1
});

gsap.from("h1", {
    margin: "5px",
    opacity: 0,
    duration: 2,
    y: 30,
    delay: 1,
    stagger: 1,
})

var lt = gsap.timeline()

lt.to("#itemOne", {
    x: 1200,
    duration: 2,
    delay: 1,

})
lt.to("#itemTwo", {
    x: 1200,
    duration: 2,
    delay: 1,

})
lt.to("#itemThree", {
    x: 1200,
    duration: 2,
    delay: 1,

})