// import { useEffect, useRef, useState } from 'react';

// export default function useScrollFadeIn() {
//   const ref = useRef<HTMLDivElement>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect(); // fade-in only once
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return {
//     ref,
//     className: `scroll-fade-in ${visible ? 'visible' : ''}`,
//   };
// }
