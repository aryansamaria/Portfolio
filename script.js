var csr= document.querySelector("#cursor")
var blr= document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    csr.style.left=dets.x+"px"
    csr.style.top=dets.y+"px"
    blr.style.left=dets.x - 100 +"px"
    blr.style.top=dets.y - 100 +"px"
})
gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height: "150px",
    scrollTrigger:{
        trigger:"#nav",
        scroll:"body",
        markers: true,
        start: "top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -20%",
        end:"top -100%",
        scrub:2
    }
})