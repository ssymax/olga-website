import gsap from 'gsap';

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

// TransitionLink page exit animation

export const pageTransition = ({ node, exit }) => {
  const tl = gsap.timeline();
  const duration = exit.length;
  tl.fromTo(
    node,
    { autoAlpha: 1, scale: 1 },
    { duration, autoAlpha: 0, scale: 0.9, transformOrigin: 'center 0' }
  );
  return tl.play();
};

// Main page animation

export const mainPageTimeline = (reference) => {
  const img = reference.current;

  const tl = gsap.timeline();

  tl.fromTo(img, { autoAlpha: 0, scale: 1.05 }, { duration: 5, autoAlpha: 1, scale: 1 }).delay(1);

  return tl.play();
};

// about me page animation

export const aboutPageTimeline = (reference) => {
  const content = Array.from(reference.current.children);
  const tl = gsap.timeline();

  tl.fromTo(
    content,
    { autoAlpha: 0, scale: 1.1 },
    { duration: 0.3, autoAlpha: 1, scale: 1, stagger: 0.2 }
  );
  return tl.play();
};

// education page animation

export const eduPageTimeline = (reference) => {
  const grids = Array.from(reference.current.children);
  const tl = gsap.timeline({ paused: true });
  tl.fromTo(
    grids,
    { autoAlpha: 0, y: '-=40' },
    {
      duration: 1,
      autoAlpha: 1,
      y: 0,
      stagger: 0.7,
    }
  );
  return tl.play();
};

// consultation page animation

export const consultationTimeline = (wrap, one, two) => {
  const infoWrap = Array.from(wrap.current.children);
  const bgOne = one.current;
  const bgTwo = two.current;

  const tl = gsap.timeline({ paused: true });
  gsap.set(infoWrap, { autoAlpha: 0, zIndex: '1' });
  gsap.set([bgOne, bgTwo], { width: '0', height: '2px', zIndex: '-1' });

  infoWrap.forEach((el1, index) => {
    const el2 = bgOne[index];
    const el3 = bgTwo[index];

    tl.to(el1, { duration: 0.3, autoAlpha: 1 })
      .to([el2, el3], { duration: 0.4, width: '100%', ease: 'Expo.easeOut' })
      .to([el2, el3], { duration: 0.4, height: '100%', ease: 'Expo.easeOut' });
  });
  return tl.play();
};

// contact & prices pages animation

export const boxesTimeline = (reference) => {
  const boxes = Array.from(reference.current.children);
  const boxTl = gsap.timeline({ paused: true });

  gsap.set(boxes, { autoAlpha: 0, scale: 0.9 });

  const alphaEasing = {
    autoAlpha: 1,
    ease: 'Power2.easeOut',
    scale: 1,
  };

  boxes.forEach((box) => boxTl.to(box, { ...alphaEasing }));

  return boxTl.play();
};
