var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", function (params) {
    gsap.to(cursor, {
        x: params.x,
        y: params.y,
        duration: 1,
    })
});

imageDiv.addEventListener("mouseenter", function (params) {
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 2,
        backgroundColor: "#ffffff8a"
    })

})
imageDiv.addEventListener("mouseleave", function (params) {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#f5deb3"
    })
})