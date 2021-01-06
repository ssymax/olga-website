import gsap from 'gsap';

export const contactData = {
  name: 'Olga Łukasik',
  phoneHref: 'tel:+48508200455',
  emailHref: 'mailto:olga.lukasikk@gmail.com',
  address: {
    street: 'ul. Michała Kajki 5, pokój 16',
    city: '11-041 Olsztyn',
  },
  phone: '508-200-455',
  email: 'olga.lukasikk@gmail.com',
};

// Enter page animation

export const pageTimeline = (head, wrapper, addedAnimation) => {
  const header = head.current;
  const wrap = wrapper.current;

  const tl = gsap.timeline({ paused: true });

  tl.fromTo(
    header,
    { autoAlpha: 0, scale: 0.01 },
    {
      duration: 0.8,
      scale: 1,
      transformOrigin: '50% 50%',
      autoAlpha: 1,
      ease: 'Power4.easeOut',
    }
  )
    .fromTo(
      wrap,
      { autoAlpha: 0, scale: 0.9 },
      {
        autoAlpha: 1,
        scale: 1,
        transformOrigin: '50% 0',
      }
    )
    .add(addedAnimation);

  return tl.play().delay(0.5);
};
