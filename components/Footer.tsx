import ThemeToggle from "@/components/ThemeToggle";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <p className="text-xs tracking-widest text-ink-muted">
          © {new Date().getFullYear()} SAVAGE FLOW CO.
        </p>
        <ThemeToggle />
      </div>
    </footer>
  );
}
