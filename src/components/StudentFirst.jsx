import useScrollReveal from '../hooks/useScrollReveal';

export default function StudentFirst() {
  const textRef = useScrollReveal({ direction: 'left' });
  const imageRef = useScrollReveal({ direction: 'right' });

  return (
    <section id="student-first" className="section section--cream">
      <div className="container">
        <div className="student-first grid-split">
          <div className="student-first__content" ref={textRef}>
            <h2 className="student-first__title">Student-First Expertise</h2>
            <p className="student-first__text">
              At Foreign Education Consultancy, we bridge the gap between your aspirations and world-class European degrees. Our mission is built on transparency and integrity, specializing in affordable study pathways such as Latvia, where tuition starts from ₹3 lakhs INR, and Georgia&apos;s premier medical programs. With our student-first approach and deep expertise, we provide clear, reliable guidance to ensure your international education journey is both successful and budget-friendly.
            </p>
          </div>
          <div className="student-first__image-wrap" ref={imageRef}>
            <img
              src="/student-first%20expertise.avif"
              alt="Foreign Education Consultancy team"
              className="student-first__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
