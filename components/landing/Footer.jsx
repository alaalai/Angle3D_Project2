export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>كوستمايز برودكت · منصة SaaS عربية</p>
        <div className="flex gap-4">
          <a href="#">الأسعار</a>
          <a href="#">الوثائق</a>
          <a href="#">الدعم</a>
        </div>
      </div>
    </footer>
  );
}
