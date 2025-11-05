interface StatCardProps {
  label: string
  value: string
  change: string
}

export default function StatCard({ label, value, change }: StatCardProps) {
  const isPositive = change.startsWith("+")

  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <p className="text-sm text-muted-foreground mb-2">{label}</p>
      <div className="flex items-end justify-between">
        <h3 className="text-3xl font-bold text-foreground">{value}</h3>
        <p className={`text-sm font-medium ${isPositive ? "text-accent" : "text-destructive"}`}>{change}</p>
      </div>
    </div>
  )
}
