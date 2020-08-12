const burger = document.getElementById("hamburger")
const closeBurger = document.getElementById("close")
const overlay = document.getElementById("overlay")
const hover1 = document.getElementById("award1")
const hover2 = document.getElementById("award2")
const hover3 = document.getElementById("award3")
const hover4 = document.getElementById("award4")
const hover5 = document.getElementById("award5")
const hover6 = document.getElementById("award6")
const img1 = document.getElementById("awardImg1")
const img2 = document.getElementById("awardImg2")
const img3 = document.getElementById("awardImg3")
const img4 = document.getElementById("awardImg4")
const img5 = document.getElementById("awardImg5")
const img6 = document.getElementById("awardImg6")
burger.addEventListener("click", () => {
    overlay.style.right = "0%"
})
closeBurger.addEventListener("click", () => {
    overlay.style.right = "-100%"
})
hover1.addEventListener("mouseover", show1)
hover1.addEventListener("mouseout", hide1)
function show1() {
    hover1.style.opacity = `1`
    img1.style.display = "block"
}
function hide1() {
    hover1.style.opacity = `0.5`
    img1.style.display = `none`
}
hover2.addEventListener("mouseover", show2)
hover2.addEventListener("mouseout", hide2)
function show2() {
    hover2.style.opacity = `1`
    img2.style.display = "block"
}
function hide2() {
    hover2.style.opacity = `0.5`
    img2.style.display = `none`
}
hover3.addEventListener("mouseover", show3)
hover3.addEventListener("mouseout", hide3)
function show3() {
    hover3.style.opacity = `1`
    img3.style.display = "block"
}
function hide3() {
    hover3.style.opacity = `0.5`
    img3.style.display = `none`
}
hover4.addEventListener("mouseover", show4)
hover4.addEventListener("mouseout", hide4)
function show4() {
    hover4.style.opacity = `1`
    img4.style.display = "block"
}
function hide4() {
    hover4.style.opacity = `0.5`
    img4.style.display = `none`
}
hover5.addEventListener("mouseover", show5)
hover5.addEventListener("mouseout", hide5)
function show5() {
    hover5.style.opacity = `1`
    img5.style.display = "block"
}
function hide5() {
    hover5.style.opacity = `0.5`
    img5.style.display = `none`
}
hover6.addEventListener("mouseover", show6)
hover6.addEventListener("mouseout", hide6)
function show6() {
    hover6.style.opacity = `1`
    img6.style.display = "block"
}
function hide6() {
    hover6.style.opacity = `0.5`
    img6.style.display = `none`
}