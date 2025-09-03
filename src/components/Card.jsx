export default function Card({ children, className = "" }) {
  return (
    <div className={`card-base soft-shadow ${className}`}>
      {children}
    </div>
  );
}


