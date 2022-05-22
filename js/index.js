const burger = document.querySelector(".burger");
const nav = document.querySelector(".menu__outer");

const handleClick = () => {
  burger.classList.toggle("burger--active");
  nav.classList.toggle("menu--active");
};
burger.addEventListener("click", handleClick);
gsap.fromTo(
  [".hero", ".hero__title"],
  { opacity: 0, scale: 0.5, y: 300 },
  { scale: 1, opacity: 1, duration: 2, ease: "power4", y: 0 }
);

ScrollTrigger.matchMedia({
  // desktop
  "(min-width: 1025px)": () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".glass",
          start: "top top",
          pin: true,
        },
      })

      .fromTo(".glass__title", { y: 300, opacity: 0 }, { opacity: 1, y: 0 }, 0)

      .fromTo(
        ".glass__step-1",
        { y: 200, opacity: 0 },
        { opacity: 1, y: 0, duration: 0.8 },
        1
      )
      .fromTo(
        ".glass__view",
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 0.4 },
        1
      )

      .fromTo(
        ".glass__step-2",
        { y: 200, opacity: 0 },
        { opacity: 1, y: 0, duration: 0.8 },
        2
      )
      .fromTo(
        ".glass__smell",
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 0.4 },
        2
      )

      .fromTo(
        ".glass__step-3",
        { y: 200, opacity: 0 },
        { opacity: 1, y: 0, duration: 0.8 },
        3
      )
      .fromTo(
        ".glass__taste",
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 0.4 },
        3
      )

      .fromTo(".glass__svg", { opacity: 0 }, { opacity: 1 }, 0.5)
      .to(
        ".glass__svg",
        {
          duration: 3,
          motionPath: [
            { x: "0vw", y: 0 },
            { x: "80vw", y: 0 },
          ],
          duration: 5,
        },
        1
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".slider1",
          start: "top top",
          //scrub: true,
          end: "+=100%",
        },
      })

      .to(".type__info-1", { backgroundColor: "#f0f9dd", duration: 1 }, 0)
      .fromTo(
        ".type__white img",
        { y: 300, opacity: 0 },
        { opacity: 1, y: 0, duration: 2 },
        0
      )
      .fromTo(
        ".type__name-1",
        { x: 400, opacity: 0 },
        { opacity: 1, x: 0, duration: 2 },
        0
      )
      .fromTo(
        ".type__text-1",
        { x: 400, opacity: 0 },
        { opacity: 1, x: 0, duration: 2 },
        0.2
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".slider2",
          start: "top 20%",
        },
      })
      .to(".type__info-2", { backgroundColor: "#e69e85", duration: 1 }, 0)
      .fromTo(
        ".type__red img",
        { y: 200, opacity: 0 },
        { opacity: 1, y: 0, duration: 2 },
        0
      )
      .fromTo(
        ".type__name-2",
        { x: 400, opacity: 0 },
        { opacity: 1, x: 0, duration: 2 },
        0
      )
      .fromTo(
        ".type__text-2",
        { x: 400, opacity: 0 },
        { opacity: 1, x: 0, duration: 2 },
        0.2
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".slider3",
          start: "top 20%",
        },
      })
      .to(".type__info-3", { backgroundColor: "#fef7ec", duration: 1 })

      .fromTo(
        ".type__mus img",
        { y: 200, opacity: 0 },
        { opacity: 1, y: 0, duration: 2 },
        0
      )

      .fromTo(
        ".type__name-3",
        { x: 400, opacity: 0 },
        { opacity: 1, x: 0, duration: 2 },
        0
      )
      .fromTo(
        ".type__text-3",
        { x: 400, opacity: 0 },
        { opacity: 1, x: 0, duration: 2 },
        0.2
      );
  },

  "(min-width: 481px)": () => {
    gsap.fromTo(
      ".glass",
      { y: 300, opacity: 0 },
      { opacity: 1, y: 0, duration: 1, delay: 2 }
    );
  },
});
