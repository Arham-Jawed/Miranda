function loader(){
    var tl = gsap.timeline();
tl.to(".page1",{
    y : "100vh",
    scale : 0.5,
    duration : 0,
})
tl.to(".page1",{
    y : "10vh",
    duration : 1,
    delay : 1,
})
tl.to(".page1",{
    y : 0,
    rotate : "720deg",
    scale : 1,
})
}
loader();
function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
}
loco();