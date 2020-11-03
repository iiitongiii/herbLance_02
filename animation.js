var timeline = gsap.timeline({});
timeline.to(".banner", {duration:0.1, opacity:1 });
timeline.from(".logo", {duration:0.5, opacity:0, y:50});
timeline.from(".nav ul li", {stagger:0.1,duration:0.5, opacity:0, y:50},"-=0.5");
timeline.from(".circle", {duration:1,opacity:0,scale:0},"-=0.2");
timeline.from("#KV", {duration:1, opacity:0, y:50},"-=0.5");
timeline.from(".slogan", {duration:1, opacity:0,y:20},"-=0.3");

gsap.registerPlugin(ScrollTrigger)
gsap.from(".aboutUs", {
    y:"100px",
    opacity: 0,
    duration:1.5, 
    scrollTrigger: {
        trigger:".aboutUs",
        start: "top 50%",
        end: "+=100",
        toggleActions: "play play play reverse",
    }
})

gsap.from(".news", {
    y:"100px",
    opacity: 0,
    duration:1.5, 
    scrollTrigger: {
        trigger:".news",
        start: "top 50%",
        end: "+=100",
        toggleActions: "play play play reverse",
    }
})

gsap.from(".footer", {
    y:"100px",
    opacity: 0,
    duration:1.5, 
    scrollTrigger: {
        trigger:".news",
        start: "top 50%",
        end: "+=100",
        toggleActions: "play play play reverse",
    }
})