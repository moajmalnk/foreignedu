export default function StickyWhatsApp({ number = "919876543210" }) {
  const waUrl = `https://wa.me/${number}`;
  return (
    <a href={waUrl} className="sticky-wa" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">💬</a>
  );
}
