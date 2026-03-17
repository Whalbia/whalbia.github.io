export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] font-medium text-text-muted bg-accent-muted px-3 py-1 rounded-full whitespace-nowrap">
      {children}
    </span>
  );
}
